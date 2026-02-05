import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">404 - Página Não Encontrada</h2>
            <p className="mb-8 text-gray-600">A página que procura não existe ou foi movida.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
                Voltar à Página Inicial
            </Link>
        </div>
    )
}
