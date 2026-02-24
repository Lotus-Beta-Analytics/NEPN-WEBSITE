"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useGetNews } from "@/hooks/news";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

export interface NewsArticle {
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
  published_at: string;
  author_name: string;
  author_email: string;
  category?: string;
}

const formatDate = (dateString: any) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const calculateReadingTime = (content: any) => {
  const words = content.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
};

const getImageUrl = (article: any) =>
  article.featured_image || "/images/placeholder-news.jpg";

export default function NewsDetail({ id }: { id: string }) {
  // const params = useParams();
  const router = useRouter();
  const articleId = Number(id);
  const [copied, setCopied] = useState(false);

  const { data, isLoading } = useGetNews();

  const newsData = useMemo(
    () =>
      (data ?? []).map((item: any) => ({
        ...item,
        featured_image: item.featured_image
          ? `https://cms.networkeandp.com${item.featured_image}`
          : null,
      })),
    [data],
  );

  const article = useMemo(
    () =>
      newsData.find(
        (item: any) => item.id === articleId && item.status === "published",
      ) ?? null,
    [newsData, articleId],
  );

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return newsData
      .filter(
        (item: any) =>
          item.status === "published" &&
          item.id !== articleId &&
          item.category === article.category,
      )
      .slice(0, 3);
  }, [newsData, article, articleId]);

  const handleShare = useCallback(() => {
    if (navigator.share && navigator.canShare?.()) {
      navigator
        .share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        })
        .catch(() => {}); // user cancelled
    } else {
      // Fallback that works everywhere including Chrome desktop
      try {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        textArea.style.cssText = "position:fixed;left:-9999px;top:-9999px;";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Last resort if even that fails
        navigator.clipboard?.writeText(window.location.href).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-30 mb-10">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
            <div className="h-96 bg-gray-200 rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
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
              The article you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      <article className="py-20 mb-20 mt-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.push("/news")}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to News
            </motion.button>

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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {article.excerpt}
            </motion.p>

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
                {copied ? (
                  <>
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5" />
                    Share
                  </>
                )}
              </button>
            </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose text-black prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

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

      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50 mb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle: any, index: any) => (
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
