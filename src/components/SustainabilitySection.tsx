"use client";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function SustainabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        padding: "120px 24px",
        backgroundColor: "#f5f5f7",
        overflow: "hidden",
      }}
    >
      {/* ── Background circles ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: "-320px",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.06)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* inner white circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        />
      </motion.div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          style={{ marginBottom: "24px" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.06em",
              color: "#86868b",
              textTransform: "uppercase",
            }}
          >
            Sustainability
          </span>
        </motion.div>

        {/* Heading — two-line wipe */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.18,
              }}
              style={{
                margin: 0,
                fontSize: "clamp(40px, 7vw, 86px)",
                fontWeight: "700",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#1d1d1f",
              }}
            >
              Sustainability at <span style={{ color: "#0000fe" }}>NEPN</span>
            </motion.h2>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.38,
          }}
          style={{
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
            maxWidth: "480px",
            margin: "0 auto 32px",
            transformOrigin: "center",
          }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.44 }}
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "#424245",
            lineHeight: 1.75,
            marginBottom: "48px",
            fontWeight: "400",
          }}
        >
          At NEPN, sustainability is more than a goal — it is a fundamental part
          of who we are and how we operate. We are deeply committed to
          responsible practices that promote long-term value for our
          stakeholders, our host communities, and the environment.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.54 }}
        >
          <Link
            href="/sustainability"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#0000fe",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "980px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0000cc";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0000fe";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Our Sustainability
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
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
