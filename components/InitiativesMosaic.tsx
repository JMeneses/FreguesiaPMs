import Link from 'next/link'
import { ArrowRight, Dumbbell, GraduationCap, Baby, Drama } from 'lucide-react'

const initiatives = [
    {
        id: 1,
        title: 'Ginástica Sénior',
        description: 'Programa de ginástica gratuito para seniores da freguesia (com mais de 65 anos).',
        icon: Dumbbell,
        link: '/servicos/ginastica-senior'
    },
    {
        id: 2,
        title: 'Apoio à Natalidade',
        description: 'Apoio dado aos pais com residência na freguesia, aquando do nascimento de um filho.',
        icon: Baby,
        link: '/servicos/apoio-a-natalidade'
    },
    {
        id: 3,
        title: 'Apoio à Educação',
        description: 'Programas de apoio a aulas de Inglês e de Judo para crianças da freguesia.',
        icon: GraduationCap,
        link: '/servicos/apoio-a-educacao'
    },
    {
        id: 4,
        title: 'Apoio às Tradições',
        description: 'Apoio a eventos e tradições da freguesia como as marchas populares de S. Pedro.',
        icon: Drama,
        link: '/servicos/apoio-as-tradicoes'
    }
]

export default function InitiativesMosaic() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Medidas e Iniciativas</h2>
                    <div className="h-1.5 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Conheça as medidas e iniciativas que temos disponíveis para melhorar a qualidade de vida e o bem-estar da nossa comunidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initiatives.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start justify-between min-h-[320px] group relative overflow-hidden"
                            aria-label={`Saber mais sobre ${item.title}`}
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>

                            <div className="relative z-10 w-full">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <item.icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                                Saber mais
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
