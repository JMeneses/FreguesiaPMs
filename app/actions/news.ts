'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { cwd } from "process"
import { existsSync } from "fs"

export async function createNews(formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    let imageUrl = formData.get('imageUrl') as string | null
    const imageFile = formData.get('imageFile') as File | null

    const galleryFiles = formData.getAll('galleryFiles') as File[]
    const images: string[] = []

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const filename = `news-${Date.now()}-${imageFile.name}`
        const uploadDir = join(cwd(), 'public', 'uploads')

        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        await writeFile(join(uploadDir, filename), buffer)
        imageUrl = `/uploads/${filename}`
    }

    // Handle gallery images
    if (galleryFiles && galleryFiles.length > 0) {
        const uploadDir = join(cwd(), 'public', 'uploads')
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        for (const file of galleryFiles) {
            if (file.size > 0) {
                const bytes = await file.arrayBuffer()
                const buffer = Buffer.from(bytes)
                const filename = `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`
                await writeFile(join(uploadDir, filename), buffer)
                images.push(`/uploads/${filename}`)
            }
        }
    }

    if (!title || !content) {
        throw new Error('Missing required fields')
    }

    const slug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") + '-' + Date.now()

    await prisma.news.create({
        data: {
            title,
            content,
            imageUrl,
            images,
            slug,
        }
    })

    revalidatePath('/admin/noticias')
    revalidatePath('/noticias')
    revalidatePath('/')
    redirect('/admin/noticias')
}

export async function updateNews(id: string, formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    let imageUrl = formData.get('imageUrl') as string | null
    const imageFile = formData.get('imageFile') as File | null

    const galleryFiles = formData.getAll('galleryFiles') as File[]
    let images: string[] | undefined = undefined

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const filename = `news-${Date.now()}-${imageFile.name}`
        const uploadDir = join(cwd(), 'public', 'uploads')

        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        await writeFile(join(uploadDir, filename), buffer)
        imageUrl = `/uploads/${filename}`
    }

    // Handle gallery images - Append to existing or replace? 
    // For now, let's assume if new files are uploaded, we append them. 
    // Or maybe we should first fetch existing to append? 
    // The simplified requirement implies "upload multiple files", usually implies adding.
    // However, Prisma update without fetching first overwrites arrays if we just set it.
    // Ideally we should probably keep existing images.
    // Let's first upload new ones.

    const newImages: string[] = []
    if (galleryFiles && galleryFiles.length > 0) {
        const uploadDir = join(cwd(), 'public', 'uploads')
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        for (const file of galleryFiles) {
            if (file.size > 0) {
                const bytes = await file.arrayBuffer()
                const buffer = Buffer.from(bytes)
                const filename = `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`
                await writeFile(join(uploadDir, filename), buffer)
                newImages.push(`/uploads/${filename}`)
            }
        }
    }

    if (newImages.length > 0) {
        // We want to push to the array. Prisma `push` operation on lists is what we want.
        // But `update` data argument types are tricky with `push`.
        // Let's use `push` if supported or fetch and update.
        // Prisma supports `push` for scalar lists.
    }

    if (!title || !content) {
        throw new Error('Missing required fields')
    }

    const dataToUpdate: any = {
        title,
        content,
        imageUrl,
    }

    if (newImages.length > 0) {
        dataToUpdate.images = {
            push: newImages
        }
    }

    // Not updating slug to preserve URLs
    await prisma.news.update({
        where: { id },
        data: dataToUpdate
    })

    revalidatePath('/admin/noticias')
    revalidatePath('/noticias')
    revalidatePath('/')
    redirect('/admin/noticias')
}

export async function deleteNews(id: string) {
    await prisma.news.delete({
        where: { id }
    })
    revalidatePath('/admin/noticias')
    revalidatePath('/noticias')
    revalidatePath('/')
}
