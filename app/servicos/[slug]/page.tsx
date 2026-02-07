import { services } from '@/lib/services-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, FileText, Download, Phone, Mail, MapPin } from 'lucide-react'

// Correct type definition for Next.js 15+ dynamic route props
type Props = {
    params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = services.find(s => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 py-12">
                    <Link href="/servicos" className="inline-flex items-center text-gray-500 hover:text-primary mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar aos Serviços
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                            <service.icon size={40} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Images */}
                        {service.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.images.map((img, index) => (
                                    <div key={index} className={`relative rounded-2xl overflow-hidden shadow-md ${index === 0 && service.images.length % 2 !== 0 ? 'md:col-span-2 aspect-video' : 'aspect-video'}`}>
                                        <Image
                                            src={img}
                                            alt={`${service.title} - Imagem ${index + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre este Serviço</h2>
                            <div
                                className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none"
                                dangerouslySetInnerHTML={{ __html: service.longDescription }}
                            />
                        </div>

                        {/* Documents */}
                        {service.documents.length > 0 && (
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <FileText className="mr-3 text-primary" />
                                    Documentação e Formulários
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.documents.map((doc, index) => (
                                        <a
                                            key={index}
                                            href={doc.url}
                                            className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group"
                                        >
                                            <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{doc.label}</span>
                                            <Download size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Precisa de Ajuda?</h3>
                            <p className="text-gray-600 mb-8">
                                Se tiver dúvidas sobre este serviço, entre em contacto com a Junta de Freguesia.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Telefone</p>
                                        <p className="font-semibold text-gray-900">+351 212 345 678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Email</p>
                                        <p className="font-semibold text-gray-900">geral@jf-freguesia.pt</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">Morada</p>
                                        <p className="font-semibold text-gray-900">Rua da Liberdade, nº 1</p>
                                    </div>
                                </div>
                            </div>

                            <a href="/#contatos" className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-[#2f5856] transition-colors flex items-center justify-center">
                                Contactar Secretaria
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Generate static params if we want to pre-render these pages
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}
