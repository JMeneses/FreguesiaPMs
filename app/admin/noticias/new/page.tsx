import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import NewsForm from '@/components/admin/NewsForm'
import { createNews } from '@/app/actions/news'

export default async function CreateNewsPage() {
    const session = await auth()
    if (!session) redirect('/admin/login')
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Nova Notícia</h1>
            <NewsForm action={createNews} />
        </div>
    )
}
