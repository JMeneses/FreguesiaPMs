import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

const executiveMembers = [
    {
        name: 'João Silva',
        role: 'Presidente',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
        email: 'presidente@freguesia.pt'
    },
    {
        name: 'Maria Santos',
        role: 'Secretária',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
        email: 'secretaria@freguesia.pt'
    },
    {
        name: 'António Costa',
        role: 'Tesoureiro',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
        email: 'tesouraria@freguesia.pt'
    }
]

export default function ExecutivePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Executivo da Junta</h1>

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
                                <div className="flex justify-center gap-4">
                                    <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
                                        <Mail size={18} /> <span className="text-sm">{member.email}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
