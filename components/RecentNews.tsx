import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { prisma } from '@/lib/prisma'

export default async function RecentNews() {
    let recentNews: any[] = []
    try {
        recentNews = await prisma.news.findMany({
            take: 3,
            orderBy: { createdAt: 'desc' }
        })
    } catch (error) {
        console.error("Failed to fetch recent news:", error)
    }
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Notícias Recentes</h2>
                        <div className="h-1 w-20 bg-primary mt-2"></div>
                    </div>
                    <Link href="/noticias" className="text-primary font-semibold hover:underline">
                        Ver todas as notícias &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentNews.map((news: { id: string; title: string; content: string; imageUrl: string | null; createdAt: Date }) => (
                        <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 overflow-hidden relative">
                                {news.imageUrl ? (
                                    <Image
                                        src={news.imageUrl}
                                        alt={news.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105 duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                        <Calendar size={48} />
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <Calendar size={16} className="mr-1" />
                                    <time dateTime={news.createdAt.toISOString()}>{news.createdAt.toLocaleDateString('pt-PT')}</time>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight">
                                    <Link href={`/noticias/${news.id}`} className="hover:text-primary">
                                        {news.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {news.content.substring(0, 150)}...
                                </p>
                                <Link href={`/noticias/${news.id}`} className="text-primary font-medium hover:underline text-sm uppercase tracking-wide">
                                    Ler Mais
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
