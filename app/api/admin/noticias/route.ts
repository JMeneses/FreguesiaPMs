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
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        let imageUrl = formData.get('imageUrl') as string | null
        const imageFile = formData.get('imageFile') as File | null
        const galleryFiles = formData.getAll('galleryFiles') as File[]
        const images: string[] = []

        if (!title || !content) {
            return NextResponse.json({ error: 'Campos obrigatórios em falta' }, { status: 400 })
        }

        if (imageFile && imageFile.size > 0) {
            const filename = `news-${Date.now()}-${imageFile.name}`
            await objectStorage.uploadFile(imageFile, filename)
            imageUrl = `/api/uploads/${filename}`
        }

        if (!imageUrl || imageUrl.trim() === '') {
            imageUrl = null
        }

        if (galleryFiles && galleryFiles.length > 0) {
            for (const file of galleryFiles) {
                if (file.size > 0) {
                    const filename = `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`
                    await objectStorage.uploadFile(file, filename)
                    images.push(`/api/uploads/${filename}`)
                }
            }
        }

        const slug =
            title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-') +
            '-' +
            Date.now()

        await prisma.news.create({
            data: {
                title,
                content,
                imageUrl,
                images,
                slug,
            },
        })

        revalidatePath('/admin/noticias')
        revalidatePath('/noticias')
        revalidatePath('/')

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[POST /api/admin/noticias] Error:', error)
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
    }
}
