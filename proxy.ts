import { withAuth } from "next-auth/middleware"
import { NextRequest } from "next/server"

const auth = withAuth({
    pages: {
        signIn: "/admin/login",
    },
})

export default function middleware(req: NextRequest, event: any) {
    return (auth as any)(req, event)
}

export const config = {
    matcher: ["/admin/:path*"]
}
