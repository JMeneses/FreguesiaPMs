import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/Button'
import { Folder as FolderIcon, FileText, Trash2, FolderPlus, Upload, ChevronRight, CornerLeftUp } from 'lucide-react'
import DocumentUploadForm from '@/components/admin/DocumentUploadForm'
import { createFolder, uploadDocument, deleteFolder, deleteDocument, getFolderAncestry } from '@/app/actions/documents'

// ... existing imports ...

// Force dynamic rendering to avoid build-time database queries
export const dynamic = 'force-dynamic'

interface DocumentsPageProps {
    searchParams: Promise<{ folderId?: string }>
}

export default async function DocumentsPage({ searchParams }: DocumentsPageProps) {
    const { folderId } = await searchParams

    const currentFolder = folderId
        ? await prisma.folder.findUnique({ where: { id: folderId }, include: { parent: true } })
        : null

    const ancestry = folderId ? await getFolderAncestry(folderId) : []

    const folders = await prisma.folder.findMany({
        where: { parentId: folderId || null },
        orderBy: { name: 'asc' }
    })

    const documents = await prisma.document.findMany({
        where: { folderId: folderId || null },
        orderBy: { name: 'asc' }
    })

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <nav className="flex items-center text-sm text-gray-500 mb-1">
                        <Link href="/admin/documentos" className="hover:text-primary transition-colors">
                            Documentos
                        </Link>
                        {ancestry.map((folder) => (
                            <span key={folder.id} className="flex items-center">
                                <ChevronRight size={14} className="mx-1" />
                                {folder.id === folderId ? (
                                    <span className="font-semibold text-gray-900">{folder.name}</span>
                                ) : (
                                    <Link href={`?folderId=${folder.id}`} className="hover:text-primary transition-colors">
                                        {folder.name}
                                    </Link>
                                )}
                            </span>
                        ))}
                    </nav>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {currentFolder ? currentFolder.name : 'Documentos'}
                    </h1>
                </div>

                <div className="flex gap-2">
                    {/* Create Folder Form */}
                    <form action={createFolder} className="flex gap-2">
                        <input type="hidden" name="parentId" value={folderId || 'null'} />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nova Pasta"
                            className="px-3 py-2 border rounded-md text-sm w-40"
                            required
                        />
                        <Button type="submit" size="sm" variant="secondary" className="whitespace-nowrap flex items-center gap-1">
                            <FolderPlus size={16} /> Criar
                        </Button>
                    </form>

                    {/* Upload File Form */}
                    <DocumentUploadForm folderId={folderId} />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                {folders.length === 0 && documents.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        Pasta vazia. Crie uma pasta ou carregue ficheiros.
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Folders */}
                    {folders.map((folder) => (
                        <div key={folder.id} className="border rounded-lg p-4 hover:border-primary transition-colors hover:bg-gray-50 group relative">
                            <Link href={`?folderId=${folder.id}`} className="flex items-center gap-3">
                                <FolderIcon size={32} className="text-yellow-500" />
                                <span className="font-medium text-gray-700 truncate flex-1">{folder.name}</span>
                            </Link>
                            <form action={deleteFolder.bind(null, folder.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-red-500 hover:text-red-700 p-1 bg-white rounded-full shadow-sm hover:shadow" title="Apagar" aria-label={`Apagar pasta: ${folder.name}`}>
                                    <Trash2 size={14} />
                                </button>
                            </form>
                        </div>
                    ))}

                    {/* Documents */}
                    {documents.map((doc) => (
                        <div key={doc.id} className="border rounded-lg p-4 hover:border-primary transition-colors hover:bg-gray-50 group relative">
                            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                <FileText size={32} className="text-blue-500" />
                                <span className="font-medium text-gray-700 truncate flex-1">{doc.name}</span>
                            </a>
                            <form action={deleteDocument.bind(null, doc.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-red-500 hover:text-red-700 p-1 bg-white rounded-full shadow-sm hover:shadow" title="Apagar" aria-label={`Apagar documento: ${doc.name}`}>
                                    <Trash2 size={14} />
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
