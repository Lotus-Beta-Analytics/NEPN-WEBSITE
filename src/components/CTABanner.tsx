"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(480px, 60vh, 620px)",
        overflow: "hidden",
      }}
    >
      {/* ── Background Image ──────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/nepn_landing_page.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── Gradient overlay ──────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* ── Subtle noise texture ──────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "10px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#0000fe",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Network E&P Nigeria Limited (NEPN)
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{ overflow: "hidden", marginBottom: "12px" }}>
          <motion.h2
            initial={{ y: "105%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.38,
            }}
            style={{
              fontSize: "clamp(36px, vw, 68px)",
              fontWeight: "600",
              color: "#fff",
              // lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              // border: "2px solid red",
            }}
          >
            The Leading Indigenous
          </motion.h2>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "40px" }}>
          <motion.h2
            initial={{ y: "105%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.46,
            }}
            style={{
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: "600",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Oil & Gas Player
          </motion.h2>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.58 }}
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#0000fe",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0000cc";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0000fe";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Contact Us Today
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </Link>

          {/* Ghost secondary link */}
          <Link
            href="/about"
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            Learn More
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
