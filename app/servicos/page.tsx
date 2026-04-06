import { HelpCircle, ArrowRight } from 'lucide-react'
import { services } from '@/lib/services-data'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-4">
                <header className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Medidas e Iniciativas</h1>
                    <div className="h-2 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Conheça o conjunto de medidas e iniciativas que a Junta de Freguesia coloca à disposição para melhorar a qualidade de vida e o bem-estar da nossa comunidade.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/servicos/${service.slug}`}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                            aria-label={`Saber mais sobre ${service.title}`}
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                                Ver Detalhes
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 bg-white rounded-3xl p-8 md:p-16 text-center border border-gray-100 shadow-lg relative overflow-hidden">
                    {/* Background decorations for the contact card */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mb-32"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <HelpCircle size={48} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Precisa de outro serviço?</h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            A nossa secretaria está disponível para o apoiar. Contacte-nos diretamente para obter informações sobre outros serviços administrativos ou apoios disponíveis.
                        </p>
                        <a
                            href="https://wa.me/+351926404160"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2f5856] transition-all hover:scale-105 shadow-md active:scale-95 inline-flex items-center gap-3"
                        >
                            Contactar Secretaria
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
