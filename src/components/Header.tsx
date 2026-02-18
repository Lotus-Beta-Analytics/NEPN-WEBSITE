"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About Us" },
    { id: "/sustainability", label: "Sustainability" },
    { id: "/operations", label: "Operations" },
    { id: "/news", label: "News" },
    { id: "/partners", label: "Partners" },
    { id: "/contact", label: "Contact Us" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "68px",
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #f0f0f0",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="NEPN Logo"
            width={120}
            height={40}
            style={{ height: "36px", width: "auto" }}
            priority
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            alignItems: "flex-end",
          }}
        >
          <motion.span
            style={{
              display: "block",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
              // transformOrigin: "center",
              width: "24px",
            }}
          />
          <motion.span
            style={{
              display: "block",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
              width: "24px",
            }}
          />
          <motion.span
            style={{
              display: "block",
              height: "3px",
              backgroundColor: "#111",
              borderRadius: "2px",
              transformOrigin: "center",
              width: "24px",
            }}
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.15)",
                zIndex: 98,
              }}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.32,
                ease: [0.32, 0, 0.08, 1],
              }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(380px, 100vw)",
                backgroundColor: "#fff",
                zIndex: 99,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "80px 48px 48px",
                boxSizing: "border-box",
                borderLeft: "1px solid #f0f0f0",
              }}
            >
              {/* Close */}
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#111",
                  lineHeight: 1,
                  fontSize: "22px",
                }}
              >
                ✕
              </button>

              {/* Nav Links */}
              <nav
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.045,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.id}
                        onClick={closeMenu}
                        style={{
                          display: "block",
                          fontSize: "28px",
                          fontWeight: isActive ? "700" : "400",
                          color: isActive ? "#0000fe" : "#111",
                          textDecoration: "none",
                          padding: "10px 0",
                          borderBottom: "1px solid #f5f5f5",
                          transition: "color 0.15s ease",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive)
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "#0000fe";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive)
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "#111";
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer note */}
              <p
                style={{
                  marginTop: "40px",
                  fontSize: "11px",
                  color: "#bbb",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {/* NEPN © {new Date().getFullYear()} */}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
