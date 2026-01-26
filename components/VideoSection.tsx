import Image from 'next/image'
import { Play } from 'lucide-react'

export default function VideoSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Descubra a Nossa Freguesia</h2>
                        <div className="h-1 w-20 bg-primary mb-6"></div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Uma terra de gente acolhedora, rica em história e com o olhar posto no futuro.
                            Conheça os recantos, as tradições e os projetos que fazem desta freguesia um lugar único para viver e visitar.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Desde os espaços verdes revitalizados até às novas infraestruturas de apoio social,
                            estamos a construir uma comunidade mais forte e unida.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                        {/* Placeholder for Video - Could use an iframe or video tag */}
                        <iframe src="https://www.youtube.com/embed/nJCM0Vw3iKc?si=V1iIbams8eZ-p7J9" title="Video da Freguesia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
