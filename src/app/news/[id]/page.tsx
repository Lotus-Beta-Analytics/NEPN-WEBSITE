"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { data } from "@/data/news";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
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
  category?: string;
}

interface NewsDetailProps {
  newsData?: NewsArticle[];
}

export default function NewsDetail({ newsData = data }: NewsDetailProps) {
  const params = useParams();
  const router = useRouter();
  const articleId = Number(params.id);

  console.log(articleId, "chicken");

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the article by ID
    const foundArticle = newsData.find(
      (item) => item.id === articleId && item.status === "published",
    );

    if (foundArticle) {
      setArticle(foundArticle);

      // Get related articles (same category, different ID, max 3)
      const related = newsData
        .filter(
          (item) =>
            item.status === "published" &&
            item.id !== articleId &&
            item.category === foundArticle.category,
        )
        .slice(0, 3);

      setRelatedArticles(related);
    }

    setLoading(false);
  }, [articleId, newsData]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Calculate reading time (rough estimate: 200 words per minute)
  const calculateReadingTime = (content: string) => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Get image URL with fallback
  const getImageUrl = (article: NewsArticle) => {
    return article.featured_image || "/images/placeholder-news.jpg";
  };

  // Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-30 mb-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="h-96 bg-gray-200 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you`&apos;`re looking for doesn`&apos;`t exist or has
              been removed.
            </p>
            <button
              onClick={() => router.push("/news")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to News
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      {/* Article Header */}
      <article className="py-20 mb-20 mt-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.push("/news")}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to News
            </motion.button>

            {/* Category Badge */}
            {article.category && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {article.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {article.excerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200"
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{article.author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(article.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-black">
                  {calculateReadingTime(article.content)}
                </span>
              </div>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-12"
            >
              <Image
                src={getImageUrl(article)}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose text-black prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-50 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {article.author_name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {article.author_name}
                  </h3>
                  <p className="text-gray-600">Author</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.article
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => router.push(`/news/${relatedArticle.id}`)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={getImageUrl(relatedArticle)}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {formatDate(relatedArticle.created_at)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-black text-sm line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
