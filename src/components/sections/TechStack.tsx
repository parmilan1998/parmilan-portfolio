import { techStack } from "@/data/techStack";
import { motion } from "framer-motion";

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
