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

    if (!title || !content) {
        throw new Error('Missing required fields')
    }

    // Not updating slug to preserve URLs
    await prisma.news.update({
        where: { id },
        data: {
            title,
            content,
            imageUrl,
        }
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
