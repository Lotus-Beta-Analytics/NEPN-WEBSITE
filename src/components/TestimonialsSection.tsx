"use client";

import { useGetTestimonials } from "@/hooks/testimonials";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const fallbackTestimonials = [
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
      "The consistency and integrity of NEPN's work make them a trusted partner across different initiatives.",
    name: "Nnochiri Ogbonna",
    role: "",
  },
];

const ITEMS_PER_PAGE = 2;

export default function TestimonialsSection() {
  const { data: apiTestimonials } = useGetTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = apiTestimonials?.length
    ? apiTestimonials.map((item: any) => ({
        quote: item.description,
        name: item.name,
        role: item.job_title,
        image: item.image,
        company: item.company_name,
      }))
    : fallbackTestimonials;

  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  // Normalise index → always a valid slide start (0, 2, 4 …)
  const activeSlide = Math.floor(currentIndex / ITEMS_PER_PAGE) % totalSlides;

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  // Auto-advance: increment by ITEMS_PER_PAGE, keep in bounds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const next = prev + ITEMS_PER_PAGE;
        return next >= testimonials.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (slideIndex: number) => {
    const nextIndex = slideIndex * ITEMS_PER_PAGE;
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setCurrentIndex(nextIndex);
  };

  return (
    <section ref={ref} className="relative bg-gray-50 px-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:flex-1 flex flex-col gap-10 pt-8">
            {/* Header */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fe0000]">
                  Testimonials
                </p>
                <h2 className="text-gray-900 text-2xl lg:text-[28px] font-semibold leading-snug">
                  What our people &amp; partners say
                </h2>
              </div>

              {/* Pagination dots — keyed on activeSlide so they always reflect current position */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                  const isActive = activeSlide === slideIndex;
                  return (
                    <button
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      aria-label={`Go to testimonial slide ${slideIndex + 1}`}
                      style={{
                        width: isActive ? 28 : 8,
                        height: 8,
                        borderRadius: 9999,
                        background: isActive ? "#fe0000" : "#d1d5db",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid md:grid-cols-2 gap-5 lg:gap-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-7 flex flex-col"
                    style={{
                      boxShadow:
                        "0 1px 2px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.07)",
                      border: "1px solid #f1f1f1",
                    }}
                  >
                    {/* Quote icon */}
                    <div className="mb-5">
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 63 50"
                        fill="#fe0000"
                        aria-hidden="true"
                      >
                        <path d="M0 25C0 11.2 11.2 0 25 0V12.5C18.1 12.5 12.5 18.1 12.5 25H25V50H0V25ZM38 25C38 11.2 49.2 0 63 0V12.5C56.1 12.5 50.5 18.1 50.5 25H63V50H38V25Z" />
                      </svg>
                    </div>

                    {/* Quote text */}
                    <p className="text-gray-600 text-[14.5px] italic leading-[1.8] mb-7 flex-1">
                      {testimonial.quote}
                    </p>

                    {/* Divider */}
                    <div className="mb-5 h-px bg-gray-100" />

                    {/* Author */}
                    <div className="flex items-center gap-3.5">
                      {testimonial.image ? (
                        <div
                          className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                          style={{ border: "2px solid #f3f3f3" }}
                        >
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold"
                          style={{ background: "#fe0000" }}
                        >
                          {testimonial.name?.charAt(0) ?? "?"}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-gray-900 leading-tight truncate">
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="text-[12.5px] text-gray-400 italic font-light mt-0.5 truncate">
                            {testimonial.role}
                          </p>
                        )}
                        {testimonial.company && (
                          <p className="text-[11px] font-medium text-[#fe0000] uppercase tracking-wide mt-1 truncate">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN (untouched) ── */}
          <div className="hidden lg:block relative mt-8 lg:mt-0 h-[620px] lg:w-[300px]">
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
                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
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
                    {testimonials.length}+
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
