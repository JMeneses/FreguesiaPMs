'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }

    return (
        <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-bold text-xl flex items-center gap-2">
                        <span>FREGUESIA DE PORTO DE MÓS</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 font-medium items-center">
                        <Link href="/" className="hover:text-gray-200 transition-colors">Início</Link>

                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-gray-200 transition-colors focus:outline-none">
                                Freguesia <ChevronDown size={16} />
                            </button>
                            <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                                <Link href="/freguesia/identidade" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors">Identidade</Link>
                                <Link href="/freguesia/executivo" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors">Executivo</Link>
                                <Link href="/freguesia/assembleia" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors">Assembleia</Link>
                                <Link href="/freguesia/estatisticas" className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors">Estatísticas</Link>
                            </div>
                        </div>

                        <Link href="/noticias" className="hover:text-gray-200 transition-colors">Notícias</Link>
                        <Link href="/documentos" className="hover:text-gray-200 transition-colors">Documentos</Link>
                        <Link href="/servicos" className="hover:text-gray-200 transition-colors">Medidas e Iniciativas</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-[#3d7270]">
                        <div className="flex flex-col space-y-2 mt-2">
                            <Link href="/" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Início</Link>

                            <div>
                                <button
                                    onClick={() => toggleDropdown('freguesia')}
                                    className="w-full text-left flex justify-between items-center py-2 hover:bg-[#3d7270] px-2 rounded transition-colors"
                                >
                                    Freguesia <ChevronDown size={16} className={`transition-transform ${openDropdown === 'freguesia' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'freguesia' && (
                                    <div className="pl-4 space-y-1 bg-[#3d7270]/20 rounded pb-2">
                                        <Link href="/freguesia/identidade" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Identidade</Link>
                                        <Link href="/freguesia/executivo" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Executivo</Link>
                                        <Link href="/freguesia/assembleia" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Assembleia</Link>
                                        <Link href="/freguesia/estatisticas" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Estatísticas</Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/noticias" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Notícias</Link>
                            <Link href="/documentos" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Documentos</Link>
                            <Link href="/servicos" className="block py-2 hover:bg-[#3d7270] px-2 rounded transition-colors" onClick={() => setIsOpen(false)}>Medidas e Iniciativas</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
