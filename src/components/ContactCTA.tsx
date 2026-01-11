export default function ContactCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-r from-[#018001] to-[#065406] overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 lg:w-96 h-64 lg:h-96 rounded-full bg-[#018001] opacity-30 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl lg:text-[90px] font-semibold text-white leading-tight mb-8">
            Get in touch
          </h2>
          <p className="text-lg lg:text-xl text-white leading-relaxed lg:leading-[40px] mb-12">
            We'd love to hear from you. Reach out to our team for general inquiries, or business opportunities — we're here to help.
          </p>
          <button className="border-2 border-white text-white hover:bg-white hover:text-[#018001] px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg">
            SEND A MESSAGE
          </button>
        </div>
      </div>
    </section>
  )
}