"use client";

import { useGetTestimonials } from "@/hooks/testimonials";

export default function Testimonials() {
  const {data, isLoading} = useGetTestimonials();

  console.log("jingher", data  )
  const testimonials = [
    {
      quote:
        "NEPN transformed our business with their innovative solutions. The team is professional and results-driven.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "Outstanding service and support. They truly understand our needs and deliver beyond expectations.",
      author: "Michael Chen",
      role: "Director, InnovateLabs",
      avatar: "MC",
    },
    {
      quote:
        "Working with NEPN has been a game-changer. Their expertise and dedication are unmatched.",
      author: "Emily Rodriguez",
      role: "Founder, StartupHub",
      avatar: "ER",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
