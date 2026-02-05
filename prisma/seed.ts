import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('corredoura26', 10)

    const user = await prisma.user.upsert({
        where: { email: 'jonh@freguesiapms.pt' },
        update: {},
        create: {
            email: 'jonh@freguesiapms.pt',
            password: hashedPassword,
            name: 'Jonh',
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
