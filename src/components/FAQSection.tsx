'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What does NEPN do?',
    answer: 'NEPN (Network Exploration & Production) is an energy company focused on the exploration, development, and production of oil and gas resources. We are committed to operational excellence, sustainability, and creating lasting value for our stakeholders',
  },
  {
    question: 'Where does NEPN operate?',
    answer: 'NEPN operates primarily in Nigeria, focusing on the Qua Iboe field in OML 13.',
  },
  {
    question: 'How does NEPN ensure the safety of its employees and the environment?',
    answer: 'We maintain the highest safety standards and environmental protocols across all our operations.',
  },
  {
    question: 'What Corporate Social Responsibility (CSR) initiatives does NEPN engage in?',
    answer: 'We engage in various community development programs and environmental initiatives.',
  },
  {
    question: 'How does NEPN promote sustainability?',
    answer: 'Through responsible practices, innovation, and commitment to environmental stewardship.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl lg:text-[90px] font-semibold text-black leading-tight mb-8">
                General Questions
              </h2>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-200/50 rounded-full px-6 py-3 mb-6">
                <span className="text-gray-700 text-xl lg:text-2xl font-semibold">FAQS</span>
              </div>

              <p className="text-base lg:text-xl text-black/80 leading-relaxed lg:leading-[40px]">
                Our Frequently Asked Questions provide quick answers to common inquiries about our operations, partnerships, and more
              </p>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-[10px] overflow-hidden shadow-md transition-all ${
                  index === openIndex ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full px-6 lg:px-8 py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span
                    className={`text-xl lg:text-[28px] font-semibold leading-tight ${
                      index === openIndex ? 'text-white' : 'text-black'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {index === openIndex ? (
                      <svg width="25" height="16" viewBox="0 0 25 16" fill="white">
                        <path d="M12.5 0L25 16H0L12.5 0Z" />
                      </svg>
                    ) : (
                      <svg width="25" height="16" viewBox="0 0 25 16" fill="black">
                        <path d="M12.5 16L0 0H25L12.5 16Z" />
                      </svg>
                    )}
                  </div>
                </button>

                {index === openIndex && (
                  <div className="px-6 lg:px-8 pb-6">
                    <p className="text-base lg:text-lg text-white/80 leading-relaxed lg:leading-[40px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}