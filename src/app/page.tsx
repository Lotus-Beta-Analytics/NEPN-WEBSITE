"use client";

import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import CounterSection from "@/components/Counter";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValuesSection from "@/components/ValuesSection";
import { useGetNews } from "@/hooks/news";

export default function Home() {
  const { data } = useGetNews();

 const news = (data ?? []).map((item: any) => ({
    ...item,
    featured_image: item.featured_image
      ? `https://cms.networkeandp.com${item.featured_image}`
      : null,
  }));

  // console.log(news, "labubu");
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection
        mediaSrc="/videos/bg_video.mp4"
        mediaType="video"
        posterImage="/images/nepn.jpg"
      />
      <SustainabilitySection />
      <CTABanner />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
      <CounterSection />
      <NewsSection newsData={news} />
      <Footer />
    </main>
  );
}
