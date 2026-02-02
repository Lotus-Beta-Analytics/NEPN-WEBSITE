"use client";

import { motion } from "motion/react";
import {
  Handshake,
  Globe,
  TrendingUp,
  Award,
  Users,
  Target,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Local Partners",
      description:
        "Collaborations with leading global energy companies bringing expertise and technology",
      count: "10+",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Local Contractors",
      description:
        "Nigerian businesses providing essential services and supporting local economy",
      count: "100+",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Technology Providers",
      description:
        "Cutting-edge solutions from world-class technology and equipment suppliers",
      count: "25+",
    },
  ];

  const partnershipBenefits = [
    {
      title: "Market Access",
      description:
        "Access to Nigeria's growing energy market and regional opportunities",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Technology Transfer",
      description:
        "Exchange of knowledge and advanced technological capabilities",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Shared Resources",
      description:
        "Collaborative approach to infrastructure and resource utilization",
      icon: <Handshake className="w-8 h-8" />,
    },
    {
      title: "Risk Mitigation",
      description:
        "Distributed risk through strategic partnerships and joint ventures",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  const partnerLogos = [
    { name: "NUPRC", sector: "Regulatory" },
    { name: "NMDPRA", sector: "Regulatory" },
    { name: "SEPLAT", sector: "Oil & Gas" },
    { name: "FMITI", sector: "Government" },
    { name: "Frontier Oil Ltd", sector: "Oil & Gas" },
    { name: "Universal Energy Resources Ltd", sector: "Energy" },
    { name: "Oando Qua Ibo Ltd", sector: "Oil & Gas" },
  ];

  const partnershipCriteria = [
    {
      title: "Alignment of Values",
      items: [
        "Commitment to sustainability and environmental responsibility",
        "Adherence to ethical business practices",
        "Focus on local community development",
      ],
    },
    {
      title: "Technical Capability",
      items: [
        "Proven expertise in oil and gas sector",
        "Access to advanced technology and innovation",
        "Strong track record of project delivery",
      ],
    },
    {
      title: "Financial Strength",
      items: [
        "Solid financial standing and stability",
        "Capacity for long-term investment",
        "Transparent financial practices",
      ],
    },
  ];

  const successStories = [
    {
      partner: "International Energy Solutions Ltd",
      project: "Qua Iboe Field Expansion",
      image:
        "https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      outcome:
        "30% increase in production capacity with 25% reduction in operational costs",
    },
    {
      partner: "Nigerian Engineering Consortium",
      project: "Pipeline Infrastructure Upgrade",
      image:
        "https://images.unsplash.com/photo-1602860109210-b53229378ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      outcome: "1,200km pipeline modernization creating 500 local jobs",
    },
    {
      partner: "Global Tech Systems",
      project: "Digital Transformation Initiative",
      image:
        "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      outcome:
        "Implementation of AI-powered monitoring reducing incidents by 45%",
    },
  ];

  const router = useRouter();

  return (
    <div className="bg-white">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#00005A] to-[#0000fe]"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative h-full flex items-center py-8 mt-8 justify-center text-center text-white px-4">
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Handshake className="w-12 h-12" />
            </motion.div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Our <span className="text-[#fe0000]">Partners</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Building strong alliances to drive innovation and sustainable
              growth in Nigeria&apos;s energy sector
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Partnership Overview */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-black">
            Partnership Ecosystem
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At NEPN, we believe in the power of collaboration. Our diverse
            network of partners enables us to leverage global expertise,
            cutting-edge technology, and local knowledge to deliver exceptional
            results in the Nigerian energy sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-transparent hover:border-[#0000fe] transition-all"
            >
              <div className="w-20 h-20 bg-[#0000fe] rounded-2xl flex items-center justify-center text-white mb-6">
                {type.icon}
              </div>
              <div className="text-4xl font-bold text-[#0000fe] mb-2">
                {type.count}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black">
                {type.title}
              </h3>
              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Why Partner with NEPN
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic advantages of collaborating with Nigeria&apos;s leading
              indigenous energy company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-[#0000fe]/10 rounded-lg flex items-center justify-center text-[#0000fe] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Collaborating with world-class organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center justify-center h-32 group cursor-pointer"
            >
              <div className="text-2xl font-bold text-black  group-hover:text-[#0000fe] transition-colors mb-2">
                {partner.name}
              </div>
              <div className="text-xs text-gray-500">{partner.sector}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our collaborative ventures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={story.image}
                    alt={story.project}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#0000fe] font-semibold mb-2">
                    {story.partner}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {story.project}
                  </h3>
                  <p className="text-gray-600 text-sm">{story.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Criteria */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Partnership Criteria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What we look for in potential partners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partnershipCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#0000fe]">
                {criteria.title}
              </h3>
              <ul className="space-y-4">
                {criteria.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white mb-48">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join forces with NEPN to unlock new opportunities in
              Nigeria&apos;s dynamic energy sector. Let&apos;s create value
              together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0000fe] px-8 py-4 rounded-lg font-semibold"
                onClick={() => router.push("/contact")}
              >
                Partnership Inquiry
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
              >
                Download Partnership Guide
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
