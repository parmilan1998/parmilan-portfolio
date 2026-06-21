import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiReactquery,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { SiReact } from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 92 },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: 95,
      },
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 88 },
      { name: "React Query", icon: SiReactquery, color: "#FF4154", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 88 },
      { name: "Express.js", icon: SiExpress, color: "#888888", level: 85 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 82 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 80 },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS EC2", icon: Cloud, color: "#FF9900", level: 75 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 82 },
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "GitHub", icon: SiGithub, color: "#181717", level: 90 },
    ],
  },
];

export function TechStack() {
  return (
    <section className="w-[95%] mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Tech Arsenal</h2>
        <p className="text-muted-foreground">
          Technologies I use to build scalable products
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {techStack.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl border border-border hover:border-primary/30 transition-all"
          >
            <h3 className="text-xl font-bold mb-6">{category.category}</h3>

            <div className="space-y-6">
              {category.items.map((tech, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <tech.icon size={20} style={{ color: tech.color }} />
                      <span className="font-semibold text-sm">{tech.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {tech.level}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      className="h-full bg-linear-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
