import { redirect, notFound } from 'next/navigation'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import NewsForm from '@/components/admin/NewsForm'

export const dynamic = 'force-dynamic'

interface EditNewsPageProps {
    params: Promise<{ id: string }>
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
    const session = await auth()
    if (!session) redirect('/admin/login')

    const { id } = await params
    const news = await prisma.news.findUnique({
        where: { id }
    })

    if (!news) {
        notFound()
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Editar Notícia</h1>
            </div>
            <NewsForm editId={id} initialData={news} />
        </div>
    )
}
