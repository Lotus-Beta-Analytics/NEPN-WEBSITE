"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  category?: string; // Optional category field
}

interface NewsSectionProps {
  newsData?: NewsArticle[];
}

export default function NewsSection({ newsData = [] }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  // Filter only published articles and take first 4
  const publishedNews = newsData
    .filter((article) => article.status === "published")
    .slice(0, 4);

  // Auto-advance carousel
  useEffect(() => {
    if (publishedNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= publishedNews.length ? 0 : prev + itemsPerPage,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [publishedNews.length]);

  const totalPages = Math.ceil(publishedNews.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= publishedNews.length ? 0 : prev + itemsPerPage,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.floor((publishedNews.length - 1) / itemsPerPage) * itemsPerPage
        : prev - itemsPerPage,
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visibleItems = publishedNews.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get placeholder image if no featured_image
  const getImageUrl = (article: NewsArticle) => {
    return article.featured_image || "/images/placeholder-news.jpg";
  };

  if (publishedNews.length === 0) {
    return null; // Don't show section if no published news
  }

  return (
    <section className="py-16 lg:py-24 bg-white mb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl lg:text-[90px] font-semibold text-black leading-tight mb-8">
                News &<br />
                Insights
              </h2>
              <p className="text-base lg:text-lg text-black/80 leading-relaxed lg:leading-[40px] mb-8">
                Stay updated with the latest from NEPN — including company
                announcements, industry trends, project milestones, and thought
                leadership
              </p>

              {/* View All Button */}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors group mb-8"
              >
                VIEW ALL NEWS
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8h10M9 4l4 4-4 4"
                  />
                </svg>
              </Link>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white hover:bg-gray-100 p-4 rounded-full shadow-md transition-all hover:shadow-lg"
                  aria-label="Previous news"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-md transition-all hover:shadow-lg"
                  aria-label="Next news"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - News Cards Carousel */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {visibleItems.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-56 lg:h-64 overflow-hidden group">
                      <Image
                        src={getImageUrl(article)}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Category Badge */}
                      {article.category && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      {/* Date & Author */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                        <span>{formatDate(article.created_at)}</span>
                        <span>•</span>
                        <span>{article.author_name}</span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-semibold text-black mb-4 hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm lg:text-base text-black/70 leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors group">
                        READ MORE
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8h10M9 4l4 4-4 4"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "bg-blue-600 w-8 shadow-md"
                        : "bg-gray-300 w-3 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows - Mobile */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-md transition-all"
                aria-label="Previous news"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-md transition-all"
                aria-label="Next news"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
