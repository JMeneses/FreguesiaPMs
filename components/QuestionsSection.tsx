'use client'
import { useState } from 'react'
import { Plus, Minus, MessageCircle, AlertTriangle, ExternalLink } from 'lucide-react'
import { Button } from './ui/Button'

const faqs = [
    {
        question: 'Como posso reportar uma luz fundida na via pública?',
        answer: (
            <>
                Para tal deve reportar a luz fundida na via pública através da plataforma especializada da {' '}
                <a
                    href="https://balcaodigital.e-redes.pt/anomalies/public-light/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
                >
                    E-Redes para estas anomalias.
                    <ExternalLink size={14} />
                </a>.
            </>
        )
    },
    {
        question: 'Como posso reportar um buraco no pavimento de uma via pública?',
        answer: 'Se a estrada for alcatroada, deve reportar essa situação directamente à Câmara Municipal de Porto de Mós através da plataforma online de ocorrências. Se a estrada for de terra, deve reportar essa situação directamente à Junta de Freguesia contactando a secretaria.'
    },
    {
        question: 'Quais os procedimentos para obter um atestado ou declaração?',
        answer: 'Entre os serviços prestados pela Junta de Freguesia estão os atestados e declarações. Para tal deve dirigir-se à secretaria da junta com o seu Cartão de Cidadão, podendo, para maior rapidez, dar início a esse processo de forma digital enviando as informações necessárias pelos canais indicados.'
    },
    {
        question: 'Como funciona a recolha de monstros (lixo volumoso) na Freguesia?',
        answer: 'A recolha de monstros é efetuada gratuitamente às terças-feiras. Deve fazer o agendamento prévio até ao dia anterior através do número de telefone da junta.'
    },
    {
        question: 'Como faço para apresentar uma reclamação dos serviços públicos da Freguesia?',
        answer: (
            <>
                Para este efeito pode fazer a abertura de uma reclamação na plataforma online do {' '}
                <a
                    href="https://www.livroreclamacoes.pt/Inicio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
                >
                    Livro de Reclamações
                    <ExternalLink size={14} />
                </a>.
            </>
        )
    },
    {
        question: 'Como posso verificar a convocatória para o Dia da Defesa Nacional?',
        answer: (
            <>
                Para verificar o seu nome na lista convocatória para o Dia da Defesa Nacional, aceda à plataforma online{' '}
                <a
                    href="https://ddn.dgrdn.gov.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
                >
                    Dia da Defesa Nacional
                    <ExternalLink size={14} />
                </a>.
            </>
        )
    }
]

export default function QuestionsSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dúvidas Frequentes</h2>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MessageCircle className="text-primary" />
                                Precisa de ajuda?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Não encontra a resposta que procura? Contacte-nos diretamente.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://wa.me/+351926404160"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full justify-center flex items-center gap-2 bg-primary text-white font-semibold rounded-md px-4 py-2 hover:bg-[#2f5856] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    aria-label="Conversar pelo WhatsApp com a Secretaria"
                                >
                                    <MessageCircle size={20} />
                                    Contactar Secretaria
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg overflow-hidden transition-colors hover:border-primary/30"
                                >
                                    <button
                                        onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                                        aria-expanded={index === openIndex}
                                        aria-label={`Ver resposta para: ${faq.question}`}
                                    >
                                        <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                                        <span className="ml-4 text-primary flex-shrink-0">
                                            {index === openIndex ? <Minus size={20} /> : <Plus size={20} />}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${index === openIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
