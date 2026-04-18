import React from "react";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-16 border-t border-white/10 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold tracking-wide text-blue-300">
              Garba Mubaraq
            </div>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Full stack developer crafting clean, scalable, and reliable web
              applications with React, Node.js, and MongoDB.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-300 mb-4">
              Quick Links
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#projects" className="hover:text-blue-300 transition">
                Projects
              </a>
              <a href="#skills" className="hover:text-blue-300 transition">
                Tech Stack
              </a>
              <a href="#about" className="hover:text-blue-300 transition">
                About
              </a>
              <a href="#contact" className="hover:text-blue-300 transition">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-300 mb-4">
              Socials
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
              <a
                href="https://github.com/Garbatoyin360@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:garbatoyin360@gmail.com"
                className="hover:text-blue-300 transition"
              >
                Email
              </a>
              <a href="tel:09014057707" className="hover:text-blue-300 transition">
                Phone
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © 2026 Garba Mubaraq . All rights reserved. Built with React &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
