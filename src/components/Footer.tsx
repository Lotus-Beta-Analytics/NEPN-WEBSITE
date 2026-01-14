import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-400">
      <div className="absolute top-[-120px] left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#111827"
            d="M0,224L48,208C96,192,192,160,288,144C384,128,480,128,576,128C672,128,768,128,864,149.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo-footer.png"
              alt="NEPN Logo"
              width={66}
              height={66}
              className="mb-6"
            />
            <p className="text-white/60 text-[15px] leading-relaxed mb-6">
              A leading indigenous oil and gas company, established in 2001. We
              are dedicated to responsibly harnessing Nigeria's energy
              resources, with a proven track record in exploring and developing
              the Qua Iboe field in OML 13.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/operations"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  News & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-white/60 hover:text-white text-[15px] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <h4 className="text-white text-base font-medium mb-6">
              Contact Information
            </h4>
            <div className="space-y-3 text-white/60 text-[15px] leading-relaxed">
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                080xxxxxxxxxx
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                network@networkeandp.com
              </p>
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>14 Ademola Street, Ikoyi, Lagos, Nigeria</span>
              </p>
              <p className="flex items-start gap-2 pl-6">
                Mobil Terminal Road, Ibeno, Akwa Ibom
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
                www.networkeandp.com
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-white text-base font-medium mb-4">
                Newsletter
              </h4>
              <p className="text-white/60 text-[15px] mb-4">
                Subscribe to our Newsletter & Event right now to be updated.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border border-white/60 rounded-[5px] px-4 py-2.5 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
                <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-[5px] transition-colors">
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="white">
                    <path d="M0 7.5L16 0L8 15L7 7.5H0Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="text-white text-base font-medium mb-4">
                Follow us
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    label: "Facebook",
                  },
                  {
                    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    label: "Twitter",
                  },
                  {
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    label: "Instagram",
                  },
                  {
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-white/60 text-[15px]">
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Site Map
            </Link>{" "}
            -{" "}
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of service
            </Link>{" "}
            -{" "}
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="text-white/40 text-sm mt-4">
            © {new Date().getFullYear()} Network E&P Nigeria Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
