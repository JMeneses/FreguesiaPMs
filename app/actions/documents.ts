'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { cwd } from "process"
import { existsSync } from "fs"

export async function createFolder(formData: FormData) {
    const name = formData.get('name') as string
    const parentId = formData.get('parentId') as string || null

    if (!name) return

    await prisma.folder.create({
        data: {
            name,
            parentId: parentId === 'null' ? null : parentId
        }
    })

    revalidatePath('/admin/documentos')
    revalidatePath('/documentos')
}

export async function deleteFolder(id: string) {
    // Prisma cascade delete should handle children if configured, 
    // but if not, we might need to delete recursively. 
    // For now assuming simple delete or restrict.
    // Actually, let's delete Documents in it first.

    await prisma.document.deleteMany({ where: { folderId: id } })
    await prisma.folder.delete({ where: { id } })

    revalidatePath('/admin/documentos')
    revalidatePath('/documentos')
}

export async function deleteDocument(id: string) {
    await prisma.document.delete({ where: { id } })
    revalidatePath('/admin/documentos')
    revalidatePath('/documentos')
}

export async function uploadDocument(formData: FormData) {
    const file = formData.get('file') as File
    const folderId = formData.get('folderId') as string || null

    if (!file) return

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure unique name
    const filename = `${Date.now()}-${file.name}`
    const path = join(cwd(), 'public', 'uploads', filename)

    // Ensure directory exists
    const uploadDir = join(cwd(), 'public', 'uploads')

    if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
    }

    await writeFile(path, buffer)

    const url = `/uploads/${filename}`

    await prisma.document.create({
        data: {
            name: file.name,
            url,
            folderId: folderId === 'null' ? null : folderId
        }
    })

    revalidatePath('/admin/documentos')
    revalidatePath('/documentos')
}

export async function getFolderAncestry(folderId: string): Promise<{ id: string; name: string }[]> {
    const ancestry: { id: string; name: string }[] = []
    let currentId: string | null = folderId

    while (currentId) {
        const folderNode: { id: string; name: string; parentId: string | null } | null = await prisma.folder.findUnique({
            where: { id: currentId },
            select: { id: true, name: true, parentId: true }
        })

        if (!folderNode) break

        ancestry.unshift({ id: folderNode.id, name: folderNode.name })
        currentId = folderNode.parentId
    }

    return ancestry
}
