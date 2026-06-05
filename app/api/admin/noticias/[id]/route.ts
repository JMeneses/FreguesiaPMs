import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { objectStorage } from '@/lib/object-storage'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth()
    if (!session) {
        return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { id } = await params

    try {
        const formData = await request.formData()
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        let imageUrl = formData.get('imageUrl') as string | null
        const imageFile = formData.get('imageFile') as File | null
        const galleryFiles = formData.getAll('galleryFiles') as File[]
        const keptImages = formData.getAll('existingImages') as string[]

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

        const newImages: string[] = []
        if (galleryFiles && galleryFiles.length > 0) {
            for (const file of galleryFiles) {
                if (file.size > 0) {
                    const filename = `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`
                    await objectStorage.uploadFile(file, filename)
                    newImages.push(`/api/uploads/${filename}`)
                }
            }
        }

        const existing = await prisma.news.findUnique({
            where: { id },
            select: { images: true },
        })

        if (!existing) {
            return NextResponse.json({ error: 'Notícia não encontrada' }, { status: 404 })
        }

        const previousImages = existing.images || []
        const validKeptImages = keptImages.filter((img) => previousImages.includes(img))

        await prisma.news.update({
            where: { id },
            data: {
                title,
                content,
                imageUrl,
                images: [...validKeptImages, ...newImages],
            },
        })

        const removedImages = previousImages.filter((img) => !validKeptImages.includes(img))
        for (const img of removedImages) {
            if (img.startsWith('/api/uploads/')) {
                const filename = img.replace('/api/uploads/', '')
                await objectStorage.deleteFile(filename)
            }
        }

        revalidatePath('/admin/noticias')
        revalidatePath('/noticias')
        revalidatePath('/')

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[POST /api/admin/noticias/[id]] Error:', error)
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
    }
}
