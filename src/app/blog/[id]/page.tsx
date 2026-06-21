"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Share2,
  BookOpen,
} from "lucide-react";
import { articles } from "@/data/articles";
import { Navbar } from "@/components/sections/Navbar";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { useParams, useRouter } from "next/navigation";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const article = articles.find((a) => a.id === id);

  const [readProgress, setReadProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const el = contentRef.current;
      const rect = el.getBoundingClientRect();
      const height = rect.height;
      const scrolled = Math.max(0, -rect.top);
      const total = height - window.innerHeight;

      if (total > 0) {
        setReadProgress(Math.min(100, (scrolled / total) * 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold">Article not found</h1>
        <button
          onClick={() => router.push("/")}
          className="text-primary underline mt-4"
        >
          Back to home
        </button>
      </div>
    );
  }

  const otherArticles = articles.filter((a) => a.id !== article.id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-muted">
        <motion.div
          className="h-full bg-linear-to-r from-primary to-accent"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Cover */}
      <div
        className={`relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-linear-to-br ${article.coverGradient} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold rounded-full uppercase tracking-widest">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs sm:text-sm">
                <Clock size={14} /> {article.readTime}
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs sm:text-sm">
                <Calendar size={14} /> {article.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        ref={contentRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div
              className="
              prose prose-sm sm:prose-base lg:prose-lg max-w-none
              prose-headings:text-foreground
              prose-h2:text-xl sm:prose-h2:text-2xl
              prose-h3:text-lg sm:prose-h3:text-xl
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-code:text-primary
              prose-pre:overflow-x-auto
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <BookOpen size={16} /> {article.readTime}
              </div>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
                className="flex items-center gap-2 px-4 py-2 glass border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Share2 size={14} /> Copy Link
              </button>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Progress */}
            <div className="glass p-5 rounded-2xl border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Reading Progress
                </span>
                <span className="text-xs font-bold text-primary">
                  {Math.round(readProgress)}%
                </span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-primary to-accent"
                  style={{ width: `${readProgress}%` }}
                />
              </div>
            </div>

            {/* Meta */}
            <div className="glass p-5 rounded-2xl border border-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                About This Article
              </h3>

              <div className="flex items-center gap-2 text-sm">
                <Tag size={14} className="text-primary" />
                <span>{article.category}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-primary" />
                <span className="text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar size={14} className="text-primary" />
                <span className="text-muted-foreground">{article.date}</span>
              </div>
            </div>

            {/* More */}
            <div className="glass p-5 rounded-2xl border border-border">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                More Articles
              </h3>

              <div className="space-y-4">
                {otherArticles.map((a) => (
                  <Link
                    key={a.id}
                    href={`/blog/${a.id}`}
                    className="block group"
                  >
                    <div
                      className={`h-1.5 w-10 rounded-full bg-linear-to-r ${a.coverGradient} mb-2 group-hover:w-full transition-all`}
                    />
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {a.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
