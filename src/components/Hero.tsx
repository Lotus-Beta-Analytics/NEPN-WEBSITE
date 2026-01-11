'use client'

import { useState } from 'react'

const heroSlides = [
  {
    title: 'Powering Progress through\nExploration',
    description: 'At NEPN, we discover and harness energy responsibly to fuel economies and empower communities',
  },
  {
    title: 'Leading Indigenous\nOil & Gas Player',
    description: 'Committed to sustainable energy solutions and environmental stewardship in Nigeria',
  },
  {
    title: 'Excellence in\nOperations',
    description: 'Delivering operational excellence through advanced technologies and best practices',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-[rgba(0,0,90,0.71)] rounded-[20px] p-8 lg:p-12 text-center shadow-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 whitespace-pre-line leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
            <button className="bg-nepn-brightBlue hover:bg-nepn-blue text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              EXPLORE NOW
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0C240 80 480 80 720 40C960 0 1200 0 1440 40V120H0V0Z" fill="#00005a"/>
        </svg>
      </div>
    </section>
  )
}