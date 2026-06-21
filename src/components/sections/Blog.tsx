import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Blog() {
  const router = useRouter();

  return (
    <section className="py-24 relative">
      <div className="w-[95%] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Writings</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Thoughts on software engineering and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="glass border-border gap-2 hover:border-primary/50 font-semibold"
              onClick={() => router.push("/")}
            >
              View All Posts <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-8 rounded-3xl border border-border hover:border-primary/40 transition-all cursor-pointer flex flex-col"
            >
              {/* Category color bar */}
              <div
                className={`h-1 w-12 rounded-full bg-linear-to-r ${article.coverGradient} mb-6 group-hover:w-full transition-all duration-500`}
              />

              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>

              <Link href={`/blog/${article.id}`}>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
              </Link>

              <p className="text-muted-foreground mb-8 flex-1 leading-relaxed text-sm">
                {article.excerpt}
              </p>

              <Link
                href={`/blog/${article.id}`}
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors"
              >
                Read Article{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
