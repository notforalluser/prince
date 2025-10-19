import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Rent Orbit",
    period: "Feb 2025 – Mar 2025",
    technologies: "React.js, Tailwind CSS, Axios, Cloudinary, Multer, MongoDB",
    description:
      "Rent Orbit is a full-stack platform that connects tenants and landlords for room booking and property management. It allows landlords to list rooms, and tenants to search, book, and manage their stay efficiently with real-time status updates.",
    benefits: [
      "Bridges the gap between tenants and landlords through a unified platform.",
      "Simplifies property management and booking verification.",
      "Promotes transparency and trust in rental agreements.",
    ],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/rentorbit-sample.png",
    diagram:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/rentorbit-diagram.png",
    liveLink: "https://rent-orbit.onrender.com/",
  },
  {
    id: 2,
    name: "Resume Generator",
    period: "Jan 2025 – Feb 2025",
    technologies: "React.js, Tailwind CSS, Axios, MongoDB, html2pdf.js",
    description:
      "A web application that helps users create ATS-friendly professional resumes with customizable sections. Data is stored in MongoDB and resumes can be downloaded as PDFs.",
    benefits: [
      "Empowers users to create professional resumes quickly.",
      "Enables recruiters to get structured, ATS-friendly data.",
      "Supports easy sharing via unique generated IDs.",
    ],
    image: "",
    diagram: "",
    liveLink: "https://resume-generator-1-ag1w.onrender.com/",
  },
  {
    id: 3,
    name: "Blood Donation Finder",
    period: "Nov 2024 – Dec 2024",
    technologies: "React.js, Tailwind CSS, lucide-react, Axios",
    description:
      "A platform built to connect blood donors and recipients based on their location and blood type. The system ensures faster emergency response and improved blood availability.",
    benefits: [
      "Saves lives by reducing blood shortage response time.",
      "Encourages community participation in blood donation.",
      "Provides a verified and transparent donor-recipient network.",
    ],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/bloodfinder-sample.png",
    diagram:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/bloodfinder-diagram.png",
    liveLink: "",
  },
  {
    id: 4,
    name: "Chatting Website",
    period: "Nov 2024 – Dec 2024",
    technologies: "React.js, Tailwind CSS, lucide-react, Axios",
    description:
      "A platform that enables real-time chat between users, with features like group chats, file sharing, and message notifications.",
    benefits: [
      "Facilitates seamless communication between users.",
      "Enhances collaboration through group chat features.",
      "Ensures privacy and security in user interactions.",
    ],
    image:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/chatapp-sample.png",
    diagram:
      "https://res.cloudinary.com/demo/image/upload/v1730000000/chatapp-diagram.png",
    liveLink: "",
  },
];

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <>
      <div className="back border-b-2 border-b-white border-t-2 border-t-black h-5 md:h-8 w-full"></div>
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad">Projects</h1>

            <div className="space-y-1 font-lucida">
              <div className="flex flex-wrap gap-4 mb-4">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`px-3 py-[2px] transition-all duration-300 font-myriad text-md ${
                      activeProject.id === project.id
                        ? "back text-white shadow-md"
                        : "text-gray-700 border hover:bg-blue-100"
                    }`}
                  >
                    {project.name}
                  </button>
                ))}
              </div>

              {/* <div className="w-full border-b border-gray-200 "></div> */}

              <div className="font-Lucida text-sm">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold font-myriad">
                        {activeProject.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {activeProject.period}
                      </p>
                    </div>
                    <p className="text-gray-700 font-lucida text-sm">
                      {activeProject.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Technologies Used:
                      </h4>
                      <p className="text-gray-600">
                        {activeProject.technologies}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Benefits to Society:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {activeProject.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    {activeProject.liveLink && (
                      <div>
                        <a
                          href={activeProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 back text-white px-3 py-1 transition-all duration-300"
                        >
                          <span className="flex items-center gap-2">
                            Live Project
                            <ExternalLink className="w-4 h-4 inline-block" />
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-4 border rounded text-sm">
              <div className="text-lg font-semibold mb-2">Live Projects</div>
              <div className="grid space-y-2">
                Rent Orbit
                <a
                  className="text-[#1582bd]"
                  href="https://rent-orbit.onrender.com/"
                >
                  https://rent-orbit.onrender.com/
                </a>
              </div>
              <div className="grid space-y-2 mt-2">
                Resume Generator
                <a
                  className="text-[#1582bd]"
                  href="https://resume-generator-1-ag1w.onrender.com/"
                >
                  https://resume-generator-1-ag1w.onrender.com/
                </a>
              </div>
              <div className="grid space-y-2 mt-2">
                Blood Donation Finder
                <a
                  className="text-[#1582bd]"
                  href="https://resume-generator-1-ag1w.onrender.com/"
                >
                  https://example.onrender.com/
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {/* <section className="py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeProject.id === project.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-blue-100"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {activeProject.name}
              </h3>
              <p className="text-sm text-gray-500">{activeProject.period}</p>
            </div>

            <p className="text-gray-700">{activeProject.description}</p>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                🛠 Technologies Used:
              </h4>
              <p className="text-gray-600">{activeProject.technologies}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                🌍 Benefits to Society:
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {activeProject.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <a
              href={activeProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mt-4 transition-all duration-300"
            >
              Live Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <img
              src={activeProject.image}
              alt={`${activeProject.name} Preview`}
              className="rounded-xl shadow-md border"
            />
            <img
              src={activeProject.diagram}
              alt={`${activeProject.name} Diagram`}
              className="rounded-xl shadow-md border"
            />
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default ProjectSection;
