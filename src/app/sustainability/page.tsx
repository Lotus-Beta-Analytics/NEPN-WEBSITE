"use client";

import { motion } from "motion/react";
import {
  Leaf,
  Shield,
  Heart,
  Recycle,
  Droplet,
  Wind,
  Factory,
  Users,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sustainability() {
  const ehsPillars = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safety First",
      description:
        "Zero-harm workplace culture with comprehensive safety training and protocols",
      stats: "0 LTI in 2025",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health & Wellbeing",
      description:
        "Comprehensive health programs for employees and host communities",
      stats: "10,000+ beneficiaries",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Environmental Protection",
      description: "Rigorous environmental management and monitoring systems",
      stats: "40% emission reduction",
    },
  ];

  const practices = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Waste Management",
      description:
        "Comprehensive waste reduction, recycling, and proper disposal programs across all facilities.",
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Water Conservation",
      description:
        "Advanced water treatment and recycling systems to minimize freshwater consumption.",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Air Quality",
      description:
        "Continuous monitoring and reduction of atmospheric emissions through modern technology.",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Clean Energy",
      description:
        "Investing in renewable energy sources and transitioning to cleaner operations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Impact",
      description:
        "Local employment, education, and infrastructure development programs.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Biodiversity",
      description:
        "Protection and restoration of natural habitats in operational areas.",
    },
  ];

  const commitments = [
    {
      year: "2026",
      milestone: "Complete environmental baseline studies",
      status: "In Progress",
    },
    {
      year: "2028",
      milestone: "Achieve ISO 14001 certification",
      status: "Planned",
    },
    {
      year: "2030",
      milestone: "50% reduction in carbon intensity",
      status: "Target",
    },
    {
      year: "2040",
      milestone: "Achieve net-zero operations",
      status: "Goal",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-green-700 to-green-900"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1659290541504-6db0bbd00d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Sustainability at <span className="text-[#0000fe]">NEPN</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Building a sustainable future through responsible operations and
              environmental stewardship
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Sustainability Statement */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Leaf className="w-10 h-10 text-green-600" />
          </div>

          <h2 className="text-4xl font-bold mb-6 text-black">
            Our Commitment to Sustainability
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            At NEPN, sustainability is more than a goal — it is a fundamental
            part of who we are and how we operate. We are deeply committed to
            responsible practices that promote long-term value for our
            stakeholders, our host communities, and the environment.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our sustainability framework is built on three pillars:
            environmental excellence, social responsibility, and economic
            viability. We believe that true success in the energy sector comes
            from balancing these elements to create lasting positive impact.
          </p>
        </motion.div>
      </section>

      {/* EHS Excellence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Environmental, Health, and Safety (EHS) Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our EHS program sets industry-leading standards for protection and
              performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ehsPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0000fe] to-[#4d4df9] rounded-2xl flex items-center justify-center text-white mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <div className="text-[#0000fe] text-2xl font-bold">
                  {pillar.stats}
                </div>
              </motion.div>
            ))}
          </div>

          {/* EHS Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Our EHS Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5M+", label: "Safe Work Hours" },
                { value: "100%", label: "Compliance Rate" },
                { value: "2,500+", label: "Staff Trained" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainable Practices Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Sustainable Practices for a Better Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementing innovative solutions across our operations to minimize
            environmental impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-transparent hover:border-green-400 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-green-600 mb-4 shadow-md">
                {practice.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                {practice.title}
              </h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
              alt="Solar panels generating renewable energy"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Renewable Energy</h3>
                <p>Investing in solar and wind power solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1645398709736-23bc4cb9ad89?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solar panels generating renewable energy"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Safety Standards</h3>
                <p>World-class safety protocols and training</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Our Sustainability Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clear milestones on our journey to net-zero emissions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0000fe] to-green-500" />

              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-3xl font-bold text-[#0000fe] mb-2">
                        {commitment.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-black">
                        {commitment.milestone}
                      </h3>
                      <span
                        className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                          commitment.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : commitment.status === "Planned"
                              ? "bg-yellow-100 text-yellow-800"
                              : commitment.status === "Target"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                        }`}
                      >
                        {commitment.status}
                      </span>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-[#0000fe] rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white mb-52">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Transparency & Accountability
            </h2>
            <p className="text-xl mb-8">
              We publish annual sustainability reports detailing our
              environmental performance, social initiatives, and governance
              practices. Download our latest report to learn more about our
              progress.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0000fe] px-8 py-4 rounded-lg font-semibold"
              >
                Download 2025 Report
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
              >
                View All Reports
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
