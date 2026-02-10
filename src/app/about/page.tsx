"use client";

import { motion } from "motion/react";
import { Target, Eye, Award, TrendingUp, Users, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { useRouter } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards and transparency in all our operations.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We pursue operational excellence and continuous improvement in everything we do.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description:
        "We are committed to creating positive impacts in the communities where we operate.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We embrace innovative technologies and solutions to drive sustainable growth.",
    },
  ];

  const goals = [
    "Achieve zero flare by 2027",
    "Increase production capacity by 50% over the next 5 years",
    "Sustained investment in community development programs across all operational areas",
    "Maintain zero environmental incidents record",
    "Expand renewable energy portfolio to 25% by 2036",
  ];

  const router = useRouter();

  return (
    <div className="bg-white  overflow-hidden">
      {/* Hero Section */}
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-[#00005A] to-[#0000fe] flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-[#fe0000]">NEPN</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Leading Nigeria&apos;s energy sector with innovation,
            sustainability, and commitment to excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[58px] h-[58px] rounded-full bg-[#0000fe]/10 flex items-center justify-center">
              <Building className="w-6 h-6 text-[#0000fe]" />
            </div>
            <h2 className="text-4xl font-bold text-black">Who We Are</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Network E&P Nigeria Limited (NEPN) is a fully Nigerian-owned oil
              and gas company at the forefront of the nation&apos;s energy
              sector. Established with a vision to harness Nigeria&apos;s vast
              energy resources responsibly, we have grown to become a trusted
              name in exploration and production.
            </p>
            <p>
              Our operations are centered on the Qua Iboe field, where we employ
              cutting-edge technology and best practices to maximize efficiency
              while minimizing environmental impact. We are proud to be 100%
              indigenous, with a workforce that reflects the diversity and
              talent of Nigeria.
            </p>
            <p>
              At NEPN, we believe in the power of energy to transform lives and
              drive economic development. Our commitment goes beyond extraction
              – we are dedicated to creating lasting value for all our
              stakeholders, from investors and employees to the communities that
              host our operations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver integrated energy solutions focused on operational
              excellence, safety, and sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exploration & Production",
                description:
                  "Advanced seismic surveys and drilling operations in the Qua Iboe field, utilizing state-of-the-art technology for optimal resource recovery.",
                image: "images/nepn_landing_page.jpg",
              },
              {
                title: "Crude Processing",
                description:
                  "Efficient processing facilities that meet international standards, ensuring quality output and minimal environmental impact.",
                image: "images/nepn-image-three.jpg",
              },
              {
                title: "Crude Evacuation Network",
                description:
                  "Strategically positioned near the Qua Iboe Terminal, NEPN evacuates its crude through a shared evacuation network in partnership with two other oil producers",
                image: "images/nepn-one.jpg",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Growth Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-black">
              Sustainable Growth
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our growth strategy is built on three pillars: operational
              excellence, technological innovation, and environmental
              stewardship. We are committed to expanding our operations while
              reducing our carbon footprint.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through strategic investments in renewable energy, carbon capture
              technologies, and community development programs, we are
              positioning NEPN as a leader in the transition to a sustainable
              energy future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0000fe] text-white px-8 py-4 rounded-lg font-semibold"
              onClick={() => router.push("/operations")}
            >
              NEPN FACILITIES
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "100%", label: "Safety Focus" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#0000fe] to-[#4d4df9] text-white p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and shape our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#0000fe]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0000fe]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white p-12 rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To create sustainable value through safe, efficient, and
              responsible oil and gas operations while upholding the highest
              standards of environmental and community stewardship
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#fe0000] to-[#ff4444] text-white p-12 rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To deliver energy with excellence, innovation, and responsibility,
              powering Nigeria&apos;s growth today while enabling a sustainable
              future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Our Strategic Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ambitious targets driving our path to industry leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 px-8 md:px-20">
            {goals.map((goal, index) => {
              const isLast = index === goals.length - 1;
              const isOdd = goals.length % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`
        bg-white p-6 rounded-lg shadow-md flex items-start gap-4
        ${isLast && isOdd ? "md:col-span-2 md:mx-auto md:max-w-md" : ""}
      `}
                >
                  <div className="w-8 h-8 bg-[#0000fe] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{goal}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white mb-72">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of Nigeria&apos;s energy transformation. Explore career
              opportunities and partnership possibilities with NEPN.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0000fe] px-8 py-4 rounded-lg font-semibold"
              >
                Explore Careers
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/partners")}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
