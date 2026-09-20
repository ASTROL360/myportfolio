import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-blue-400">
            GM
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-gray-300 hover:text-blue-300 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-blue-300 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}