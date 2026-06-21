import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="w-[95%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m{" "}
            <span className="text-primary font-semibold">
              Murugamoorthy Parmilan
            </span>
            , a Software Engineer passionate about building scalable web and
            mobile applications with modern technologies. I enjoy transforming
            complex business requirements into intuitive, high-performance
            digital solutions while continuously learning and embracing new
            technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-6 font-serif">My Journey</h3>

            <div className="space-y-5 text-muted-foreground leading-8">
              <p>
                At <strong>Invicta Innovations</strong>, I progressed from
                Intern Software Engineer to Software Engineer, contributing to
                hotel management systems, admin platforms, and cross-platform
                mobile applications.
              </p>

              <p>
                I specialize in React, Next.js, TypeScript, React Native, and
                modern frontend development, building scalable, responsive
                applications with clean code and seamless API integration.
              </p>

              <p>
                I&apos;m passionate about learning new technologies, cloud
                computing, DevOps, and Artificial Intelligence while
                continuously improving my software engineering skills.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Layout,
                title: "Frontend",
                desc: "React, Next.js, TypeScript, Redux, React Query",
              },
              {
                icon: Database,
                title: "Backend",
                desc: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
              },
              {
                icon: Code2,
                title: "Mobile",
                desc: "React Native, Authentication, API Integration",
              },
              {
                icon: Terminal,
                title: "DevOps & Cloud",
                desc: "Docker, AWS EC2, Azure VM, Linux, Nginx",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon size={24} />
                </div>

                <h4 className="text-xl font-bold mb-2">{skill.title}</h4>

                <p className="text-sm text-muted-foreground leading-6">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
