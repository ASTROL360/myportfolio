import React, { useState, useEffect } from "react";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "CSS3", "Tailwind CSS", "Sass", "HTML5"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Java", "Spring Boot", "Express.js"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL", "Supabase", "Firebase"],
    },
    {
      title: "Mobile",
      items: ["React Native", "Flutter"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Netlify", "Vercel", "Docker", "GitHub Actions"],
    },
    {
      title: "Version Control",
      items: ["Git", "GitHub", "GitLab"],
    },
    {
      title: "Tools & Others",
      items: [
        "REST APIs",
        "VS Code",
        "Postman",
        "Figma",
        "IntelliJ",
        "Android Studio",
      ],
    },
  ];

  const projects = [
    {
      title: "Hospital Management",
      image: "/projects/hospital.svg",
      tech: ["Java", "MySQL"],
      description:
        "Developed a hospital management system to manage patient records, appointments, and hospital operations. Built using Java and SQL, with focus on efficient data handling and organized record management.",
      github: "https://github.com/ASTROL360/TrueMedix.git",
      // liveDemo: "https://inventory-company1.vercel.app",
    },
    {
      title: "Finance Application",
      image: "/projects/finance.svg",
      tech: ["React", "Node.js", "Firebase", "MongoDB"],
      description:
        "Real-time finance application for managing transactions and tracking financial data with a focus on user experience and data security.",
      github: "https://ASTROL360//Finance-APP-React.git",
      // liveDemo: "https://chatify8.vercel.app",
    },
    {
      title: "Student Attendance",
      image: "/projects/attendance.svg",
      tech: ["Java", "MYSQL"],
      description:
        "Built using java for the core logic and MYSQL for secure data presistence,the system replaces traditional pape-based registers with a reliable digital solution.",
      github: "https://github.com/Agbajestephen/Note-Project",
      // liveDemo: "", // Add when deployed
    },
    {
      title: "Restaurant Website",
      image: "/projects/restaurant.svg",
      tech: ["React", "Tailwind CSS"],
      description:
        "Modern restaurant website featuring interactive design, responsive layout, and smooth user experience.",
      github: "https://github.com/ASTROL360/Restaurant.git",
      // liveDemo: "https://goke-resturant.vercel.app",
    },
    {
      title: "Recipe App",
      image: "/projects/recipe.svg",
      tech: ["React Native", "Node.js", "PostgreSQL", "Expo"],
      description:
        "Cross-platform mobile recipe application to browse, search, save, and share recipes. Features user authentication with Clerk, category filters, favorites, and video tutorials, powered by an Express and PostgreSQL backend.",
      github: "https://github.com/ASTROL360/Recipe-App.git",
    },
    {
      title: "E-Commerce",
      image: "/projects/ecommerce.svg",
      tech: ["React", "Node.js", "Express", "React Native"],
      description:
        "Full-stack e-commerce platform with separate backend API, web frontend, and mobile app, including a fashion store API with Postman collection for testing and easy seeding.",
      github: "https://github.com/ASTROL360/E-commerce.git",
    },
  ];

  const certifications = [
    {
      title: "Master Mind Series - Full Stack Development",
      issuer: "National Institute of Information Technology (NIIT)",
      year: "In Progress",
    },
  ];


  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0.9))]">
      <NavBar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Certifications certifications={certifications} />
      <Contact />
      <Footer />
    </div>
  );
}
