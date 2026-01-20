"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface ValuesSectionProps {
  mediaType?: "image" | "video";
  mediaSrc?: string;
  posterImage?: string;
}

export default function ValuesSection({
  mediaType = "image",
  mediaSrc = "/images/worker-nepn.jpg",
  posterImage = "/images/worker-nepn.jpg",
}: ValuesSectionProps) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerCards = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const values = [
    {
      letter: "N",
      title: "NET ZERO COMMITMENT",
      description:
        "We are dedicated to achieving net zero emissions, integrating sustainable practices across all our operations.",
      color: "bg-nepn-red",
    },
    {
      letter: "E",
      title: "EXCELLENCE IN OPERATIONS",
      description:
        "We strive for operational excellence, leveraging advanced technologies and best practices to lead the industry.",
      color: "bg-[#0000FE]",
    },
    {
      letter: "P",
      title: "PARTNERSHIPS FOR GROWTH",
      description:
        "We build strategic partnerships to drive innovation, expand our portfolio, and enhance our impact.",
      color: "bg-nepn-red",
    },
    {
      letter: "N",
      title: "NURTURING COMMUNITIES",
      description:
        "We prioritize community engagement and support, ensuring our operations contribute positively to local development.",
      color: "bg-[#0000FE]",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nepn-navy mb-4">
            Our Core Values
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at NEPN
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Media Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative h-[400px] md:h-[500px] lg:h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {mediaType === "video" ? (
              <>
                <video
                  ref={videoRef}
                  src={mediaSrc}
                  poster={posterImage}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play/Pause Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 group-hover:scale-110"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 md:w-10 md:h-10 text-[#0000FE]" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0000FE] ml-1" fill="currentColor" />
                  )}
                </motion.button>
              </>
            ) : (
              <Image
                src={mediaSrc}
                alt="NEPN Worker at facility"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <p className="text-nepn-navy font-semibold text-sm md:text-base">
                Building Nigeria's Energy Future
              </p>
            </motion.div>
          </motion.div>

          {/* Cards Column - Matches height */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-between gap-4 md:gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 flex items-start gap-4 md:gap-5 border border-gray-100 group flex-1"
              >
                {/* Letter Badge */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full ${value.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <span className="text-white text-xl md:text-2xl font-bold leading-none">
                    {value.letter}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-nepn-navy mb-2 group-hover:text-[#0000FE] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Arrow indicator on hover */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="hidden lg:block flex-shrink-0 text-[#0000FE]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-1 bg-gradient-to-r from-nepn-red via-[#0000FE] to-nepn-red rounded-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}