"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-nepn-navy overflow-hidden px-12">
      {/* Content Area - Added padding to account for waves */}
      <div className="relative z-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12"
          >
            <div className="px-4 py-3 relative z-10">
              <span className="relative text-white text-xl lg:text-2xl font-semibold">
                <span className="relative z-10">Wh</span>
                <span className="relative z-10">o we are</span>

                {/* small circle behind Su (optional subtle detail) */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
                  className="absolute -left-3 top-[-10px] -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 z-0"
                />
              </span>
            </div>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="hidden md:block w-px h-8 bg-white/30 mx-4"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white text-lg lg:text-xl font-normal"
            >
              Learn about our
            </motion.span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Large Text */}
            <div className="space-y-7">
              {["History", "Mission", "Values"].map((text, index) => (
                <motion.h2
                  key={text}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#6d6dff",
                    transition: { duration: 0.2 },
                  }}
                  className="text-6xl lg:text-[96px] font-semibold text-[#4d4df9] leading-none cursor-default"
                >
                  {text}
                </motion.h2>
              ))}
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="text-white/80 text-lg lg:text-xl leading-relaxed lg:leading-[40px]"
              >
                Welcome to Network E&P Nigeria Limited (NEPN), a fully
                Nigerian-owned oil and gas company dedicated to promoting
                sustainable energy solutions throughout Nigeria. Since our
                establishment, we have been at the forefront of exploring and
                developing the Qua Iboe field, playing a vital role in meeting
                the nations energy needs. We take pride in maintaining the
                highest standards of environmental stewardship and community
                engagement....
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 254, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0000FE] hover:bg-nepn-blue text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-lg"
              >
                READ MORE
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
