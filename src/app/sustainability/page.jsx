import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sustainability() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to NEPN. We are dedicated to building innovative solutions
              that make a difference.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to create exceptional experiences through
              technology and design.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
