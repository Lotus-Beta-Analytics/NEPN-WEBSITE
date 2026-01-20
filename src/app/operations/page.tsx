"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Layers,
  Activity,
  TrendingUp,
  Zap,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Operations() {
  const operationalAreas = [
    {
      title: "Qua Iboe Field",
      location: "Akwa Ibom State",
      image:
        "https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Active Production",
      description:
        "Our flagship operation in the Qua Iboe field represents the cornerstone of NEPN's production activities.",
    },
    {
      title: "Processing Facilities",
      image:
        "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Operational",
      description:
        "State-of-the-art processing facilities ensuring efficient transformation of crude oil.",
    },
    {
      title: "Crude Evacuation Network",
      image:
        "https://images.unsplash.com/photo-1602860109210-b53229378ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      status: "Active",
      description:
        "Extensive pipeline network ensuring reliable delivery across Nigeria.",
    },
  ];

  const capabilities = [
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Exploration & Drilling",
      description:
        "3D seismic surveys, advanced drilling techniques, and reservoir management",
      metrics: ["2 active Wells", "95% success rate", "Max. Depth -11,785ft"],
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Production & Processing",
      description:
        "Efficient extraction, separation, and processing operations",
      metrics: [
        "20,000 barrel storage capacity",
        "99.5% uptime",
        "ISO certified",
      ],
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Real-time Monitoring",
      description: "24/7 SCADA systems and IoT-enabled remote monitoring",
      metrics: ["500+ sensors", "Live data feed", "AI analytics"],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Maintenance & Optimization",
      description: "Predictive maintenance and continuous improvement programs",
      metrics: ["Preventive care", "Zero downtime goal", "10-year lifecycle"],
    },
  ];

  const technologies = [
    {
      name: "Enhanced Oil Recovery (EOR)",
      description: "Advanced techniques to maximize resource extraction",
    },
    {
      name: "SCADA Systems",
      description:
        "Supervisory Control and Data Acquisition for real-time operations",
    },
    {
      name: "Digital Twin Technology",
      description: "Virtual replicas of physical assets for optimization",
    },
    {
      name: "AI-Powered Analytics",
      description: "Machine learning for predictive maintenance and efficiency",
    },
    {
      name: "Automated Safety Systems",
      description: "Emergency shutdown and response automation",
    },
    {
      name: "Environmental Monitoring",
      description: "Continuous tracking of emissions and environmental impact",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

        <div className="relative h-full flex items-center container mx-auto px-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white flex flex-col mx-auto place-items-center justify-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-[#0000fe]">Operations</span>
            </h1>
            <p className="text-xl mb-8">
              World-class facilities and cutting-edge technology powering
              Nigeria's energy sector
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0000fe] text-white px-8 py-4 rounded-lg font-semibold"
            >
              Explore Our Facilities
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-black">
            Operational Excellence
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            NEPN operates state-of-the-art facilities across Nigeria, leveraging
            advanced technology and best practices to ensure safe, efficient,
            and sustainable energy production.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50,000", label: "Barrels Per Day", unit: "bpd" },
            { value: "15", label: "Active Wells", unit: "wells" },
            { value: "1,200", label: "Pipeline Network", unit: "km" },
            { value: "99.5", label: "Operational Uptime", unit: "%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#0000fe] to-[#4d4df9] text-white p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.unit}</div>
              <div className="text-xs mt-2 opacity-75">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Operational Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Our Operational Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic locations, ensuring reliable hydrocarbon production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {operationalAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {area.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  {area.location && (
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{area.location}</span>
                    </div>
                  )}
                  <p className="text-gray-600 mb-4">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the oil and gas value chain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border-2 border-transparent hover:border-[#0000fe] transition-all"
            >
              <div className="w-16 h-16 bg-[#0000fe] rounded-xl flex items-center justify-center text-white mb-4">
                {capability.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
              <p className="text-gray-600 mb-4">{capability.description}</p>
              <div className="flex flex-wrap gap-2">
                {capability.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#0000fe] border border-[#0000fe]/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#00005A] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Leveraging cutting-edge solutions for operational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-sm opacity-80">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Safety & Compliance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Safety is our top priority. Every operation is conducted in strict
              adherence to international safety standards and Nigerian
              regulatory requirements.
            </p>
            <ul className="space-y-4">
              {[
                "ISO 45001 Occupational Health & Safety certified",
                "API 510, 570, and 653 compliance",
                "DPR (Department of Petroleum Resources) approved",
                "Regular third-party safety audits",
                "Comprehensive emergency response plans",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1653850406480-e4731f1ac3b2?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solar panels generating renewable energy"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">5M+</h3>
                <p>Safe Work Hours Without Lost Time Injury</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0000fe] to-[#4d4df9] text-white mb-64">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Visit Our Facilities</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a tour of our state-of-the-art operations and see
              firsthand how we're powering Nigeria's future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0000fe] px-8 py-4 rounded-lg font-semibold"
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
