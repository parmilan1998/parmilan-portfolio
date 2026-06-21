import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  image: string | StaticImageData;
  tags: string[];
  demo: string;
  github: string;
  year: string;
  category: string;
  features: string[];
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "staybreez",
    title: "Staybreez",
    tagline: "Hotel Management System",
    desc: "Full-featured hotel management platform for reservations, restaurant, and housekeeping.",
    longDesc:
      "Staybreez is a production hotel management system covering end-to-end hotel operations including reservations, restaurant services, and housekeeping management with a scalable architecture.",
    image: project1,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
    year: "2025-2026",
    category: "Enterprise SaaS",
    features: [
      "Room reservation system",
      "Restaurant order management",
      "Housekeeping workflow tracking",
      "Admin dashboard with role control",
    ],
    challenge: "Handling multiple hotel operations in a single unified system.",
    solution:
      "Built modular architecture with reusable components and centralized state management.",
  },

  {
    id: "talkio-admin",
    title: "Talkio Admin Panel",
    tagline: "Internal Communication Dashboard",
    desc: "Admin system for managing users, groups, and organizations.",
    longDesc:
      "Talkio admin panel manages internal communication platform data including users, groups, and organization-level controls.",
    image: project2,
    tags: ["React", "Redux", "TypeScript", "Ant Design", "Node.js"],
    demo: "#",
    github: "#",
    year: "2025",
    category: "Admin Dashboard",
    features: [
      "User management system",
      "Group & organization control",
      "Admin analytics dashboard",
      "Bulk data handling",
    ],
    challenge: "Efficiently managing large-scale user and organization data.",
    solution: "Optimized tables with pagination and Redux state management.",
  },

  {
    id: "sgic-alumni",
    title: "SGIC Alumni App",
    tagline: "Alumni Networking Mobile App",
    desc: "Cross-platform mobile app for alumni networking and social interaction.",
    longDesc:
      "SGIC Alumni is a React Native mobile application enabling alumni to connect, share posts, and interact securely.",
    image: project3,
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT"],
    demo: "#",
    github: "#",
    year: "2025",
    category: "Mobile App",
    features: [
      "Authentication system",
      "Profile management",
      "Posts, likes, comments",
      "Social interaction features",
    ],
    challenge:
      "Building smooth mobile social interactions with secure authentication.",
    solution:
      "Implemented JWT-based auth and optimized API integration for React Native.",
  },

  {
    id: "serendipity",
    title: "Serendipity",
    tagline: "Hotel Reservation System (Production)",
    desc: "Live hotel booking platform with reservation management features.",
    longDesc:
      "Serendipity is a production hotel booking system where I contributed to maintaining and enhancing reservation features.",
    image: project1,
    tags: ["React", "TypeScript", "Node.js"],
    demo: "#",
    github: "#",
    year: "2024-2025",
    category: "Production System",
    features: [
      "Room reservation management",
      "Booking updates",
      "Customer handling",
    ],
    challenge: "Maintaining stability in a live production booking system.",
    solution:
      "Improved existing reservation logic and fixed critical bugs in booking flow.",
  },

  {
    id: "food-order-system",
    title: "Food Order System",
    tagline: "Restaurant Ordering Platform",
    desc: "Web-based food ordering system with menu and order management.",
    longDesc:
      "A restaurant ordering system with menu browsing, cart management, and order tracking functionality.",
    image: project2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    demo: "#",
    github: "#",
    year: "2024",
    category: "Web App",
    features: [
      "Menu browsing system",
      "Cart & checkout flow",
      "Order tracking",
    ],
    challenge: "Handling dynamic menu updates and order state consistency.",
    solution: "Implemented structured state management and API-driven updates.",
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Personal Developer Portfolio",
    desc: "Modern responsive portfolio showcasing projects and skills.",
    longDesc:
      "A fully responsive developer portfolio built with modern UI animations and component-driven architecture.",
    image: project3,
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "#",
    github: "#",
    year: "2026",
    category: "Personal Project",
    features: [
      "Animated UI with Framer Motion",
      "Responsive design",
      "Project showcase system",
    ],
    challenge: "Creating a visually appealing yet fast-loading portfolio.",
    solution: "Used optimized Next.js rendering with lightweight animations.",
  },
];
