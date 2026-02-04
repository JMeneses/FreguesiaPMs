import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log('Login attempt for email:', credentials?.email)

                if (!credentials?.email || !credentials?.password) {
                    console.warn('Missing email or password in credentials')
                    return null
                }

                try {
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email }
                    })

                    if (!user) {
                        console.warn('Authentication failed: User not found', credentials.email)
                        return null
                    }

                    const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

                    if (!isPasswordValid) {
                        console.warn('Authentication failed: Invalid password for', credentials.email)
                        return null
                    }

                    console.log('Authentication successful for:', credentials.email)
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    }
                } catch (error) {
                    console.error('CRITICAL: Authentication error during database query:', error)
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.sub
            }
            return session
        }
    }
})

export { handler as GET, handler as POST }
