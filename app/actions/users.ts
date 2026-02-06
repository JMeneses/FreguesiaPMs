'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import bcrypt from "bcryptjs"

export async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { email: 'asc' },
        select: {
            id: true,
            email: true,
            name: true,
            // Don't return password
        }
    })
}

export async function createUser(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string | null

    if (!email || !password) {
        throw new Error('Email and password are required')
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser) {
        throw new Error('User with this email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name: name || null
        }
    })

    revalidatePath('/admin/users')
}

export async function updateUser(id: string, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string | null
    const name = formData.get('name') as string | null

    if (!email) {
        throw new Error('Email is required')
    }

    const updateData: any = {
        email,
        name: name || null
    }

    // Only update password if provided
    if (password && password.trim() !== '') {
        updateData.password = await bcrypt.hash(password, 10)
    }

    await prisma.user.update({
        where: { id },
        data: updateData
    })

    revalidatePath('/admin/users')
}

export async function deleteUser(id: string) {
    await prisma.user.delete({
        where: { id }
    })

    revalidatePath('/admin/users')
}
