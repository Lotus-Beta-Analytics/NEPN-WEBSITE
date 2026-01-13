"use client";


import { motion } from "framer-motion";
import Image from "next/image";

export default function ValuesSection() {
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
      title: "NET ZERO COMMITMMENT",
      description:
        "We are dedicated to achieving net zero emissions, integrating sustainable practices across all our operations.",
    },
    {
      letter: "E",
      title: "EXCELLENCE IN OPERATIONS",
      description:
        "We strive for operational excellence, leveraging advanced technologies and best practices to lead the industry.",
    },
    {
      letter: "P",
      title: "PARTENTERSHIPS FOR GROWTH",
      description:
        "We build strategic partnerships to drive innovation, expand our portfolio, and enhance our impact.",
    },
    {
      letter: "N",
      title: "NUTURING COMMUNITIES",
      description:
        "We prioritize community engagement and support, ensuring our operations contribute positively to local development.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[10px] overflow-hidden shadow-xl"
          >
            <Image
              src="/images/worker-nepn.jpg"
              alt="NEPN Worker at facility"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Cards Column */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-rows-4 gap-4 h-[500px]"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-[10px] p-5 shadow-md hover:shadow-xl transition-shadow flex items-start gap-5 h-full"
              >
                {/* Letter Badge */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-nepn-red flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold leading-none">
                    {value.letter}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm lg:text-base font-semibold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs text-black/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
