import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechStart",
    content:
      "An absolute pleasure to work with. Delivered our complex web app ahead of schedule and the code quality is exceptional. The attention to detail in the UI is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Engineering Manager",
    content:
      "Brought deep technical expertise to our team. Architected a scalable backend that handled our 10x growth perfectly. A rare find who understands both deep systems and beautiful design.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Director",
    content:
      "Transformed our rough concepts into a polished, market-ready product. The communication was crystal clear throughout the entire development process.",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Founder at Innovate",
    content:
      "The best freelance developer I've hired. Period. Fast, reliable, and incredibly talented. Will definitely be working together again.",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    // Simple auto-scroll
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="w-[95%] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what others have to
            say.
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-6 cursor-grab active:cursor-grabbing">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
            >
              <div className="glass p-8 rounded-3xl border border-white/5 h-full flex flex-col">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-white/90 italic mb-8 flex-1 leading-relaxed">
                  &quot;{t.content}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
