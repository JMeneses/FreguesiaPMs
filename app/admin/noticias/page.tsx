import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/Button'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deleteNews } from '@/app/actions/news'

// Force dynamic rendering to avoid build-time database queries
export const dynamic = 'force-dynamic'

export default async function NewsListPage() {
    const news = await prisma.news.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestão de Notícias</h1>
                <Link href="/admin/noticias/new">
                    <Button className="flex items-center gap-2">
                        <Plus size={18} /> Nova Notícia
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {news.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {item.createdAt.toLocaleDateString('pt-PT')}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end gap-2">
                                        <Link href={`/admin/noticias/${item.id}/edit`}>
                                            <span className="text-indigo-600 hover:text-indigo-900 p-2 inline-block"><Edit size={18} /></span>
                                        </Link>
                                        <form action={deleteNews.bind(null, item.id)}>
                                            <button className="text-red-600 hover:text-red-900 p-2"><Trash2 size={18} /></button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {news.length === 0 && (
                    <div className="p-6 text-center text-gray-500">
                        Nenhuma notícia encontrada. Crie a primeira!
                    </div>
                )}
            </div>
        </div>
    )
}
