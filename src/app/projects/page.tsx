"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, Search } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category.split(" / ")[0]))),
];

export default function AllProjects() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory =
      activeCategory === "All" || p.category.startsWith(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="w-[95%] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A complete collection of my work — from side experiments to
              production systems serving thousands of users.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search projects..."
                className="pl-9 bg-muted/30 border-border"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="group glass rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all flex flex-col"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      fill
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-muted/60 rounded-full text-foreground/70 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-muted/60 rounded-full text-muted-foreground border border-border">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full glass border-border gap-1.5"
                      >
                        <ExternalLink size={14} /> Demo
                      </Button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full glass border-border gap-1.5"
                      >
                        <SiGithub size={14} /> Code
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">No projects match your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
