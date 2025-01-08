import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Home,
  Phone,
  Moon,
  Sun,
  Phone as PhoneIcon,
  Smartphone,
  Database,
  Layout,
  Cpu,
  MessageCircle,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    { name: "Flutter", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "Git", level: 80 },
    { name: "Communication Skills", level: 95 },
    { name: "Teamwork", level: 90 },
    { name: "Problem Solving", level: 80 },
  ];

  const projects = [
    {
      title: "Go-Care",
      description:
        "Go Care your all-in-one solution for beauty and hair care. Say goodbye to long queues and searching for available salons. With Go Care, finding the perfect beauty artist or barber is effortless, all from the comfort of your home",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKEdU9GcIaQILX3SnwRPHLWXaubrhFH0Mrg&s",
      technologies: ["Flutter", "Firebase", "State Management"],
      source: "adwat",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.adwat.gocare",
    },
    {
      title: "Go-Care Businees",
      description:
        "Are you struggling to maintain bookings and efficiency in your beauty center or salon? Look no further than Go Care, the all-in-one application designed to streamline your daily operations and attract more clients. With its specialized control panel, Go Care simplifies the management of your beauty or barber center, salon, or spa, providing essential features tailored to your business needs.",
      image:
        "https://play-lh.googleusercontent.com/VxNZjxCZTbZ18Ikv9LzmXTX2bZsDtH9ZewNmk1voEA1zP1jpsarkOGG6QB3G951MbDo=w240-h480-rw",
      technologies: ["Flutter", "REST API", "Provider"],
      source: "adwat",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.adwat.gocarebusiness",
    },
    {
      title: "Bussiness Book ",
      description:
        "E-commerce and services application It has social services The application contains an infinite number of ads",
      image:
        "https://play-lh.googleusercontent.com/yOoSw89v8Rk65dU0cStsd_OqBq7jdAM4nG_9S8BjBVWdM8au1Pq8VX6SdOzdboLyKw=w240-h480-rw",
      technologies: ["Flutter", "Firebase", "Bloc"],
      source: "Freelance",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.elgendy.business_book",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      } transition-colors duration-200`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-sm z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="#home"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                } flex items-center gap-2`}
              >
                <Home size={18} /> Home
              </a>
              <a
                href="#skills"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                } flex items-center gap-2`}
              >
                <Code size={18} /> Skills
              </a>
              <a
                href="#projects"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                } flex items-center gap-2`}
              >
                <Layout size={18} /> Projects
              </a>
              <a
                href="#contact"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                } flex items-center gap-2`}
              >
                <MessageCircle size={18} /> Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <a
                href="#home"
                className={`block px-3 py-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </a>
              <a
                href="#skills"
                className={`block px-3 py-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              ></a>
              <a
                href="#projects"
                className={`block px-3 py-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 to-indigo-50"
        } pt-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl md:text-7xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            Hi, I'm <span className="text-blue-600">Abdalrahman Bakr</span>
          </h1>
          <p
            className={`text-xl md:text-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-8`}
          >
            Flutter Developer | Mobile App Specialist | UI/UX Enthusiast
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <div className="flex items-center justify-center mb-2">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Flutter
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Cross-platform Development
              </p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <div className="flex items-center justify-center mb-2">
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                UI/UX
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Beautiful Interfaces
              </p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <div className="flex items-center justify-center mb-2">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Backend
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                API Integration
              </p>
            </div>
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <div className="flex items-center justify-center mb-2">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                State Management
              </h3>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Clean Architecture
              </p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-blue-600"
              } px-8 py-3 rounded-full hover:bg-gray-50 transition duration-300 border border-blue-600`}
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-12`}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                } p-4 rounded-lg`}
              >
                <div className="flex justify-between mb-2">
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`h-2 rounded-full ${
                    darkMode ? "bg-gray-600" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-12`}
          >
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    {project.title}
                  </h3>
                  <h3
                    className={`text-xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    {project.source}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-green-600 hover:text-green-700 flex items-center gap-2 ${
                          darkMode ? "text-green-400 hover:text-green-300" : ""
                        }`}
                      >
                        Google Play <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl font-bold text-center ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-12`}
          >
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Feel free to reach out through any of these channels:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:abdalrahmanbakr.dev@gmail.com"
                  className={`flex items-center gap-3 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Mail size={24} /> abdalrahmanbakr.dev@gmail.com
                </a>
                <a
                  href="https://github.com/AbdulrahmaBakr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Github size={24} /> github.com/AbdulrahmaBakr
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-bakr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Linkedin size={24} /> linkedin.com/in/abdulrahman-bakr
                </a>
                <a
                  href="tel:+201550119297"
                  className={`flex items-center gap-3 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Phone size={24} /> +20 155 011 9297
                </a>
                <a
                  href="https://wa.me/201550119297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <MessageCircle size={24} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
