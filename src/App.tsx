import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  Phone,
} from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-r from-white via-gray-100 to-gray-200 text-black"
      } pt-32`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-48 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Profile Picture */}
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-2 border-gray-400 shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">
                  Shivam Shrivastava
                </h1>
                <h2 className="text-xl font-light text-gray-300">
                  Full Stack Developer
                </h2>
              </div>
            </div>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-400 hover:border-gray-600"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <div className="flex flex-wrap space-x-6 mt-4">
            <a
              href="https://github.com/Shivamshrivaastava"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <Github className="w-6 h-6 mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-shrivastava-3a161a22a"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
            </a>
            <a
              href="mailto:shivamshrivaastava@gmail.com"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <Mail className="w-6 h-6 mr-2" /> Email
            </a>
            <a
              href="tel:9589460598"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <Phone className="w-6 h-6 mr-2" /> 9589460598
            </a>
            <a
              href="./Shivamshrivastava-resume.pdf"
              download="ShivamShrivastava_Resume.pdf"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <FileText className="w-6 h-6 mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Brainwave",
              desc: "An AI-powered SaaS platform built with React and Tailwind CSS.",
              img: "https://camo.githubusercontent.com/dd221734ee0995cc134edc0064e622de6646f63c7fe2e13edcfac3cd499d6604/68747470733a2f2f692e6962622e636f2f4b716476386a312f496d6167652d66726f6d2e706e67",
              demo: "https://brainwaveco.netlify.app/",
              code: "https://github.com/Shivamshrivaastava/Brainwave",
            },
            {
              name: "Movix",
              desc: "A modern movie discovery platform with real-time search.",
              img: "https://modernmoviemovix.netlify.app/assets/movix-logo-CHqic-nB.svg",
              demo: "https://modernmoviemovix.netlify.app/",
              code: "https://github.com/Shivamshrivaastava/Movix",
            },
            {
              name: "Social Media Analytics",
              desc: "A social media analytics platform that allows users to monitor and analyze their social media presence.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZ5NQIStKXeR1Tl9rWzVFxtBMRFmwM9xT1A&s",
              demo: "https://radiant-crostata-11596d.netlify.app/",
              code: "https://github.com/Shivamshrivaastava/Solar-Stackers_016",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-400 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center text-blue-400 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
              },
              {
                title: "Backend",
                skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
              },
              {
                title: "Tools",
                skills: ["Git", "VS Code", "Postman", "Netlify"],
              },
              {
                title: "Other",
                skills: ["Problem Solving", "Team Collaboration", "UI/UX"],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="text-gray-400">
                  {section.skills.map((skill, i) => (
                    <li key={i} className="mb-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">
          © 2024 Shivam Shrivastava. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
