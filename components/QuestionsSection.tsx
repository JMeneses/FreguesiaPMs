'use client'
import { useState } from 'react'
import { Plus, Minus, MessageCircle, AlertTriangle } from 'lucide-react'
import { Button } from './ui/Button'

const faqs = [
    {
        question: 'Como posso reportar um buraco na via pública ou luz fundida?',
        answer: 'Pode reportar situações na via pública através do nosso formulário online na secção "A Minha Rua", enviando um email para geral@freguesia.pt ou ligando para os nossos serviços administrativos.'
    },
    {
        question: 'Quais os documentos necessários para obter um atestado de residência?',
        answer: 'Necessita de apresentar o Cartão de Cidadão e, caso não esteja recenseado na freguesia, duas testemunhas recenseadas que atestem a sua residência ou comprovativo fiscal de morada.'
    },
    {
        question: 'Como funciona a recolha de monstros (lixo volumoso)?',
        answer: 'A recolha de monstros é efetuada gratuitamente às terças-feiras. Deve fazer o agendamento prévio até ao dia anterior através do número de telefone da junta.'
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
                                Não encontra a resposta que procura? Contacte-nos diretamente ou reporte um problema na via pública.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button className="w-full justify-center">Contactar Secretaria</Button>
                                <Button variant="outline" className="w-full justify-center flex items-center gap-2">
                                    <AlertTriangle size={18} />
                                    Reportar Ocorrência
                                </Button>
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
