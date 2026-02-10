"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "NEPN operates with a strong sense of responsibility and financial discipline. Their processes are clear, structured, and dependable.",
    name: "Soname Gbemiga",
    role: "Senior Accountant",
  },
  {
    quote:
      "Working with NEPN has shown a consistent commitment to accountability and operational excellence across all projects.",
    name: "Ewere Uzah",
    role: "AGMO",
  },
  {
    quote:
      "NEPN brings reliability and attention to detail that make complex workflows easier to manage and execute.",
    name: "Adeyemo Gbenga",
    role: "HFA",
  },
  {
    quote:
      "NEPN maintains high standards in facilities management, ensuring efficiency, safety, and long-term value.",
    name: "Badmus Adebayo",
    role: "Facility Manager",
  },
  {
    quote:
      "NEPN approaches every engagement with professionalism and a clear focus on delivering sustainable outcomes.",
    name: "Mikele Oziegbe",
    role: "",
  },
  {
    quote:
      "The consistency and integrity of NEPN’s work make them a trusted partner across different initiatives.",
    name: "Nnochiri Ogbonna",
    role: "",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    <section ref={ref} className="relative bg-gray-50 px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8 items-start">
          {/* Left Column: Header + Dots + Carousel */}
          <div className="lg:flex-1 flex flex-col gap-8 pt-8">
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
                  ),
                )}
              </div>
            </div>

            {/* Carousel */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[10px] p-8 shadow-md flex flex-col justify-between"
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
                    {/* <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"> */}
                    {/* <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      /> */}
                    {/* </div> */}
                    <div>
                      <p className="text-[15px] font-medium text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-[13px] text-black/70 italic font-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Card with Flag Drop Animation */}
          <div className="hidden lg:block relative mt-8 lg:mt-0 h-[620px] lg:w-[300px]">
            {/* Stats Card (Flag) */}
            <motion.div
              initial={{ y: -650, opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: -650, opacity: 0 }
              }
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 80,
                mass: 1.2,
                delay: 0.3,
              }}
              className="w-full bg-nepn-red h-[620px] border-2 border-y-500 text-center shadow-xl text-white flex flex-col justify-between py-4 relative"
            >
              {/* Subtle wave effect */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={
                  isInView
                    ? {
                        scaleX: [1, 0.98, 1, 0.99, 1],
                        skewY: [0, -1, 0, 0.5, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              />

              <div className="mb-6 flex flex-col place-items-center relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src={"/images/mdi_partnership.png"}
                    width={36}
                    height={36}
                    alt="logo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <div className="text-5xl lg:text-6xl font-semibold mb-2">
                    20+
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 1.4, duration: 0.5 }}
                className="space-y-1 text-start px-4 relative z-10"
              >
                <div className="text-5xl lg:text-5xl font-semibold tracking-wider">
                  TESTI
                </div>
                <div className="text-5xl lg:text-5xl font-semibold tracking-wider">
                  MONIALS
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
