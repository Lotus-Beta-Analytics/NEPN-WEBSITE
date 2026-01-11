export default function AboutSection() {
  return (
    <section className="relative bg-nepn-navy py-16 lg:py-24 overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-12 left-12 w-20 h-20 rounded-full bg-white/10 blur-xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <div className="bg-nepn-navy rounded-full px-6 py-2 border-2 border-white/20">
            <span className="text-white text-xl lg:text-2xl font-semibold">Who we are</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/30 mx-4" />
          <span className="text-white text-lg lg:text-xl font-normal">Learn about our</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Large Text */}
          <div className="space-y-4">
            <h2 className="text-6xl lg:text-[96px] font-semibold text-[#4d4df9] leading-none">
              History
            </h2>
            <h2 className="text-6xl lg:text-[96px] font-semibold text-[#4d4df9] leading-none">
              Mission
            </h2>
            <h2 className="text-6xl lg:text-[96px] font-semibold text-[#4d4df9] leading-none">
              Values
            </h2>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed lg:leading-[40px]">
              Welcome to Network E&P Nigeria Limited (NEPN), a fully Nigerian-owned oil and gas company dedicated to promoting sustainable energy solutions throughout Nigeria. Since our establishment, we have been at the forefront of exploring and developing the Qua Iboe field, playing a vital role in meeting the nation's energy needs. We take pride in maintaining the highest standards of environmental stewardship and community engagement....
            </p>
            <button className="bg-nepn-brightBlue hover:bg-nepn-blue text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120C240 40 480 40 720 80C960 120 1200 120 1440 80V0H0V120Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  )
}