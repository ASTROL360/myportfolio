import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ isVisible, projects }) {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-300">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          A collection of my recent work showcasing full stack development and
          product-focused builds.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-1000 ${
                isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-blue-500/5 hover:border-blue-400/30 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-300/80 bg-blue-500/10 border border-blue-400/20 rounded-md px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm border-t border-white/10 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-200 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
