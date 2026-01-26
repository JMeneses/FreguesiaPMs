import { Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src="/uploads/brasao_junta_de_porto_de_mos.png"
                        alt="Brasão da Junta de Freguesia de Porto de Mós"
                        width={150}
                        height={150}
                        className="object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Freguesia</h3>
                    <p className="text-gray-400">
                        Servindo a comunidade com dedicação, transparência e proximidade.
                        Trabalhamos todos os dias para melhorar a qualidade de vida de todos os fregueses.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contactos</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-primary mt-1" />
                            <span>Rua Principal, 123<br />1000-001 Lisboa</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-primary" />
                            <span>212 345 678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-primary" />
                            <span>geral@freguesia.pt</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Horário de Atendimento</h3>
                    <p className="text-gray-300 mb-2">Segunda a Sexta</p>
                    <p className="text-white font-medium">09:00 - 12:30 | 14:00 - 17:00</p>

                    <div className="mt-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Freguesia. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
