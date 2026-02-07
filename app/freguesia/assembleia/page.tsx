import Image from 'next/image'

const assemblyMembers = [
    { name: 'Irene Maria Cordeiro Pereira', role: 'Presidente', party: 'PSD', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400' },
    { name: 'Carla Alexandra Caseiro de Carvalho', role: '1º Secretário', party: 'PSD', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
    { name: 'Alexandre Miguel Vieira Inácio', role: '2º Secretário', party: 'PSD', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
    { name: 'Anselmo Fernando Jorge Antunes', role: 'Vogal', party: 'PS', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
    { name: 'Ricardo Jorge Almeida Gomes', role: 'Vogal', party: 'CHEGA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400' },
    { name: 'Cláudia Sofia Bernardo Bento', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' },
    { name: 'Patrícia Cordeiro Santos', role: 'Vogal', party: 'PS', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400' },
    { name: 'Célia Maurício de Matos', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400' },
    { name: 'Manuel Fernando Gil Ferreira Fiel', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400' },
    { name: 'João Pedro Almeida Meneses', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
    { name: 'Rafaela Margarida da Silva Morais', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400' },
    { name: 'Marta Sofia Vieira Baptista Silva', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400' },
    { name: 'António José Rosa Paiva', role: 'Vogal', party: 'PSD', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
]

export default function AssemblyPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Assembleia de Freguesia</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {assemblyMembers.map((member, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <span className="text-xs font-semibold px-2 py-1 bg-gray-200 rounded-full text-gray-600">
                                {member.party}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
