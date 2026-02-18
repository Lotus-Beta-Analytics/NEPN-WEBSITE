"use client";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        padding: "120px 0",
        backgroundColor: "#018001",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, #065406 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          right: "-180px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          zIndex: 1,
        }}
      >
        {/* Rotating inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Orbiting dot */}
          <motion.div
            style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.7)",
              boxShadow: "0 0 12px 4px rgba(255,255,255,0.3)",
            }}
          />
        </motion.div>

        {/* Second counter-rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "100px",
            borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.07)",
          }}
        >
          {/* Orbiting dot 2 */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.5)",
              boxShadow: "0 0 8px 3px rgba(255,255,255,0.2)",
            }}
          />
        </motion.div>

        {/* Pulsing center glow */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: "160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {[
        { top: "20%", left: "10%", size: 3, delay: 0 },
        { top: "70%", left: "15%", size: 2, delay: 0.8 },
        { top: "40%", left: "75%", size: 4, delay: 0.3 },
        { top: "80%", left: "60%", size: 2, delay: 1.2 },
        { top: "15%", left: "55%", size: 3, delay: 0.6 },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.6, 0],
                  y: [10, -20, 10],
                }
              : {}
          }
          transition={{
            delay: p.delay,
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 1,
          }}
        />
      ))}

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 10px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.6)",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Let&apos;s Talk
          </span>
        </motion.div>

        {/* Heading — letter by letter reveal */}
        <div style={{ overflow: "hidden", marginBottom: "24px" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: "700",
              color: "#fff",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Get in touch
          </motion.h2>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            transformOrigin: "left",
            marginBottom: "28px",
            maxWidth: "520px",
          }}
        />

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: "1.75",
            maxWidth: "480px",
            marginBottom: "48px",
          }}
        >
          We&apos;d love to hear from you. Reach out to our team for general
          inquiries, or business opportunities — we&apos;re here to help.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#fff",
              color: "#018001",
              padding: "16px 32px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 0 0 0 rgba(255,255,255,0)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#fff";
              el.style.boxShadow = "inset 0 0 0 2px rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#fff";
              el.style.color = "#018001";
              el.style.boxShadow = "0 0 0 0 rgba(255,255,255,0)";
            }}
          >
            Send a Message
            {/* Animated arrow */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
