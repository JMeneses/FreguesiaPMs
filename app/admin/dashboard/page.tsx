import { prisma } from '@/lib/prisma'

// Force dynamic rendering to avoid build-time database queries
export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
    const newsCount = await prisma.news.count()
    const documentsCount = await prisma.document.count()
    const foldersCount = await prisma.folder.count()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Notícias</h2>
                    <p className="text-3xl font-bold text-primary">{newsCount}</p>
                    <p className="text-sm text-gray-500 mt-1">Notícias publicadas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Documentos</h2>
                    <p className="text-3xl font-bold text-primary">{documentsCount}</p>
                    <p className="text-sm text-gray-500 mt-1">Ficheiros disponíveis</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Pastas</h2>
                    <p className="text-3xl font-bold text-primary">{foldersCount}</p>
                    <p className="text-sm text-gray-500 mt-1">Categorias criadas</p>
                </div>
            </div>
        </div>
    )
}
