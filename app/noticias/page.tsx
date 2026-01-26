import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar } from 'lucide-react'

export const revalidate = 60 // revalidate every minute

export default async function NewsPage() {
    const news = await prisma.news.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notícias</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item: { id: string; title: string; content: string; imageUrl: string | null; createdAt: Date }) => (
                        <article key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                            {item.imageUrl && (
                                <div className="h-48 overflow-hidden relative">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105 duration-300"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar size={16} className="mr-1" />
                                    <time dateTime={item.createdAt.toISOString()}>
                                        {item.createdAt.toLocaleDateString('pt-PT')}
                                    </time>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-primary transition-colors">
                                    <Link href={`/noticias/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">
                                    {item.content.replace(/[#*`]/g, '') /* Simple stripped content preview */}
                                </p>
                                <Link href={`/noticias/${item.id}`} className="text-primary font-semibold text-sm hover:underline mt-auto uppercase tracking-wide">
                                    Ler Mais &rarr;
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {news.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        Ainda não há notícias publicadas.
                    </div>
                )}
            </div>
        </div>
    )
}
