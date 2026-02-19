import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Folder as FolderIcon, FileText, Search, ChevronRight, CornerLeftUp, Download, ExternalLink } from 'lucide-react'
import { getFolderAncestry } from '@/app/actions/documents'

export const revalidate = 0 // Dynamic

interface PublicDocumentsPageProps {
    searchParams: Promise<{ folderId?: string; q?: string }>
}

export default async function PublicDocumentsPage({ searchParams }: PublicDocumentsPageProps) {
    const { folderId, q } = await searchParams

    const currentFolder = folderId && !q
        ? await prisma.folder.findUnique({ where: { id: folderId }, include: { parent: true } })
        : null

    const ancestry = folderId && !q ? await getFolderAncestry(folderId) : []

    // Search Logic
    const whereFolder = q ? { name: { contains: q } } : { parentId: folderId || null }
    const whereDoc = q ? { name: { contains: q } } : { folderId: folderId || null }

    const folders = await prisma.folder.findMany({
        where: whereFolder,
        orderBy: { name: 'asc' }
    })

    // If searching, we might want documents from ALL folders? 
    // Simple "folder structure" usually means navigate, but "search bar" means search everything.
    // If q is present, search explicitly across everything (ignoring folderId usually, or within folder?)
    // User said "searchable bar to look for particular pdf documents".

    const documents = await prisma.document.findMany({
        where: q ? { name: { contains: q } } : { folderId: folderId || null },
        orderBy: { name: 'asc' }
    })

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Documentos</h1>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-10">
                    <form className="relative">
                        <input
                            type="text"
                            name="q"
                            defaultValue={q}
                            placeholder="Pesquisar documentos..."
                            className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </form>
                </div>

                {/* Breadcrumb / Navigation */}
                <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">
                    {q ? (
                        <div className="mb-6 pb-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-700">Resultados da pesquisa para: "{q}"</h2>
                            <Link href="/documentos" className="text-primary text-sm hover:underline mt-1 inline-block">Limpar pesquisa</Link>
                        </div>
                    ) : (
                        <div className="mb-6 flex items-center gap-2 pb-4 border-b">
                            <Link href="/documentos" className={`hover:underline ${!currentFolder ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                                Raiz
                            </Link>
                            {ancestry.map((folder) => (
                                <span key={folder.id} className="flex items-center gap-2">
                                    <ChevronRight size={16} className="text-gray-400" />
                                    {folder.id === folderId ? (
                                        <span className="font-bold text-gray-900">{folder.name}</span>
                                    ) : (
                                        <Link href={`?folderId=${folder.id}`} className="text-gray-500 hover:underline">
                                            {folder.name}
                                        </Link>
                                    )}
                                </span>
                            ))}
                            {currentFolder && (
                                <Link
                                    href={currentFolder.parentId ? `?folderId=${currentFolder.parentId}` : '/documentos'}
                                    className="ml-auto text-sm text-primary flex items-center gap-1 hover:underline bg-gray-50 px-3 py-1 rounded-full"
                                >
                                    <CornerLeftUp size={14} /> Voltar
                                </Link>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {folders.length === 0 && documents.length === 0 && (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                {q ? 'Nenhum resultado encontrado.' : 'Pasta vazia.'}
                            </div>
                        )}

                        {/* Folders */}
                        {folders.map((folder) => (
                            <Link
                                key={folder.id}
                                href={`?folderId=${folder.id}`}
                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"
                            >
                                <div className="bg-yellow-100 p-3 rounded-full group-hover:bg-yellow-200 transition-colors">
                                    <FolderIcon size={24} className="text-yellow-600" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-semibold text-gray-800 truncate">{folder.name}</h3>
                                    <p className="text-xs text-gray-500">Pasta</p>
                                </div>
                            </Link>
                        ))}

                        {/* Documents */}
                        {documents.map((doc) => (
                            <a
                                key={doc.id}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-primary/50 hover:bg-blue-50/50 transition-all group"
                            >
                                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                                    <FileText size={24} className="text-blue-600" />
                                </div>
                                <div className="overflow-hidden flex-1">
                                    <h3 className="font-semibold text-gray-800 truncate">{doc.name}</h3>
                                    <p className="text-xs text-gray-500">Documento PDF</p>
                                </div>
                                <Download size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Archive Section */}
                <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Arquivo Histórico (Anterior a 2025)</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Procura atas, editais ou outros documentos antigos? Aceda ao nosso arquivo digital alojado no Google Drive para consultar toda a documentação histórica da freguesia.
                        </p>
                    </div>
                    <a 
                        href="https://drive.google.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2f5856] transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-900/10 whitespace-nowrap"
                    >
                        Abrir Google Drive
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
