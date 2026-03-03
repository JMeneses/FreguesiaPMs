import Image from 'next/image'

const assemblyMembers = [
    { name: 'Irene Maria Cordeiro Pereira', role: 'Presidente', party: 'PSD', image: '/uploads/AF_IrenePereira.jpg' },
    { name: 'Carla Alexandra Caseiro de Carvalho', role: '1º Secretário', party: 'PSD', image: '/uploads/AF_CarlaCarvalho.jpg' },
    { name: 'Alexandre Miguel Vieira Inácio', role: '2º Secretário', party: 'PSD', image: '/uploads/AF_AlexandreInacio.jpg' },
    { name: 'Anselmo Fernando Jorge Antunes', role: 'Vogal', party: 'PS', image: '/uploads/AF_Anselmo.jpeg' },
    { name: 'Ricardo Jorge Almeida Gomes', role: 'Vogal', party: 'CHEGA', image: '/uploads/AF_Joka.jpg' },
    { name: 'Cláudia Sofia Bernardo Bento', role: 'Vogal', party: 'PSD', image: '/uploads/AF_ClaudiaBento.jpg' },
    { name: 'Patrícia Cordeiro Santos', role: 'Vogal', party: 'PS', image: '/uploads/AF_Patricia.jpeg' },
    { name: 'Célia Maurício de Matos', role: 'Vogal', party: 'PSD', image: '/uploads/AF_CeliaMatos.jpg' },
    { name: 'Manuel Fernando Gil Ferreira Fiel', role: 'Vogal', party: 'PSD', image: '/uploads/AF_ManuelFiel.jpg' },
    { name: 'João Pedro Almeida Meneses', role: 'Vogal', party: 'PSD', image: '/uploads/AF_JoaoMeneses.jpg' },
    { name: 'Rafaela Margarida da Silva Morais', role: 'Vogal', party: 'PSD', image: '/uploads/AF_RafaelaMorais.jpg' },
    { name: 'Marta Sofia Vieira Baptista Silva', role: 'Vogal', party: 'PSD', image: '/uploads/AF_MartaSilva.jpg' },
    { name: 'António José Rosa Paiva', role: 'Vogal', party: 'PSD', image: '/uploads/AF_AntoonioPaiva.jpg' },
]

export default function AssemblyPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Assembleia de Freguesia</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {assemblyMembers.map((member, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-56 h-56 bg-gray-200 rounded-full mb-4 overflow-hidden relative">
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
