import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ValuesSection from '@/components/ValuesSection'
import SustainabilitySection from '@/components/SustainabilitySection'
import CTABanner from '@/components/CTABanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <SustainabilitySection />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
      <NewsSection />
      <Footer />
    </main>
  )
}