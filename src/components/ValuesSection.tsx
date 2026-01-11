import Image from 'next/image'

const values = [
  {
    letter: 'N',
    title: 'NET ZERO COMMITMMENT',
    description: 'We are dedicated to achieving net zero emissions, integrating sustainable practices across all our operations.',
  },
  {
    letter: 'E',
    title: 'EXCELLENCE IN OPERATIONS',
    description: 'We strive for operational excellence, leveraging advanced technologies and best practices to lead the industry.',
  },
  {
    letter: 'P',
    title: 'PARTENTERSHIPS FOR GROWTH',
    description: 'We build strategic partnerships to drive innovation, expand our portfolio, and enhance our impact.',
  },
  {
    letter: 'N',
    title: 'NUTURING COMMUNITIES',
    description: 'We prioritize community engagement and support, ensuring our operations contribute positively to local development.',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Worker Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden shadow-xl">
            <Image
              src="/images/worker-nepn.jpg"
              alt="NEPN Worker at facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Video Play Button */}
          <div className="hidden lg:flex justify-center">
            <button className="w-24 h-24 bg-nepn-red hover:bg-nepn-red/90 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
                <path d="M8 6L24 15L8 24V6Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Values Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow flex items-start gap-6"
            >
              {/* Letter Badge */}
              <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-nepn-red flex items-center justify-center">
                <span className="text-white text-3xl lg:text-[40px] font-semibold leading-none">
                  {value.letter}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-xs lg:text-sm text-black/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}