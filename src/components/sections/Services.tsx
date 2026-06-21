import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Server,
  Paintbrush,
  Cloud,
  Brain,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Performant, accessible, and responsive web applications built with modern frameworks like React and Next.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences using React Native that feel native and fast.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    desc: "Scalable and secure microservices built with Node.js, Python, or Go.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    desc: "Intuitive user interfaces and engaging experiences designed with Figma.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "AWS and GCP infrastructure setup, CI/CD pipelines, and containerization with Docker.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Integrating OpenAI, Anthropic, and custom machine learning models into your products.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="w-[95%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
