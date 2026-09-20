import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-300">
            About Me
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 text-lg text-gray-400 leading-relaxed border-l border-blue-400/30 pl-6"
        >
          <motion.p variants={itemVariants}>
            I'm a full stack developer currently studying Full Stack Development
            at the{" "}
            <span className="text-white">
              National Institute of Information Technology (NIIT)
            </span>{" "}
            in Lagos, Nigeria. I'm still in school and enjoy turning ideas into
            well-crafted web experiences that are fast, accessible, and reliable.
          </motion.p>
          <motion.p variants={itemVariants}>
            I care about clarity in code and communication, and I bring a calm,
            consistent approach to collaboration. I'm curious by nature, always
            learning, and I value the small details that make products feel
            polished.
          </motion.p>
          <motion.p variants={itemVariants}>
            Outside of tech, I love playing football and exploring new music.
            I'm a big fan of sports.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}