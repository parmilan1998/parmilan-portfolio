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
  SiReact,
} from "react-icons/si";

export const techStack = [
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
