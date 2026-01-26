import { prisma } from '@/lib/prisma'
import NewsForm from '@/components/admin/NewsForm'
import { updateNews } from '@/app/actions/news'
import { notFound } from 'next/navigation'

// Force dynamic rendering to avoid build-time database queries
export const dynamic = 'force-dynamic'

interface EditNewsPageProps {
    params: Promise<{ id: string }>
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
    const { id } = await params
    const news = await prisma.news.findUnique({
        where: { id }
    })

    if (!news) {
        notFound()
    }

    const updateNewsWithId = updateNews.bind(null, id)

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Editar Notícia</h1>
            </div>
            <NewsForm action={updateNewsWithId} initialData={news} />
        </div>
    )
}
