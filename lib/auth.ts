import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                try {
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email as string }
                    })

                    if (!user) {
                        return null
                    }

                    const isPasswordValid = await bcrypt.compare(
                        credentials.password as string,
                        user.password
                    )

                    if (!isPasswordValid) {
                        return null
                    }

                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    }
                } catch (error) {
                    console.error('Authentication error:', error)
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
    trustHost: true,
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.sub
            }
            return session
        },
        async authorized({ auth, request }) {
            const isAdmin = request.nextUrl.pathname.startsWith('/admin')
            const isLoginPage = request.nextUrl.pathname === '/admin/login'
            
            if (isAdmin && !isLoginPage && !auth?.user) {
                return false
            }
            return true
        }
    }
})
