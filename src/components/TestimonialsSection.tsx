"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "NEPN isn't just a business partner - they are a value driven ally. ",
    name: "Thomas Kruger",
    role: "Director of Operations",
    image: "/images/testimonial-thomas.jpg",
  },
  {
    quote:
      "NEPN isn't just a business partner - they are a value driven ally. ",
    name: "Faitma Lawal",
    role: "Regional Project Manager",
    image: "/images/testimonial-faitma.jpg",
  },
  {
    quote:
      "Working with NEPN has transformed our approach to sustainability. Their guidance and ethics are unmatched.",
    name: "David Oladele",
    role: "Senior Engineer",
    image: "/images/testimonial-faitma.jpg",
  },
  {
    quote:
      "NEPN’s professionalism and integrity make them a trusted partner in every project we undertake.",
    name: "Ngozi Adebayo",
    role: "Project Coordinator",
    image: "/images/testimonial-faitma.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get the two testimonials to show
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="relative bg-gray-50 px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8 items-start">
          {/* Left Column: Header + Dots + Carousel */}
          <div className="lg:flex-1 flex flex-col gap-8 py-24">
            {/* Header + Pagination */}
            <div className="flex flex-col items-start gap-4">
              <div className="py-3 relative z-10">
                <span className="relative text-gray-700 text-xl lg:text-2xl font-semibold">
                  <span className="relative z-10">Wh</span>
                  <span className="relative z-10">
                    at our people and partner say
                  </span>

                  {/* small circle behind Su (optional subtle detail) */}
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3d3d3d0a]  z-0"></span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
                  (_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => setCurrentIndex(slideIndex * 2)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentIndex === slideIndex * 2
                          ? "bg-nepn-red w-8"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial slide ${slideIndex + 1}`}
                    />
                  )
                )}
              </div>
            </div>

            {/* Carousel */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] p-8 shadow-md flex flex-col justify-between transition-transform duration-500"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg
                      width="86"
                      height="86"
                      viewBox="0 0 63 50"
                      fill="#fe0000"
                    >
                      <path d="M0 25C0 11.2 11.2 0 25 0V12.5C18.1 12.5 12.5 18.1 12.5 25H25V50H0V25ZM38 25C38 11.2 49.2 0 63 0V12.5C56.1 12.5 50.5 18.1 50.5 25H63V50H38V25Z" />
                    </svg>
                  </div>

                  <p className="text-[15px] text-black italic font-light leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-[13px] text-black/70 italic font-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Card (full height of left) */}
          <div className="lg:w-[300px] bg-nepn-red  h-[620px] border-2 border-y-500  text-center shadow-xl text-white flex flex-col justify-between py-4 mt-8 lg:mt-0">
            <div className="mb-6 flex flex-col place-items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/mdi_partnership.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>

              <div>
                <div className="text-5xl lg:text-6xl font-semibold mb-2">
                  20+
                </div>
                <div className="text-base lg:text-lg font-medium mb-8">
                  Partners
                </div>
              </div>
            </div>

            <div className="space-y-1 text-start px-4">
              <div className="text-5xl lg:text-5xl font-semibold tracking-wider">
                TESTI
              </div>
              <div className="text-5xl lg:text-5xl font-semibold tracking-wider">
                MONIALS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
