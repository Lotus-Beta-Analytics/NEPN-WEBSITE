"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About Us" },
    { id: "/sustainability", label: "Sustainability" },
    { id: "/operations", label: "Operations" },
    { id: "/news", label: "News" },
    { id: "/partners", label: "Partners" },
    { id: "/contact", label: "Contact Us" },
  ];

  const handleNavigate = (page: string) => {
    router.push(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isMenuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white h-[70px] sm:h-[84px] z-50 shadow-md overflow-hidden"
      >
        <div className="container mx-auto px-8 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="NEPN Logo"
                  width={167}
                  height={56}
                  className="h-10 sm:h-12 lg:h-14 w-auto"
                />
              </Link>
            </div>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="size-[40px] sm:size-[48px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg
              className="w-[24px] h-[24px] sm:w-[29px] sm:h-[29px]"
              fill="none"
              viewBox="0 0 29 29"
            >
              <path
                d="M3.625 7.25h21.75M3.625 14.5h21.75M3.625 21.75h21.75"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-md  z-[99]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bg-white z-[100] w-full sm:w-[80vw] md:w-[40vw] lg:w-[40vw] h-full flex items-center justify-center sm:justify-end px-6 sm:pr-12 md:pr-16 lg:pr-20 overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 sm:top-8 right-6 sm:right-8 size-10 sm:size-12 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </motion.button>

              {/* Menu Items */}
              <div className="text-center sm:text-right w-full max-w-lg">
                {/* <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12 tracking-wider"
                >
                  NAVIGATION MENU
                </motion.p> */}

                <nav className="space-y-4 sm:space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: index * 0.1 },
                      }}
                      whileHover={{
                        x: -10,
                        transition: { duration: 0.2 },
                      }}
                      onClick={() => handleNavigate(item.id)}
                      className={`block px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold transition-colors ${
                        pathname === item.id
                          ? "text-[#0000fe]"
                          : "text-black hover:text-[#0000fe]"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
