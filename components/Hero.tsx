'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/Button'

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: '/uploads/arte_urbana_capa.jpg',
            title: 'Bem-vindo à Freguesia',
            description: 'Trabalhamos por um futuro melhor para a nossa comunidade.'
        },
        {
            id: 2,
            image: '/uploads/santo_antonio_capa.jpg', // Placeholder
            title: 'Inovação e Tradição',
            description: 'Respeitando o passado enquanto construímos o futuro.'
        },
        {
            id: 3,
            image: '/uploads/castelo_baloico_capa.jpg', // Placeholder
            title: 'Juntos pela Comunidade',
            description: 'Participe nos eventos e iniciativas locais.'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section className="relative h-[600px] w-full overflow-hidden bg-gray-900 text-white">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* In generic/offline env, might need local images. Using external for now but adding fallback logic effectively via Next/Image error handling requires care. 
              Since network access exists, Unsplash placeholders are fine. */}
                    {/* Using Next/Image for optimization */}
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">{slide.description}</p>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full hover:bg-black/50 text-white transition-colors"
                aria-label="Slide anterior"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 rounded-full hover:bg-black/50 text-white transition-colors"
                aria-label="Próximo slide"
            >
                <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>
        </section>
    )
}
