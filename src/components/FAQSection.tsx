"use client";

import { useState } from "react";
import { useFAQ } from "@/hooks/faq";

/* const faqs = [
  {
    question: "What does NEPN do?",
    answer:
      "NEPN (Network Exploration & Production) is an energy company focused on the exploration, development, and production of oil and gas resources. We are committed to operational excellence, sustainability, and creating lasting value for our stakeholders",
  },
  {
    question: "Where does NEPN operate?",
    answer:
      "NEPN operates primarily in Nigeria, focusing on the Qua Iboe field in OML 13.",
  },
  {
    question:
      "How does NEPN ensure the safety of its employees and the environment?",
    answer:
      "We maintain the highest safety standards and environmental protocols across all our operations.",
  },
  {
    question:
      "What Corporate Social Responsibility (CSR) initiatives does NEPN engage in?",
    answer:
      "We engage in various community development programs and environmental initiatives.",
  },
  {
    question: "How does NEPN promote sustainability?",
    answer:
      "Through responsible practices, innovation, and commitment to environmental stewardship.",
  },
]; */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { data: faqData = [] } = useFAQ();
  const faqs = Array.isArray(faqData)
    ? faqData
        .map((faq: any) => ({
          question: faq?.question || faq?.title || "",
          answer: faq?.answer || faq?.description || "",
        }))
        .filter((faq) => faq.question && faq.answer)
    : [];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-12 flex flex-row justify-between place-items-center">
        <h2 className="text-5xl lg:text-[90px] font-semibold text-black leading-tight mb-8">
          General Questions
        </h2>

        {/* Badge */}
        <div className="py-3 relative z-10">
          <span className="relative text-gray-700 text-xl lg:text-2xl font-semibold">
            <span className="relative z-10">Fa</span>
            <span className="relative z-10">q</span>

            {/* small circle behind Su (optional subtle detail) */}
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#3d3d3d0a]  z-0"></span>
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-base lg:text-xl text-black/80 leading-relaxed lg:leading-[40px]">
                Our Frequently Asked Questions provide quick answers to common
                inquiries about our operations, partnerships, and more
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  index === openIndex
                    ? "bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 shadow-xl"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full px-6 lg:px-8 py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span
                    className={`text-lg lg:text-2xl font-semibold leading-tight transition-colors ${
                      index === openIndex
                        ? "text-white"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      index === openIndex ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={index === openIndex ? "white" : "currentColor"}
                      className={
                        index === openIndex
                          ? ""
                          : "text-gray-600 group-hover:text-blue-600"
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    index === openIndex
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-6 pt-2">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
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
