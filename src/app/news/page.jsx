"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import imgRectangle19 from "figma:asset/0ac18885e764afed24ee2ed856d289a03f0bc26a.png";
// import imgRectangle21 from "figma:asset/879db66d3dc24d26857dcc624349529cbfe08e51.png";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Company News",
    "Operations",
    "Sustainability",
    "Community",
    "Industry",
  ];

  const newsArticles = [
    {
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",

      title: "NEPN Achieves Major Milestone in Qua Iboe Field Development",
      date: "January 8, 2026",
      category: "Operations",
      excerpt:
        "Network E&P Nigeria Limited successfully completes Phase 2 of the Qua Iboe field expansion project, marking a significant milestone in our commitment to energy security.",
      content:
        "The expansion increases our production capacity by 30% and incorporates the latest in sustainable extraction technology.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",

      title: "Sustainable Energy Initiative Launched",
      date: "January 5, 2026",
      category: "Sustainability",
      excerpt:
        "NEPN unveils comprehensive sustainability program targeting net-zero emissions by 2040, setting new industry standards.",
      content:
        "Our multi-billion naira investment in renewable energy and carbon capture technology demonstrates our commitment to environmental stewardship.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "NEPN Partners with International Energy Leaders",
      date: "December 28, 2025",
      category: "Company News",
      excerpt:
        "Strategic partnership announced with leading global energy firms to enhance technological capabilities and expand operations.",
      content:
        "This partnership will bring cutting-edge technology and expertise to our Nigerian operations.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "Record Safety Performance Achieved in 2025",
      date: "December 20, 2025",
      category: "Operations",
      excerpt:
        "NEPN celebrates one full year without a Lost Time Injury (LTI), setting a new company record for workplace safety.",
      content:
        "5 million safe work hours completed, demonstrating our unwavering commitment to employee safety.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659290541504-6db0bbd00d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "Community Development Program Expands to 50 Villages",
      date: "December 15, 2025",
      category: "Community",
      excerpt:
        "NEPN's community investment program reaches milestone with expansion into 50 host communities across Akwa Ibom State.",
      content:
        "Programs include education scholarships, healthcare facilities, and infrastructure development.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1765048808260-9f48d96caf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "New Production Well Comes Online",
      date: "December 10, 2025",
      category: "Operations",
      excerpt:
        "Well QIB-16 successfully commissioned, adding 8,000 barrels per day to our production capacity.",
      content:
        "The well utilizes advanced drilling technology and environmental protection measures.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "NEPN Receives Environmental Excellence Award",
      date: "November 28, 2025",
      category: "Sustainability",
      excerpt:
        "National Environmental Standards and Regulations Enforcement Agency (NESREA) honors NEPN for outstanding environmental performance.",
      content:
        "Recognition for our comprehensive environmental management and zero-incident record.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602860109210-b53229378ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "Pipeline Integrity Program Completed",
      date: "November 15, 2025",
      category: "Operations",
      excerpt:
        "Comprehensive inspection and upgrade of 1,200km pipeline network completed ahead of schedule.",
      content:
        "Smart pigging technology and real-time monitoring systems ensure maximum safety and efficiency.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      title: "1000 Youth Trained in Technical Skills Program",
      date: "November 5, 2025",
      category: "Community",
      excerpt:
        "NEPN's youth empowerment initiative reaches milestone with 1,000 young Nigerians trained in oil and gas technical skills.",
      content: "80% of graduates have secured employment in the energy sector.",
    },
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles[0];

  return (
    <div className="bg-white">
      <Header />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-[#00005A] to-[#0000fe]"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              News & <span className="text-[#fe0000]">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Stay updated with the latest developments from NEPN
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 sticky top-[84px] z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#0000fe] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-96 md:h-auto overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block bg-[#fe0000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                Featured
              </span>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{featuredNews.date}</span>
                <span className="mx-3">•</span>
                <span className="text-sm">{featuredNews.category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                {featuredNews.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {featuredNews.excerpt}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[#0000fe] font-semibold text-lg"
              >
                Read Full Story <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-black">Latest Updates</h2>
          <p className="text-gray-600">
            {filteredNews.length}{" "}
            {filteredNews.length === 1 ? "article" : "articles"} found
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article, index) => (
            <motion.article
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0000fe] px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#0000fe] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#0000fe] font-semibold"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400 mb-4">No articles found</p>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#00005A] to-[#0000fe] text-white mb-48">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest news delivered
              directly to your inbox
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fe0000] text-white px-8 py-4 rounded-lg font-semibold whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
