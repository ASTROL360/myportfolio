import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ isVisible }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              Hello, I am
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Agbaje Stephen
            </h1>
            <h2 className="text-3xl md:text-4xl text-blue-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Building calm, reliable digital experiences that feel effortless to
              use. I blend thoughtful design with solid engineering to deliver
              products that scale.
            </p>
            <div className="flex flex-wrap gap-4">
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
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Agbajestephen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300/80 hover:text-blue-200 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300/80 hover:text-blue-200 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:agbajestephen5@gmail.com"
                className="text-blue-300/80 hover:text-blue-200 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                <img
                  src="/steve.jpg"
                  alt="Agbaje Stephen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-8 right-8 w-full h-full border border-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
