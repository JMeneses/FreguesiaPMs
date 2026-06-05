'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface NewsFormProps {
    action: (formData: FormData) => Promise<void>
    initialData?: {
        title: string
        content: string
        imageUrl?: string | null
        images?: string[]
    }
}

export default function NewsForm({ action, initialData }: NewsFormProps) {
    const [existingImages, setExistingImages] = useState<string[]>(initialData?.images || [])

    const removeExistingImage = (src: string) => {
        setExistingImages((prev) => prev.filter((img) => img !== src))
    }

    return (
        <form action={action} className="space-y-6 max-w-2xl bg-white p-6 rounded-lg shadow-sm">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={initialData?.title}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-3 py-2 border"
                />
            </div>

            <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700">Imagem de Capa</label>
                {initialData?.imageUrl && (
                    <div className="mt-2 mb-3">
                        <div className="relative w-48 h-32 rounded-md overflow-hidden bg-gray-100 border">
                            <Image
                                src={initialData.imageUrl}
                                alt="Imagem de capa atual"
                                fill
                                className="object-contain"
                                sizes="192px"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Imagem de capa atual. Selecione um ficheiro abaixo para a substituir.</p>
                    </div>
                )}
                <div className="mt-1 space-y-2">
                    <input
                        type="file"
                        name="imageFile"
                        id="imageFile"
                        accept="image/*"
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-[#3d7270]"
                    />
                    <p className="text-sm text-gray-500">Ou utilize um URL externo:</p>
                    <input
                        type="url"
                        name="imageUrl"
                        id="imageUrl"
                        defaultValue={initialData?.imageUrl || ''}
                        placeholder="https://exemplo.com/imagem.jpg"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-3 py-2 border"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Conteúdo</label>
                <textarea
                    name="content"
                    id="content"
                    rows={10}
                    defaultValue={initialData?.content}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-3 py-2 border"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Galeria de Imagens</label>

                {existingImages.length > 0 && (
                    <div className="mt-2 mb-4">
                        <p className="text-xs text-gray-500 mb-2">Imagens atuais na galeria. Clique no X para remover.</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {existingImages.map((src) => (
                                <div key={src} className="relative group">
                                    <div className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100 border">
                                        <Image
                                            src={src}
                                            alt="Imagem da galeria"
                                            fill
                                            className="object-contain"
                                            sizes="120px"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeExistingImage(src)}
                                        className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow"
                                        aria-label="Remover imagem"
                                    >
                                        <X size={14} />
                                    </button>
                                    <input type="hidden" name="existingImages" value={src} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-1">
                    <input
                        type="file"
                        name="galleryFiles"
                        id="galleryFiles"
                        accept="image/*"
                        multiple
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-[#3d7270]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Selecione múltiplas imagens para adicionar ao carrossel.</p>
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-[#2f5856] transition-colors"
                    aria-label="Guardar notícia"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}
