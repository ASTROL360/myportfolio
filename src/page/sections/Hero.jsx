import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        ></motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Hello, I am
            </motion.div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
            >
              Garba Mubaraq
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-3xl md:text-4xl text-blue-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Building calm, reliable digital experiences that feel effortless to
              use. I blend thoughtful design with solid engineering to deliver
              products that scale.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-blue-400/40 text-blue-200 font-medium rounded-md hover:bg-blue-500/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/ASTROL360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/garba-mubaraq-79152b368/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:garbatoyin360@gmail.com"
                className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                <img
                  src="/myself.jpg"
                  alt="Garba Mubaraq"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-6 right-4 w-full h-full border border-white/10 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}