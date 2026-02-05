import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight, Code2, Database, Server, Globe } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const skills = {
    backend: ['Java', 'Node.js', 'Express', 'RESTful APIs'],
    databases: ['MongoDB', 'MySQL', 'Firebase'],
    frontend: ['React', 'React Native', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    tools: ['Git', 'GitHub', 'VS Code', '3D Modeling & Animation'],
  };

  const projects = [
    {
      title: 'Sales & Inventory System',
      tech: ['Java', 'MySQL'],
      description: 'Comprehensive inventory management system for tracking products, sales, and stock levels with robust business logic and real-time analytics.',
      features: [
        'Product tracking and management',
        'Sales reporting and analytics',
        'Real-time stock monitoring',
        'Efficient record management system',
      ],
      github: 'https://github.com/Agbajestephen/Sales-Inventroy',
      liveDemo: '', // Add when deployed
      status: 'complete',
      type: 'backend',
    },
    {
      title: 'Chatify Messaging App',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      description: 'Real-time messaging application with secure authentication, live chat functionality, and scalable backend architecture.',
      features: [
        'Real-time messaging with WebSockets',
        'Secure user authentication system',
        'Responsive chat interface',
        'Live message updates and notifications',
      ],
      github: 'https://github.com/Agbajestephen/CHATIFY-APP',
      liveDemo: '', // Add when fixed
      status: 'debugging',
      type: 'fullstack',
    },
    {
      title: 'Notes Application',
      tech: ['Express', 'EJS', 'MongoDB', 'Google OAuth'],
      description: 'Full-stack notes management application with secure OAuth authentication and comprehensive CRUD operations.',
      features: [
        'Create and manage personal notes',
        'Google OAuth integration',
        'Secure user authentication',
        'Complete CRUD operations',
      ],
      github: '', // Add when uploaded
      liveDemo: '', // Add when deployed
      status: 'uploading',
      type: 'fullstack',
    },
    {
      title: 'Restaurant Website',
      tech: ['React', 'CSS'],
      description: 'Modern restaurant website featuring interactive design, responsive layout, and smooth user experience.',
      features: [
        'Fully responsive design',
        'Interactive menu showcase',
        'Modern UI/UX patterns',
        'Optimized performance',
      ],
      github: 'https://github.com/Agbajestephen/Resturant',
      liveDemo: '', // Add when deployed
      status: 'ready',
      type: 'frontend',
    },
  ];

  const certifications = [
    {
      title: 'AI Starter Kit',
      issuer: 'ALX',
      year: '2025',
    },
    {
      title: 'Master Mind Series - Full Stack Development',
      issuer: 'National Institute of Information Technology',
      year: '2025',
    },
  ];

  const getStatusInfo = (status) => {
    const statuses = {
      complete: { text: 'Complete', color: 'text-green-400 border-green-400' },
      debugging: { text: 'In Progress', color: 'text-yellow-400 border-yellow-400' },
      uploading: { text: 'Coming Soon', color: 'text-blue-400 border-blue-400' },
      ready: { text: 'Ready to Deploy', color: 'text-purple-400 border-purple-400' },
    };
    return statuses[status] || statuses.complete;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold">
              SA
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-gray-400 transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-gray-400 transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-gray-400 transition-colors">Skills</a>
              <a href="#projects" className="text-sm hover:text-gray-400 transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-gray-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <ArrowRight size={16} />
                  <span>Hello! I Am</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Agbaje Stephen
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-400 mb-6">
                Backend Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Specializing in <span className="text-white">Java</span>, <span className="text-white">Node.js</span>, and <span className="text-white">database architecture</span> with full-stack capabilities. Building scalable backend systems and modern web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="group px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 border border-white/30 font-medium rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Agbajestephen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:agbajestephen5@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Placeholder for profile image - Replace with your LinkedIn photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                  {/* Add your profile image here */}
                  <img 
                    src="/profile.jpg" 
                    alt="Agbaje Stephen" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-600">
                    AS
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 top-8 right-8 w-full h-full border border-white/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I'm a motivated software developer currently mastering Full Stack Development at the <span className="text-white">National Institute of Information Technology (NIIT)</span> in Lagos, Nigeria. My focus lies in building robust, scalable backend systems while maintaining the versatility to work across the full stack when needed.
              </p>
              <p>
                With expertise in <span className="text-white">Java</span> and <span className="text-white">Node.js</span>, I specialize in creating efficient backend architectures, designing database schemas, and developing RESTful APIs that power modern applications. I'm passionate about clean code, system design, and solving complex technical challenges.
              </p>
              <p>
                Beyond coding, I'm learning to play the saxophone and exploring 3D modeling and animation—creative pursuits that complement my technical work and keep my problem-solving skills sharp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Technical Skills
          </h2>

          <div className="grid gap-12">
            {/* Backend Skills */}
            <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-white" size={24} />
                <h3 className="text-2xl font-semibold">Backend Development</h3>
                <span className="text-sm text-gray-500">(Core Expertise)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className={`transition-all duration-1000 delay-100 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-white" size={24} />
                <h3 className="text-2xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.databases.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-white" size={24} />
                <h3 className="text-2xl font-semibold">Frontend Development</h3>
                <span className="text-sm text-gray-500">(Full-Stack Capability)</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-white" size={24} />
                <h3 className="text-2xl font-semibold">Tools & Other Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-md text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            A collection of my recent work showcasing backend development and full-stack capabilities.
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const statusInfo = getStatusInfo(project.status);
              return (
                <div
                  key={project.title}
                  className={`group transition-all duration-1000 ${
                    isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="text-sm text-gray-500">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className={`px-4 py-2 border rounded-md text-sm font-medium whitespace-nowrap ${statusInfo.color}`}>
                        {statusInfo.text}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-gray-400">
                            <span className="text-white mt-1.5 text-xs">▪</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/20 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-2 border border-white/30 rounded-md font-medium hover:bg-white/10 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-32 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/20 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:agbajestephen5@gmail.com"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/20 hover:border-white/20 transition-all duration-300"
            >
              <Mail className="text-white" size={24} />
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-medium">agbajestephen5@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:09014057707"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/20 hover:border-white/20 transition-all duration-300"
            >
              <Phone className="text-white" size={24} />
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium">09014057707</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl">
              <MapPin className="text-white" size={24} />
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium">Lagos, Nigeria</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/20 hover:border-white/20 transition-all duration-300"
            >
              <Linkedin className="text-white" size={24} />
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
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephen-agbaje-bb229a365/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:agbajestephen5@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Agbaje Stephen. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
