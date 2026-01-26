'use client'

interface NewsFormProps {
    action: (formData: FormData) => Promise<void>
    initialData?: {
        title: string
        content: string
        imageUrl?: string | null
    }
}

export default function NewsForm({ action, initialData }: NewsFormProps) {
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

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-[#3d7270] transition-colors"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}
