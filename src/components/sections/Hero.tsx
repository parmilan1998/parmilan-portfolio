import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.png";
import Image from "next/image";

const roles = ["React Developer", "Frontend Developer", "Full Stack Developer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 dark:bg-primary/20 rounded-full filter blur-[100px] animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/15 dark:bg-secondary/20 rounded-full filter blur-[120px] animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full filter blur-[80px] animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "6s" }}
      />

      <div className="w-[95%] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit border border-primary/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground font-semibold">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Role Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 w-fit"
          >
            <span className="text-sm font-bold text-primary tracking-wide">
              Full Stack Developer
            </span>
          </motion.div> */}

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Building Digital <span className="text-gradient">Experiences</span>{" "}
            That Inspire.
          </h1>

          {/* <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Murugamoorthy <span className="text-primary">Parmilan</span>
          </h1> */}

          <div className="text-xl lg:text-2xl text-muted-foreground font-light h-[36px] flex items-center">
            I am a{" "}
            <span className="text-foreground font-semibold ml-2">{text}</span>
            <span className="text-primary animate-pulse ml-0.5 font-light">
              |
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Software Engineer specializing in building hotel management systems,
            admin dashboards, and cross-platform mobile applications using
            React, TypeScript, Node.js, and modern cloud infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] font-semibold"
              data-testid="button-view-projects"
            >
              View Projects <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-border hover:bg-primary/10 hover:border-primary/30 gap-2 font-semibold"
              data-testid="button-download-resume"
            >
              <Download size={18} /> Download Resume
            </Button>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              { Icon: FaGithub, label: "GitHub" },
              { Icon: FaLinkedin, label: "LinkedIn" },
              { Icon: FaXTwitter, label: "Twitter" },
            ].map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                data-testid={`link-social-${label.toLowerCase()}`}
                className="p-3 rounded-full glass border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-[420px] h-[420px] lg:w-[480px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/40 to-accent/30 blur-3xl animate-pulse" />
            <Image
              src={avatar}
              alt="Developer Avatar"
              data-testid="img-avatar"
              className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 dark:border-white/5 shadow-2xl glass p-2"
              fill
            />
            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 glass border border-primary/20 px-3 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="text-xs font-bold text-primary">5+ Years</span>
              <p className="text-xs text-muted-foreground">Experience</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 glass border border-accent/20 px-3 py-2 rounded-xl shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <span className="text-xs font-bold text-accent">50+</span>
              <p className="text-xs text-muted-foreground">Projects Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
