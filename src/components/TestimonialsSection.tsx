'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "NEPN isn't just a business partner - they are a value driven ally. Their commitment to ethical operations and environmental responsibilities is inspiring",
    name: 'Thomas Kruger',
    role: 'Director of Operations',
    image: '/images/testimonial-thomas.jpg',
  },
  {
    quote: "NEPN isn't just a business partner - they are a value driven ally. Their commitment to ethical operations and environmental responsibilities is inspiring",
    name: 'Faitma Lawal',
    role: 'Regional Project Manager',
    image: '/images/testimonial-faitma.jpg',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-200/50 rounded-full px-8 py-3">
            <span className="text-gray-700 text-xl lg:text-2xl font-semibold">What our people & partner say</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Testimonials Carousel */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-[10px] p-8 shadow-md">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg width="63" height="50" viewBox="0 0 63 50" fill="#fe0000">
                      <path d="M0 25C0 11.2 11.2 0 25 0V12.5C18.1 12.5 12.5 18.1 12.5 25H25V50H0V25ZM38 25C38 11.2 49.2 0 63 0V12.5C56.1 12.5 50.5 18.1 50.5 25H63V50H38V25Z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="text-[15px] text-black italic font-light leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-black">{testimonial.name}</p>
                      <p className="text-[13px] text-black/70 italic font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-nepn-red w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-3">
            <div className="bg-nepn-red rounded-[10px] p-8 lg:p-12 text-center shadow-xl text-white h-full flex flex-col justify-center">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="#fe0000">
                    <path d="M20 4L22.5 14H33L24 20L27 30L20 24L13 30L16 20L7 14H17.5L20 4Z" />
                  </svg>
                </div>
              </div>

              {/* Stat */}
              <div className="text-6xl lg:text-7xl font-semibold mb-2">20+</div>
              <div className="text-base lg:text-lg font-medium mb-8">Partners</div>

              {/* Label */}
              <div className="space-y-1">
                <div className="text-5xl lg:text-6xl font-semibold tracking-wider">TESTI</div>
                <div className="text-5xl lg:text-6xl font-semibold tracking-wider">MONIALS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}