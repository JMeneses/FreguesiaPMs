import { Download } from 'lucide-react'

export default function IdentityPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b">Identidade da Freguesia</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">História</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            A Freguesia tem raízes profundas que remontam a séculos passados. Originalmente uma zona rural,
                            evoluiu ao longo do tempo para se tornar num centro vibrante de comunidade e tradição.
                        </p>
                        <p className="mb-4">
                            Os primeiros registos datam do século XVIII, onde a agricultura e o pequeno comércio eram as principais atividades.
                            Com o desenvolvimento urbano do século XX, a freguesia modernizou-se sem perder a sua essência acolhedora.
                        </p>
                        <p>
                            Hoje, orgulhamo-nos do nosso património cultural e arquitetónico, preservando a memória dos que nos antecederam
                            enquanto construímos um futuro sustentável para as novas gerações.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Brasão e Simbologia</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 rounded-xl">
                        <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
                            {/* Placeholder for Coat of Arms */}
                            <span className="text-center font-bold">Brasão da<br />Freguesia</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Descrição Heráldica</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                                <li><strong>Escudo:</strong> De verde (representando a terra e a esperança).</li>
                                <li><strong>Coroa Mural:</strong> De prata de três torres.</li>
                                <li><strong>Listel:</strong> Branco, com a legenda a negro: "FREGUESIA DE EXEMPLO".</li>
                            </ul>

                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-3">Downloads</h4>
                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 hover:border-primary transition-colors text-sm font-medium">
                                    <Download size={16} /> Brasão (PNG)
                                </button>
                                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 hover:border-primary transition-colors text-sm font-medium">
                                    <Download size={16} /> Brasão (Vectorial)
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
