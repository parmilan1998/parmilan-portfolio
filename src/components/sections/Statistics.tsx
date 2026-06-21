import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = end / (duration * 60);
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Awards Won", value: 10, suffix: "" },
];

export function Statistics() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#111827]/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-secondary/10 opacity-30" />

      <div className="w-[95%] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold font-serif mb-2 text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <CountUp end={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
