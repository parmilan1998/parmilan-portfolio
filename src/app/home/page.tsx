"use client";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Statistics } from "@/components/sections/Statistics";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <div className="noise-overlay" />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Statistics />
        <Testimonials />
        <Certificates />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
