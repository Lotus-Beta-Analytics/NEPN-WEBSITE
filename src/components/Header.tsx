'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Who we are', href: '/who-we-are' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Operations', href: '/operations' },
  { name: 'Partners', href: '/partners' },
  { name: 'News & Insights', href: '/news' },
  { name: 'Contact us', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[84px]">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
              <span>WATCH VIDEO</span>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" className="w-5 h-3.5">
                <path d="M0 0L22 7L0 14V0Z" fill="currentColor"/>
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button and Watch Video button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2">
              <span>WATCH VIDEO</span>
              <svg width="16" height="10" viewBox="0 0 22 14" fill="none" className="w-4 h-2.5">
                <path d="M0 0L22 7L0 14V0Z" fill="currentColor"/>
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Menu Overlay - 1/3 of page */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-[100]"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel - 1/3 width on right */}
          <div className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-white z-[101] overflow-y-auto shadow-2xl">
            <div className="relative min-h-screen">
              {/* Header with Close Button */}
              <div className="absolute top-0 right-0 p-6 lg:p-8 z-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <svg 
                    className="h-8 w-8 lg:h-10 lg:w-10 text-gray-900" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Content */}
              <div className="px-6 lg:px-8 pt-24 lg:pt-32 pb-16">
                {/* Navigation Menu Label */}
                <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-widest mb-12 lg:mb-16 font-medium">
                  NAVIGATION MENU
                </p>

                {/* Navigation Links */}
                <nav className="space-y-4 lg:space-y-6">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-blue-600 hover:text-blue-700 transition-colors leading-tight"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/sustainability"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/operations"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Operations
                  </Link>
                  <Link
                    href="/news"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    News
                  </Link>
                  <Link
                    href="/partners"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Partners
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl lg:text-6xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}