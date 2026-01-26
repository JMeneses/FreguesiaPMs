import NewsForm from '@/components/admin/NewsForm'
import { createNews } from '@/app/actions/news'

export default function CreateNewsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Nova Notícia</h1>
            <NewsForm action={createNews} />
        </div>
    )
}
