import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { objectStorage } from '@/lib/object-storage'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    try {
        const formData = await request.formData()
        const file = formData.get('file') as File | null
        const folderId = (formData.get('folderId') as string) || null

        if (!file || file.size === 0) {
            return NextResponse.json({ error: 'Nenhum ficheiro selecionado' }, { status: 400 })
        }

        const filename = `${Date.now()}-${file.name}`
        await objectStorage.uploadFile(file, filename)

        const url = `/api/uploads/${filename}`

        await prisma.document.create({
            data: {
                name: file.name,
                url,
                folderId: folderId === 'null' ? null : folderId,
            },
        })

        revalidatePath('/admin/documentos')
        revalidatePath('/documentos')

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[POST /api/admin/documentos] Error:', error)
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
    }
}
