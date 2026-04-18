import React from "react";

export default function About({ isVisible }) {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-300">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed border-l border-blue-400/30 pl-6">
            <p>
              I'm a full stack developer currently studying Full Stack Development
              at the{" "}
              <span className="text-white">
                National Institute of Information Technology (NIIT)
              </span>{" "}
              in Lagos, Nigeria. I’m still in school and enjoy turning ideas into well-crafted web
              experiences that are fast, accessible, and reliable.
            </p>
            <p>
              I care about clarity in code and communication, and I bring a calm,
              consistent approach to collaboration. I’m curious by nature, always
              learning, and I value the small details that make products feel
              polished.
            </p>
            <p>
              Outside of tech, I love playing football and exploring new music. I’m a big fan of sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
