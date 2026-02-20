"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSendEmails } from "@/hooks/email";
import { useGetNews } from "@/hooks/news";
import { ArrowRight, Calendar, Search, User } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  author_id: number;
  featured_image: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  author_name: string;
  author_email: string;
  category?: string;
}

interface FormData {
  // username: string;
  email: string;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getImageUrl = (article: NewsArticle) =>
  article.featured_image || "/images/placeholder-news.jpg";

export default function News() {
  const { data } = useGetNews();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    // username: '',
    email: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: sendEmail, isPending } = useSendEmails();

  const handleSubmit = () => {
    sendEmail(formData, {
      onSuccess: () => {
        setFormData({ email: "" });
        setSubmitted(true);

        console.log("Form cleared successfully!");
      },
      onError: (error) => {
        console.error("Keep the data, something went wrong:", error);
      },
    });
  };

  const newsData = useMemo(
    () =>
      (data ?? []).map((item: any) => ({
        ...item,
        featured_image: item.featured_image
          ? `https://cms.networkeandp.com${item.featured_image}`
          : null,
      })) as NewsArticle[],
    [data],
  );

  const publishedArticles = useMemo(
    () => newsData.filter((a) => a.status === "published"),
    [newsData],
  );

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          publishedArticles
            .map((a) => a.category)
            .filter((cat): cat is string => !!cat),
        ),
      ),
    ],
    [publishedArticles],
  );

  const filteredNews = useMemo(
    () =>
      publishedArticles.filter((article) => {
        const matchesCategory =
          selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch =
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [publishedArticles, selectedCategory, searchTerm],
  );

  const featuredNews = filteredNews[0];

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
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 text-black pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none"
              />
            </div>
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
      {featuredNews && (
        <section className="py-12 container mx-auto px-4">
          <Link href={`/news/${featuredNews.id}`} prefetch>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-96 md:h-auto overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={getImageUrl(featuredNews)}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-[#fe0000] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    Featured
                  </span>
                  <div className="flex items-center text-gray-500 mb-4 flex-wrap gap-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {formatDate(featuredNews.created_at)}
                      </span>
                    </div>
                    {featuredNews.category && (
                      <>
                        <span className="mx-1">•</span>
                        <span className="text-sm">{featuredNews.category}</span>
                      </>
                    )}
                    <span className="mx-1">•</span>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {featuredNews.author_name}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#0000fe] font-semibold text-lg"
                  >
                    Read Full Story <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </Link>
        </section>
      )}

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
            <Link key={article.id} href={`/news/${article.id}`} prefetch>
              <motion.article
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
                    src={getImageUrl(article)}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  {article.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0000fe] px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-3 flex-wrap gap-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {formatDate(article.created_at)}
                      </span>
                    </div>
                    <span className="mx-1">•</span>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm">{article.author_name}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#0000fe] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[#0000fe] font-semibold"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </div>
              </motion.article>
            </Link>
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
            {submitted ? (
              <p className="text-white flex items-center justify-center gap-2 text-lg font-medium">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                You&apos;re subscribed! Thanks for joining.
              </p>
            ) : (
              <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none"
                  onChange={handleChange}
                />
                <motion.button
                  whileHover={{ scale: isPending ? 1 : 1.05 }}
                  whileTap={{ scale: isPending ? 1 : 0.95 }}
                  disabled={isPending}
                  className="bg-[#fe0000] text-white px-8 py-4 rounded-lg font-semibold whitespace-nowrap flex items-center gap-2 disabled:opacity-70"
                  onClick={handleSubmit}
                >
                  {isPending ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="28"
                          strokeDashoffset="10"
                        />
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
