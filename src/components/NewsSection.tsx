'use client'

import { useState } from 'react'
import Image from 'next/image'

const newsItems = [
  {
    title: 'Safety First',
    description: 'Our Frequently Asked Questions provide quick answers to common inquiries about our operations, partnerships, and more',
    image: '/images/news-safety-1.jpg',
  },
  {
    title: 'Safety First',
    description: 'Our Frequently Asked Questions provide quick answers to common inquiries about our operations, partnerships, and more',
    image: '/images/news-safety-2.jpg',
  },
]

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl lg:text-[90px] font-semibold text-black leading-tight mb-8">
              News &<br />
              Insights
            </h2>
            <p className="text-base lg:text-lg text-black/80 leading-relaxed lg:leading-[40px]">
              Stay updated with the latest from NEPN — including company announcements, industry trends, project milestones, and thought leadership
            </p>
          </div>

          {/* Right Side - News Cards */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="relative h-56 lg:h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-medium text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-[15px] text-black/80 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <button className="text-nepn-brightBlue hover:text-nepn-blue text-sm font-semibold transition-colors">
                      READ MORE
                    </button>
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
                    index === currentIndex ? 'bg-nepn-brightBlue w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}