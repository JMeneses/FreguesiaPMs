import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10)

    const user = await prisma.user.upsert({
        where: { email: 'admin@freguesia.pt' },
        update: {},
        create: {
            email: 'admin@freguesia.pt',
            password: hashedPassword,
            name: 'Administrador',
        },
    })
    console.log('Admin user created:', user.email)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
