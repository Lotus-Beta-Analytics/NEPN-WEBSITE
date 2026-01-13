"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Who we are", href: "/who-we-are" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Operations", href: "/operations" },
  { name: "Partners", href: "/partners" },
  { name: "News & Insights", href: "/news" },
  { name: "Contact us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="NEPN Logo"
                width={167}
                height={56}
                className="h-12 lg:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop - Watch Video Button and Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-[#0000FE] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
              <span>WATCH VIDEO</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button and Watch Video button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2">
              <span>WATCH VIDEO</span>
              <svg
                width="16"
                height="10"
                viewBox="0 0 22 14"
                fill="none"
                className="w-4 h-2.5"
              >
                <path d="M0 0L22 7L0 14V0Z" fill="currentColor" />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Menu Overlay - 1/3 of page */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Menu Panel - Slide from right */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-full sm:w-2/3 lg:w-1/3 bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.7 }}
            >
              {/* Header */}
              <div className="flex-shrink-0 flex justify-between items-center py-6 px-12 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-gray-600 tracking-wider">
                  NAVIGATION MENU
                </h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Navigation Content */}
              <nav className="flex-1 overflow-y-auto">
                <div className="p-8 lg:p-12 space-y-6 lg:space-y-8">
                  {/* Links */}
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors leading-tight"
                  >
                    Home
                  </Link>
                  <Link
                    href="/who-we-are"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/sustainability"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/operations"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Operations
                  </Link>
                  <Link
                    href="/news"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    News
                  </Link>
                  <Link
                    href="/partners"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Partners
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
