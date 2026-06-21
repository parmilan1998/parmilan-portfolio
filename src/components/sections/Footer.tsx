import {
  ArrowUp,
  // Github, Linkedin, Twitter
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-3xl font-bold">
            &lt;Dev/<span className="text-primary">&gt;</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <a
              href="#about"
              className="hover:text-foreground transition-colors text-sm font-semibold"
            >
              About
            </a>
            <Link
              href="/projects"
              className="hover:text-foreground transition-colors text-sm font-semibold"
            >
              Projects
            </Link>
            <a
              href="#experience"
              className="hover:text-foreground transition-colors text-sm font-semibold"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors text-sm font-semibold"
            >
              Contact
            </a>
          </div>

          {/* <div className="flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dev. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
