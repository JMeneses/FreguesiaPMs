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
                            A nossa Freguesia é um lugar de pessoas, de história e de futuro. Um espaço onde as tradições se mantêm vivas, onde a comunidade se une e onde todos trabalham diariamente para construir uma freguesia mais ativa, inclusiva e cheia de oportunidades.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Aqui poderá conhecer melhor o nosso território, os serviços disponíveis, as associações locais, os eventos e todas as iniciativas que dão vida à nossa comunidade.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Descubra o que nos torna únicos e faça parte da vida da nossa freguesia.
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
