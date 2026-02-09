import React from "react";

export default function Skills({ isVisible, skillGroups }) {
  return (
    <section id="skills" className="relative py-32 px-6 bg-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-300">
          Technical Skills
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`transition-all duration-1000 ${
                isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md text-sm font-medium text-gray-300 hover:bg-blue-500/10 hover:border-blue-400/40 hover:text-blue-200 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
