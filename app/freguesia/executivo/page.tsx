import Image from 'next/image'
import { Mail } from 'lucide-react'

const executiveMembers = [
    {
        name: 'Manuel de Freitas Barroso',
        role: 'Presidente',
        image: '/uploads/manuel_barroso_presidente_executivo.jpg',
        email: 'presidente@freguesia.pt'
    },
    {
        name: 'Vânia Cristina Vala Marques',
        role: 'Secretária',
        image: '/uploads/vania_marques_secretaria.jpg',
        email: ''
    },
    {
        name: 'Tony Jorge Correia Trovão',
        role: 'Tesoureiro',
        image: '/uploads/tony_trovao_tesoureiro.jpg',
        email: ''
    },
    {
        name: 'Cláudio Miguel Vala Cordeiro',
        role: 'Vogal',
        image: '/uploads/claudio_cordeiro_vogal.jpg',
        email: ''
    },
    {
        name: 'Marta Ferreira da Silva',
        role: 'Vogal',
        image: '/uploads/marta_silva_vogal.jpg',
        email: ''
    },
]

export default function ExecutivePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Executivo</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {executiveMembers.map((member, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-80 overflow-hidden bg-gray-200 relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium text-lg mb-6">{member.role}</p>
                                {member.email && (
                                    <div className="flex justify-center gap-4">
                                        <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                                            <Mail size={18} /> <span className="text-sm">{member.email}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
