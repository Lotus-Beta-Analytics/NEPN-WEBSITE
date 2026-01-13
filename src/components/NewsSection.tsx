"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const newsItems = [
  {
    title: "Safety First Initiative",
    description:
      "Our commitment to maintaining the highest safety standards across all operations continues to set industry benchmarks.",
    image: "/images/news-safety-1.jpg",
    date: "January 10, 2026",
    category: "Safety",
  },
  {
    title: "Environmental Excellence",
    description:
      "NEPN achieves new milestones in environmental stewardship and sustainable energy practices.",
    image: "/images/news-safety-2.jpg",
    date: "January 8, 2026",
    category: "Sustainability",
  },
  {
    title: "Community Development",
    description:
      "Expanding our CSR initiatives to empower more communities across Nigeria.",
    image: "/images/news-safety-1.jpg",
    date: "January 5, 2026",
    category: "CSR",
  },
  {
    title: "Innovation in Energy",
    description:
      "Implementing cutting-edge technology to enhance operational efficiency and reduce environmental impact.",
    image: "/images/news-safety-2.jpg",
    date: "January 3, 2026",
    category: "Technology",
  },
  {
    title: "Partnership Expansion",
    description:
      "Forging new strategic partnerships to drive growth and sustainability in the energy sector.",
    image: "/images/news-safety-1.jpg",
    date: "December 28, 2025",
    category: "Partnerships",
  },
  {
    title: "Operational Excellence",
    description:
      "Achieving record production levels while maintaining our commitment to environmental responsibility.",
    image: "/images/news-safety-2.jpg",
    date: "December 25, 2025",
    category: "Operations",
  },
];

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= newsItems.length ? 0 : prev + itemsPerPage
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= newsItems.length ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.floor((newsItems.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visibleItems = newsItems.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl lg:text-[90px] font-semibold text-black leading-tight mb-8">
                News &<br />
                Insights
              </h2>
              <p className="text-base lg:text-lg text-black/80 leading-relaxed lg:leading-[40px] mb-8">
                Stay updated with the latest from NEPN — including company
                announcements, industry trends, project milestones, and thought
                leadership
              </p>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white hover:bg-gray-100 p-4 rounded-full shadow-md transition-all hover:shadow-lg"
                  aria-label="Previous news"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-md transition-all hover:shadow-lg"
                  aria-label="Next news"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - News Cards Carousel */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {visibleItems.map((item, index) => (
                  <div
                    key={currentIndex + index}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-56 lg:h-64 overflow-hidden group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      {/* Date */}
                      <p className="text-xs text-gray-500 mb-3 font-medium">
                        {item.date}
                      </p>

                      <h3 className="text-xl lg:text-2xl font-semibold text-black mb-4 hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-black/70 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors group">
                        READ MORE
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8h10M9 4l4 4-4 4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-blue-600 w-8 shadow-md"
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Mobile */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all"
                aria-label="Previous news"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-md transition-all"
                aria-label="Next news"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
