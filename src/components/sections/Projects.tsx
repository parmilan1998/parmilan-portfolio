import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = projects.slice(0, 3);

export function Projects() {
  const router = useRouter();

  return (
    <section id="projects" className="py-24 relative">
      <div className="w-[95%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected works that showcase my ability to solve complex problems
            with elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all flex flex-col"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10 mix-blend-overlay" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    fill
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent z-20" />
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <Link href={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted/60 rounded-full text-foreground/70 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full glass border-border gap-2"
                    >
                      <ExternalLink size={16} /> Live Demo
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
                      className="w-full glass border-border gap-2"
                    >
                      <SiGithub size={16} /> Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={() => router.push("/projects")}
            variant="ghost"
            className="gap-2 text-primary hover:text-primary hover:bg-primary/10 font-semibold"
          >
            View All {projects.length} Projects <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
