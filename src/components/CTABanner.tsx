export default function CTABanner() {
  return (
    <section className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Background Image with Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-white text-base lg:text-lg font-medium mb-4">
            Network E&P Nigeria Limited (NEPN)
          </p>
          <h2 className="text-4xl lg:text-6xl font-medium text-white mb-8 leading-tight">
            The Leading indigenous<br />
            oil and gas player
          </h2>
          <button className="bg-nepn-brightBlue hover:bg-nepn-blue text-white px-10 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            CONTAC US TODAY
          </button>
        </div>
      </div>
    </section>
  )
}