export default function SustainabilitySection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-0 w-64 h-96 rounded-full bg-gray-200/30 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-gray-300/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-200/50 rounded-full px-8 py-3">
            <span className="text-gray-700 text-xl lg:text-2xl font-semibold">Sustainability</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl lg:text-[90px] font-semibold text-center mb-8 leading-tight">
          <span className="text-black">Sustainability at </span>
          <span className="text-nepn-blue">NEPN</span>
        </h2>

        {/* Description */}
        <p className="text-black/80 text-lg lg:text-xl text-center max-w-4xl mx-auto leading-relaxed lg:leading-[40px] mb-12">
          At NEPN, sustainability is more than a goal — it is a fundamental part of who we are and how we operate. We are deeply committed to responsible practices that promote long-term value for our stakeholders, our host communities, and the environment.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-nepn-brightBlue hover:bg-nepn-blue text-white px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            ABOUT OUR SUSTAINABILITY
          </button>
        </div>
      </div>
    </section>
  )
}