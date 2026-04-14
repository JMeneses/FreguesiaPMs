'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { objectStorage } from "@/lib/object-storage"

export async function createNews(formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    let imageUrl = formData.get('imageUrl') as string | null
    const imageFile = formData.get('imageFile') as File | null

    const galleryFiles = formData.getAll('galleryFiles') as File[]
    const images: string[] = []

    if (imageFile && imageFile.size > 0) {
        const filename = `news-${Date.now()}-${imageFile.name}`
        await objectStorage.uploadFile(imageFile, filename)
        imageUrl = `/uploads/${filename}`
    }

    // Handle gallery images
    if (galleryFiles && galleryFiles.length > 0) {
        for (const file of galleryFiles) {
            if (file.size > 0) {
                const filename = `gallery-${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`
                await objectStorage.uploadFile(file, filename)
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

    if (imageFile && imageFile.size > 0) {
        const filename = `news-${Date.now()}-${imageFile.name}`
        await objectStorage.uploadFile(imageFile, filename)
        imageUrl = `/uploads/${filename}`
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
