import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "from-[#FF9900]/20",
  },
  {
    title: "React Advanced Certification",
    issuer: "Meta",
    year: "2022",
    color: "from-[#61DAFB]/20",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google",
    year: "2021",
    color: "from-[#4285F4]/20",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2023",
    color: "from-[#326CE5]/20",
  },
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <section className="py-24 relative">
      <div className="w-[95%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className={`glass p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer bg-linear-to-br ${cert.color} to-transparent group`}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">
                  {cert.issuer}
                </span>
                <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-primary">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass max-w-lg w-full p-8 rounded-3xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Award size={40} className="text-primary" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-xl text-muted-foreground mb-6">
                  {selectedCert.issuer}
                </p>
                <div className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full font-mono text-primary mb-8">
                  Issued: {selectedCert.year}
                </div>
                <div className="h-40 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-muted-foreground">
                  Official Document Preview
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
