import Link from 'next/link'
import { ArrowRight, Dumbbell, GraduationCap, Baby, Drama } from 'lucide-react'

const initiatives = [
    {
        id: 1,
        title: 'Ginástica Sénior',
        description: 'Programa de ginástica para seniores da freguesia (com mais de 65 anos).',
        icon: Dumbbell,
        color: 'bg-[#723D3F]',
        link: '/servicos'
    },
    {
        id: 2,
        title: 'Apoio à Natalidade',
        description: 'Apoio dado aos pais com residência na freguesia, aquando do nascimento de um filho.',
        icon: Baby,
        color: 'bg-[#7D7F82]',
        link: '/servicos'
    },
    {
        id: 3,
        title: 'Apoio à Educação',
        description: 'Programas de apoio a aulas de Inglês e de Judo para crianças da freguesia.',
        icon: GraduationCap,
        color: 'bg-[#723D3F]',
        link: '/servicos'
    },
    {
        id: 4,
        title: 'Apoio às Tradições',
        description: 'Apoio a eventos e tradições da freguesia como as marchas populares de S. Pedro.',
        icon: Drama,
        color: 'bg-[#7D7F82]',
        link: '/servicos'
    }
]

export default function InitiativesMosaic() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Medidas e Iniciativas</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Conheça as medidas e iniciativas que temos disponíveis para melhorar a vida da nossa comunidade.
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
