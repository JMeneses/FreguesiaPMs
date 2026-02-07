'use client'

import { Upload } from 'lucide-react'
import { uploadDocument } from '@/app/actions/documents'

interface DocumentUploadFormProps {
    folderId?: string | null
}

export default function DocumentUploadForm({ folderId }: DocumentUploadFormProps) {
    return (
        <form action={uploadDocument} className="flex gap-2 items-center">
            <input type="hidden" name="folderId" value={folderId || 'null'} />
            <label
                className="cursor-pointer bg-primary text-white px-3 py-2 rounded-md hover:bg-[#2f5856] transition-colors flex items-center gap-2 text-sm"
                aria-label="Carregar novo documento"
            >
                <Upload size={16} /> Upload
                <input type="file" name="file" className="hidden" onChange={(e) => e.target.form?.requestSubmit()} />
            </label>
        </form>
    )
}
