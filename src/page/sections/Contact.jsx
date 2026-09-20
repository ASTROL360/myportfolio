import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-300">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div variants={itemVariants}>
            <a
              href="mailto:garbatoyin360@gmail.com"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <Mail className="text-blue-300 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">garbatoyin360@gmail.com</div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="tel:09164794335"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <Phone className="text-blue-300 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium">09164794335</div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
              <MapPin className="text-blue-300" size={24} />
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium">Lagos, Nigeria</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/garba-mubaraq-79152b368/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              <Linkedin className="text-blue-300 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="text-sm text-gray-500">LinkedIn</div>
                <div className="font-medium">Connect with me</div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center gap-6 mt-12 pt-12 border-t border-white/10"
        >
          <a
            href="https://github.com/ASTROL360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/garba-mubaraq-79152b368/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:garbatoyin360@gmail.com"
            className="text-blue-300/80 hover:text-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}