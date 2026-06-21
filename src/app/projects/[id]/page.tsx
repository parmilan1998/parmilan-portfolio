"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  // Github,
  CheckCircle2,
  Tag,
  Calendar,
  Layers,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useParams, useRouter } from "next/navigation";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.push("/projects")}>
            View All Projects
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <main className="w-[95%] mx-auto px-6 -mt-32 relative z-10 pb-24">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-muted-foreground text-sm">
                · {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">
              {project.tagline}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {project.longDesc}
            </p>

            {/* Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 glass p-4 rounded-xl border border-border"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-foreground/90 leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="glass p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-bold mb-3 text-accent">
                  The Challenge
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border border-border">
                <h3 className="text-lg font-bold mb-3 text-primary">
                  The Solution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Project Image (additional view) */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* CTA Buttons */}
            <div className="glass p-6 rounded-2xl border border-border space-y-3">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 font-bold">
                  <ExternalLink size={16} /> View Live Demo
                </Button>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full border-border glass gap-2 font-semibold"
                >
                  <SiGithub size={16} />
                  View Source Code
                </Button>
              </a>
            </div>

            {/* Project Info */}
            <div className="glass p-6 rounded-2xl border border-border space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">
                Project Info
              </h3>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Year</p>
                  <p className="text-sm font-semibold">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Layers size={16} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Category</p>
                  <p className="text-sm font-semibold">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <Tag size={14} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold bg-muted/60 border border-border rounded-full text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div className="glass p-6 rounded-2xl border border-border">
              <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Related Projects
              </h3>
              <div className="space-y-3">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/projects/${rp.id}`}
                    className="flex items-center gap-3 group"
                  >
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      className="w-12 h-12 rounded-lg object-cover border border-border shrink-0"
                      width={100}
                      height={100}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors truncate">
                        {rp.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {rp.category}
                      </p>
                    </div>
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
