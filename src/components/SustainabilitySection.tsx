export default function SustainabilitySection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="absolute top-1/2 left-[-20] -translate-x-1/2 -translate-y-1/2 z-0">
        {/* Outer Circle */}
        <div className="w-[840px] h-[840px] rounded-full bg-[#2828280A] border-[#2828280A]"></div>

        {/* Inner Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[640px] h-[640px] rounded-full border-[#2828280A]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge with O shape behind */}
        <div className="flex justify-center mb-8 relative">
          {/* Big O Shape */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-gray-400/20 opacity-30 z-0" />

          <div className="px-8 py-3 relative z-10">
            <span className="relative text-gray-700 text-xl lg:text-2xl font-semibold">
              <span className="relative z-10">Su</span>
              <span className="relative z-10">stainability</span>

              {/* small circle behind Su (optional subtle detail) */}
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3d3d3d0a]  z-0"></span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl lg:text-[90px] font-semibold text-center mb-8 leading-tight">
          <span className="text-black">Sustainability at </span>
          <span className="text-nepn-blue">NEPN</span>
        </h2>

        {/* Description */}
        <p className="text-black/80 text-lg lg:text-xl text-center max-w-4xl mx-auto leading-relaxed lg:leading-[40px] mb-12">
          At NEPN, sustainability is more than a goal — it is a fundamental part
          of who we are and how we operate. We are deeply committed to
          responsible practices that promote long-term value for our
          stakeholders, our host communities, and the environment.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#0000FE] hover:bg-nepn-blue text-white px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            ABOUT OUR SUSTAINABILITY
          </button>
        </div>
      </div>
    </section>
  );
}
