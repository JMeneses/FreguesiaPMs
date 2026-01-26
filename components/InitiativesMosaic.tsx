import Link from 'next/link'
import { ArrowRight, Leaf, GraduationCap, Building2, Heart } from 'lucide-react'

const initiatives = [
    {
        id: 1,
        title: 'Apoio à Educação',
        description: 'Bolsas de estudo e material escolar para famílias carenciadas.',
        icon: GraduationCap,
        color: 'bg-blue-600',
        link: '/servicos'
    },
    {
        id: 2,
        title: 'Fundo Ambiental',
        description: 'Apoios para a melhoria da eficiência energética das habitações.',
        icon: Leaf,
        color: 'bg-green-600',
        link: '/servicos'
    },
    {
        id: 3,
        title: 'Reabilitação Urbana',
        description: 'Programas de financiamento para obras de conservação.',
        icon: Building2,
        color: 'bg-orange-600',
        link: '/servicos'
    },
    {
        id: 4,
        title: 'Apoio Social',
        description: 'Cabazes alimentares e acompanhamento a idosos isolados.',
        icon: Heart,
        color: 'bg-red-600',
        link: '/servicos'
    }
]

export default function InitiativesMosaic() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Iniciativas e Apoios</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Conheça os programas que temos disponíveis para melhorar a vida da nossa comunidade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {initiatives.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className={`${item.color} p-8 rounded-xl text-white hover:scale-105 transition-transform duration-300 flex flex-col items-start justify-between min-h-[250px] shadow-lg group`}
                        >
                            <div>
                                <item.icon size={48} className="mb-6 opacity-90" />
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                                Saber mais <ArrowRight size={18} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
