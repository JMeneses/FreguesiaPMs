import Image from 'next/image'
import Link from 'next/link'

export default function PresidentMessage() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-50 shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                                alt="Presidente da Junta"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Mensagem do Presidente</h2>
                        <div className="h-1 w-20 bg-primary mx-auto md:mx-0 mb-6"></div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Caros Concidadãos,</h3>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            É com enorme orgulho e sentido de responsabilidade que vos dou as boas-vindas ao portal da nossa Freguesia.
                            Este espaço digital foi renovado a pensar em si, para que esteja mais próximo da sua Junta e para que possamos servi-lo melhor.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Trabalhamos diariamente para construir uma comunidade mais unida, desenvolvida e solidária.
                            Contamos com a sua participação ativa para, juntos, continuarmos a dignificar a nossa terra.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Manuel Barroso</p>
                                <p className="text-primary font-medium">Presidente da Junta de Freguesia</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-gray-300 mx-4"></div>
                            <Link href="/freguesia/executivo" className="text-gray-500 hover:text-primary transition-colors underline">
                                Conheça o Executivo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
