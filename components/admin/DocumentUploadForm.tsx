'use client'

import { Upload } from 'lucide-react'
import { useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

interface DocumentUploadFormProps {
    folderId?: string | null
}

export default function DocumentUploadForm({ folderId }: DocumentUploadFormProps) {
    const [error, setError] = useState<string | null>(null)
    const [isPending, startTransition] = useTransition()
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setError(null)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folderId', folderId || 'null')

        startTransition(async () => {
            try {
                const res = await fetch('/api/admin/documentos', {
                    method: 'POST',
                    body: formData,
                })
                if (!res.ok) {
                    const data = await res.json().catch(() => ({}))
                    setError(data.error || `Erro ${res.status}`)
                    return
                }
                router.refresh()
            } catch {
                setError('Erro ao carregar o documento. Tente novamente.')
            } finally {
                if (inputRef.current) inputRef.current.value = ''
            }
        })
    }

    return (
        <div className="flex flex-col gap-1">
            <label
                className="cursor-pointer bg-primary text-white px-3 py-2 rounded-md hover:bg-[#2f5856] transition-colors flex items-center gap-2 text-sm w-fit aria-disabled:opacity-60"
                aria-label="Carregar novo documento"
                aria-disabled={isPending}
            >
                <Upload size={16} /> {isPending ? 'A carregar…' : 'Upload'}
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    disabled={isPending}
                    onChange={handleChange}
                />
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
}
