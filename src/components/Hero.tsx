"use client";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Powering Progress through\nExploration",
    description:
      "At NEPN, we discover and harness energy responsibly to fuel economies and empower communities",
    mediaType: "video",
    mediaSrc: "/videos/bg-video.mp4",
  },
  {
    title: "Leading Indigenous\nOil & Gas Player",
    description:
      "Committed to sustainable energy solutions and environmental stewardship in Nigeria",
    mediaType: "image",
    mediaSrc: "/images/hero-bg.jpg", // Your video path
  },
  {
    title: "Excellence in\nOperations",
    description:
      "Delivering operational excellence through advanced technologies and best practices",
    mediaType: "image", // Solid color background
    mediaSrc: "/images/heroTwo-bg.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Media - with transition */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image Background */}
            {slide.mediaType === "image" && slide.mediaSrc && (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.mediaSrc})` }}
              />
            )}

            {/* Video Background */}
            {slide.mediaType === "video" && slide.mediaSrc && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.mediaSrc} type="video/mp4" />
              </video>
            )}

            {/* Blank Background */}
            {slide.mediaType === "blank" && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950" />
            )}

            {/* Darker, more transparent overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70" />
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* More Transparent Glass Card with better text contrast */}
          <div className="backdrop-blur-md bg-[rgba(0,0,90,0.35)] rounded-[20px] p-8 lg:p-12 text-center shadow-2xl border border-white/10">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 whitespace-pre-line leading-[3rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base lg:text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              {heroSlides[currentSlide].description}
            </p>
            <button className="bg-white/20 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              EXPLORE NOW
            </button>

            <div className="flex items-center justify-center gap-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-8 shadow-lg"
                      : "bg-white/40 w-3 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C360 80 720 80 1080 40C1260 20 1350 0 1440 0V100H0V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
