"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ContactCTA() {
  const router = useRouter();
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-r from-[#018001] to-[#065406] overflow-hidden">
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 z-0 pointer-events-none">
        {/* Outer Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.1, 1],
            opacity: [0, 0.3, 1],
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.4, 0.25, 1],
            times: [0, 0.6, 1],
          }}
          className="w-[540px] h-[540px] rounded-full bg-[#FFFFFF30]"
        >
          {/* Pulsing animation */}
          <motion.div
            animate={{
              scale: [2, 1.85, 2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full rounded-full bg-[#FFFFFF20]"
          />
        </motion.div>

        {/* Inner Circle */}
        {/* <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: [0, 1.15, 1],
            opacity: [0, 0.5, 1],
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
            times: [0, 0.7, 1],
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-[#f1dcdc0a]"
        > */}
        {/* Rotating glow effect */}
        {/* <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFFFF15] to-transparent"
          />
        </motion.div> */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl lg:text-[90px] font-semibold text-white leading-tight mb-8">
            Get in touch
          </h2>
          <p className="text-lg lg:text-xl text-white leading-relaxed lg:leading-[40px] mb-12">
            We&apos;d love to hear from you. Reach out to our team for general
            inquiries, or business opportunities — we&apos;re here to help.
          </p>
          <button
            className="border-2 border-white text-white hover:bg-white hover:text-[#018001] px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg"
            onClick={() => router.push("/contact")}
          >
            SEND A MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
}
