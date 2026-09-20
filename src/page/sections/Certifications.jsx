import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="relative py-32 px-6 bg-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-300">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="group p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}