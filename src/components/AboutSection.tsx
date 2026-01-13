export default function AboutSection() {
  return (
    <section className="relative bg-nepn-navy overflow-hidden px-12">
      {/* Wave Top - Creates subtle S-curve with hero bottom wave */}
      {/* Wave Bottom - Creates subtle S-curve for next section */}

      {/* Content Area - Added padding to account for waves */}
      <div className="relative z-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
            <div className="px-8 py-3 relative z-10">
              <span className="relative text-gray-700 text-xl lg:text-2xl font-semibold">
                <span className="relative z-10">Wh</span>
                <span className="relative z-10">o we are</span>

                {/* small circle behind Su (optional subtle detail) */}
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#9a92920a]  z-0"></span>
              </span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/30 mx-4" />
            <span className="text-white text-lg lg:text-xl font-normal">
              Learn about our
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Large Text */}
            <div className="space-y-7">
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
                Welcome to Network E&P Nigeria Limited (NEPN), a fully
                Nigerian-owned oil and gas company dedicated to promoting
                sustainable energy solutions throughout Nigeria. Since our
                establishment, we have been at the forefront of exploring and
                developing the Qua Iboe field, playing a vital role in meeting
                the nations energy needs. We take pride in maintaining the
                highest standards of environmental stewardship and community
                engagement....
              </p>
              <button className="bg-[#0000FE] hover:bg-nepn-blue text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
