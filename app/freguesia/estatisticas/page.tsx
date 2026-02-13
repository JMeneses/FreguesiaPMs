import { Users, Vote, Briefcase, Utensils, Baby, School, Building } from 'lucide-react'

const stats = [
    {
        id: 1,
        label: 'População',
        value: '5,432',
        icon: Users,
        color: 'text-blue-600',
        bg: 'bg-blue-100'
    },
    {
        id: 2,
        label: 'Eleitores',
        value: '4,100',
        icon: Vote,
        color: 'text-green-600',
        bg: 'bg-green-100'
    },
    {
        id: 3,
        label: 'Mulheres',
        value: '52%',
        icon: Baby,
        color: 'text-pink-500',
        bg: 'bg-pink-100'
    },
    {
        id: 4,
        label: 'Homens',
        value: '48%',
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        id: 5,
        label: 'Indústrias',
        value: '24',
        icon: Briefcase,
        color: 'text-amber-600',
        bg: 'bg-amber-100'
    },
    {
        id: 6,
        label: 'Restauração',
        value: '15',
        icon: Utensils,
        color: 'text-red-500',
        bg: 'bg-red-100'
    },
    {
        id: 7,
        label: 'Escolas',
        value: '3',
        icon: School,
        color: 'text-indigo-600',
        bg: 'bg-indigo-100'
    },
    {
        id: 8,
        label: 'Associações',
        value: '12',
        icon: Building,
        color: 'text-emerald-600',
        bg: 'bg-emerald-100'
    }
]

export default function StatisticsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Freguesia em Números</h1>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Conheça a realidade demográfica e socioeconómica da nossa freguesia através dos principais indicadores estatísticos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.bg}`}>
                                <stat.icon size={32} className={stat.color} />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Informação Adicional</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>
                            Os dados apresentados são baseados nos últimos censos e nos registos administrativos da Junta de Freguesia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
