import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Calendar, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

// Force dynamic rendering to avoid build-time database queries
export const dynamic = 'force-dynamic'

interface NewsDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
    const { id } = await params
    const news = await prisma.news.findUnique({
        where: { id }
    })

    if (!news) {
        notFound()
    }

    return (
        <article className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/noticias" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                    <ChevronLeft size={20} /> Voltar às notícias
                </Link>

                <header className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{news.title}</h1>
                    <div className="flex items-center text-gray-500">
                        <Calendar size={18} className="mr-2" />
                        <time dateTime={news.createdAt.toISOString()} className="text-lg">
                            {news.createdAt.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                    </div>
                </header>

                {news.imageUrl && (
                    <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={news.imageUrl}
                            alt={news.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700">
                    {/* Simple rendering of text with newlines. Ideally Markdown renderer. */}
                    {news.content.split('\n').map((paragraph: string, idx: number) => (
                        <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                </div>
            </div>
        </article>
    )
}
