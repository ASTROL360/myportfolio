import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-300">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:agbajestephen5@gmail.com"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
            <Mail className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">agbajestephen5@gmail.com</div>
            </div>
          </a>

            <a
              href="tel:09014057707"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
            <Phone className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="font-medium">09014057707</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
            <MapPin className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">Lagos, Nigeria</div>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            <Linkedin className="text-blue-300" size={24} />
            <div>
              <div className="text-sm text-gray-500">LinkedIn</div>
              <div className="font-medium">Connect with me</div>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-white/10">
          <a
            href="https://github.com/Agbajestephen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:agbajestephen5@gmail.com"
            className="text-blue-300/80 hover:text-blue-200 transition-colors"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
