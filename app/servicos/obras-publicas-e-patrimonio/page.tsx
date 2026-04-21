'use strict'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Castle, MapPin, Info } from 'lucide-react'

const galleryItems = [
    {
        id: 1,
        title: 'Restauro da fonte Mãe D\'Água',
        location: 'Figueiredo',
        intervention: 'Trabalhos de conservação e restauro.',
        image: '/uploads/fonte1.jpg', // Placeholder
        type: 'Património Local',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fonte+M%C3%A3e+D%27%C3%81gua+Figueiredo+Porto+de+M%C3%B3s'
    },
    {
        id: 2,
        title: 'Restauro da fonte Quinta do André Macho',
        location: 'Tojal',
        intervention: 'Trabalhos de conservação e restauro.',
        image: '/uploads/fonte2.jpg', // Placeholder
        type: 'Património Local',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fonte+Quinta+do+Andr%C3%A9+Macho+Tojal+Porto+de+M%C3%B3s'
    },
    {
        id: 3,
        title: 'Restauro da fonte do Castenheiro',
        location: 'Castanheiro',
        intervention: 'Trabalhos de conservação e restauro.',
        image: '/uploads/fonte3.jpg', // Placeholder
        type: 'Património Local',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fonte+do+Castanheiro+Castanheiro+Porto+de+M%C3%B3s'
    },
    {
        id: 4,
        title: 'Restauro da fonte do Rio Alcaide',
        location: 'Rio Alcaide',
        intervention: 'Trabalhos de conservação e restauro.',
        image: '/uploads/fonte4.jpeg',
        type: 'Património Local',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fonte+do+Rio+Alcaide+Rio+Alcaide+Porto+de+M%C3%B3s'
    },
    {
        id: 5,
        title: 'Mercado Municipal',
        location: 'Centro da Vila',
        intervention: 'Remodelação integral do espaço interior e cobertura, modernizando as bancas de venda e melhorando as condições de higiene e conforto para comerciantes e utentes.',
        image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200', // Placeholder
        type: 'Equipamento Público',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mercado+Municipal+Porto+de+M%C3%B3s'
    },
    {
        id: 6,
        title: 'Largo do Rossio',
        location: 'Alqueidão da Serra',
        intervention: 'Requalificação urbanística com nova pavimentação em calçada portuguesa, reorganização do estacionamento e instalação de novo mobiliário urbano.',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200', // Placeholder
        type: 'Urbanismo',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Largo+do+Rossio+Alqueid%C3%A3o+da+Serra+Porto+de+M%C3%B3s'
    },
    {
        id: 7,
        title: 'Igreja de São Pedro',
        location: 'Porto de Mós',
        intervention: 'Recuperação da fachada principal e limpeza de cantarias, preservando os elementos arquitetónicos originais do período barroco.',
        image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1200', // Placeholder
        type: 'Património Religioso',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Igreja+de+S%C3%A3o+Pedro+Porto+de+M%C3%B3s'
    }
]

export default function ObrasPublicasPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-primary pt-32 pb-20 text-white">
                <div className="container mx-auto px-4">
                    <Link 
                        href="/servicos" 
                        className="inline-flex items-center text-teal-100 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Voltar aos Serviços
                    </Link>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    <Castle size={30} className="text-white" />
                                </div>
                                <span className="text-teal-100 font-medium tracking-wider uppercase text-sm">Serviços Municipais</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Obras Públicas e Património</h1>
                            <p className="text-xl text-teal-50 max-w-2xl leading-relaxed">
                                Explore a galeria de intervenções, requalificações e preservação do património que moldam o futuro da nossa freguesia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <span className="text-white text-sm font-medium flex items-center gap-2">
                                            <MapPin size={16} /> {item.location}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-bold rounded-full shadow-sm">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl mb-4 flex-grow">
                                        <Info size={18} className="text-primary shrink-0 mt-1" />
                                        <div className="text-gray-700 text-sm leading-relaxed">
                                            <p className="font-semibold text-gray-900 mb-1">Intervenção:</p>
                                            {item.intervention}
                                        </div>
                                    </div>

                                    <a 
                                        href={item.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase hover:text-[#2f5856] transition-all group/link"
                                    >
                                        Ver localização
                                        <MapPin size={16} className="ml-2 transform group-hover/link:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Tem alguma sugestão?</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        A manutenção e melhoria dos nossos espaços públicos é um esforço contínuo. Se identificou algum local que necessite de intervenção, entre em contacto connosco.
                    </p>
                    <Link 
                        href="/#contatos" 
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-[#2f5856] transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-900/10"
                    >
                        Reportar Ocorrência
                    </Link>
                </div>
            </section>
        </div>
    )
}
