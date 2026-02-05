'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface NewsCarouselProps {
    images: string[]
    title: string
}

export default function NewsCarousel({ images, title }: NewsCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    if (!images || images.length === 0) return null

    return (
        <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[600px]">
                            <Image
                                src={src}
                                alt={`${title} - Imagem ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                onClick={scrollPrev}
                aria-label="Imagem anterior"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                onClick={scrollNext}
                aria-label="Próxima imagem"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}
