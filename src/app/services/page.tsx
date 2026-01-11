import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
    },
    {
      title: 'Consulting',
      description: 'Expert guidance for your technology needs.',
      icon: '💼',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
