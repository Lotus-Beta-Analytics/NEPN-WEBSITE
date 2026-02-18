"use client";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        // backgroundColor: "", // nepn-navy
        padding: "100px 24px",
      }}
      className="bg-nepn-navy"
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            margin: "0 0 48px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Who we are
        </motion.p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Left — words */}
          <div>
            {["History", "Mission", "Values"].map((text, index) => (
              <div key={text} style={{ overflow: "hidden" }}>
                <motion.h2
                  initial={{ y: "105%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 + index * 0.1,
                  }}
                  style={{
                    margin: 0,
                    fontSize: "clamp(52px, 8vw, 92px)",
                    fontWeight: "700",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    color: "#ffffff",
                  }}
                >
                  {text}
                </motion.h2>
              </div>
            ))}
          </div>

          {/* Right — body + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(15px, 1.5vw, 17px)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
              }}
            >
              Welcome to Network E&P Nigeria Limited (NEPN), a fully
              Nigerian-owned oil and gas company dedicated to promoting
              sustainable energy solutions throughout Nigeria. Since our
              establishment, we have been at the forefront of exploring and
              developing the Qua Iboe field, playing a vital role in meeting the
              nation&apos;s energy needs.
            </p>

            <Link
              href="/about"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#ffffff",
                color: "#0a1628",
                padding: "12px 24px",
                borderRadius: "980px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Read More
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 6.5h9M7 2.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
