import { HelpCircle, ArrowRight } from 'lucide-react'
import { services } from '@/lib/services-data'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Serviços e Iniciativas</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Conheça o conjunto de serviços que a Junta de Freguesia coloca à disposição da comunidade.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all hover:border-primary/30 group flex flex-col h-full">
                            <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={32} className="text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-4 font-medium flex-grow">{service.description}</p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.details}</p>
                            <Link href={`/servicos/${service.slug}`} className="mt-auto inline-flex items-center text-primary font-semibold hover:text-[#2f5856] transition-colors group/link">
                                Ver Mais
                                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
                    <HelpCircle size={48} className="mx-auto text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Precisa de outro serviço?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contacte a secretaria da Junta de Freguesia para obter mais informações sobre outros serviços administrativos ou apoios disponíveis.
                    </p>
                    <a href="/#contatos" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2f5856] transition-colors inline-block">
                        Contactar Agora
                    </a>
                </div>
            </div>
        </div>
    )
}
