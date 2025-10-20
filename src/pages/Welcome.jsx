import React from "react";
import ProfilePic from "../assets/PrincePic.jpg";

export default function Welcome() {
  return (
    <>
      {/* Welcome Section Start*/}
      <section className="back w-full text-white border-b-2 border-b-white border-t-2 border-t-black">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 lg:gap-8 items-center">
            {/* Image */}
            {/* <div className="flex-shrink-0 mb-3 sm:mb-0">
              <img
                src={ProfilePic}
                alt="author"
                className="w-20 h-20 sm:w-16 sm:h-16 lg:w-12 lg:h-12 object-cover"
              />
            </div> */}
            <div className="flex-shrink-0">
               <img src={ProfilePic} alt="author" className="h-20" />
             </div>

            {/* Statement + Name */}
            <div className="flex-shrink-0 text-center sm:text-left -ml-0">
              <div className="font-semibold">Prince Tiwari</div>
              <a href="#" className="block text-sm text-sky-200 underline mt-1">
                Software Developer
              </a>
            </div>

            {/* Paragraph */}
            <div className="flex-1 mt-4 sm:mt-0">
              <p className="text-sm text-sky-100 leading-relaxed text-center sm:text-left">
                Software Development is evolving beyond coding and functionality
                — it’s about building intelligent, connected, and impactful
                digital experiences that transform how the world operates. But
                as technology advances, so do the threats surrounding it. That’s
                where Cybersecurity steps in, protecting every system, securing
                data integrity, and ensuring that innovation continues to grow
                in a safe and trusted digital world.
              </p>
            </div>

            {/* Download */}
            <div className="flex-shrink-0 mt-4 sm:mt-0 sm:text-right text-center w-full sm:w-auto">
              <div className="inline-block bg-white/10 rounded px-4 py-3">
                <div className="text-sm">Download Resume</div>
                <div className="mt-2">
                  <a
                    href="PrinceTiwari_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-3 py-2 bg-[#2b9fb3] rounded text-white text-sm"
                  >
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M5 20h14v-2H5v2zm7-18v10l4-4h-3V4h-2v4H8l4 4V2z"
                    />
                  </svg>
                    <span>Resume 2.6.3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad text-center lg:text-left">
              Hello, I'm Prince Tiwari
            </h1>

            <div className="space-y-4">
              <p className="text-sm leading-loose mb-4 text-justify lg:text-left">
                I am a highly motivated and technically proficient Software
                Developer with a solid foundation in front-end and back-end
                development, responsive design, and database management. My
                experience in working with a wide range of development tools,
                frameworks, and technologies has equipped me with the skills
                necessary to design, build, and optimize dynamic web
                applications. I am eager to apply my skills in a
                forward-thinking company and contribute to a team focused on
                delivering high-quality, scalable solutions.
              </p>

              <h3 className="back text-white px-2 py-1">About me</h3>
              <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 ml-0 sm:ml-6 text-sm pl-4 mt-2 mb-5 leading-loose gap-2">
                <li>Birthday - Aug 31, 2004</li>
                <li>Phone Number - +91 7891922459</li>
                <li>Email - princetiwari.profes@gmail.com</li>
                <li>Address - Jaipur, Rajasthan</li>
              </ul>

              <h3 className="back text-white px-2 py-1">Skills</h3>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  <strong>Programming & Scripting:</strong> Java, Python,
                  JavaScript, C, HTML, CSS, SQL
                </li>
                <li>
                  <strong>Frontend Tools:</strong> React.js, Tailwind CSS,
                  Bootstrap, Django
                </li>
                <li>
                  <strong>Backend & APIs:</strong> Node.js, Express.js, Django,
                  REST APIs
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, MongoDB
                </li>
                <li>
                  <strong>Application Analysis & Tools:</strong> Git, GitHub,
                  Docker, AWS, VS Code, Postman
                </li>
              </ul>

              <h3 className="back text-white px-2 py-1">Experience</h3>

              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <strong>Fullstack Web Development Intern</strong> - Unified
                  Mentor (Remote)
                </div>
                <span className="text-xs text-gray-600 mt-2 sm:mt-0">
                  Apr 2025 – Jul 2025
                </span>
              </div>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  Collaborated in an Agile team to build{" "}
                  <strong>RESTful APIs</strong>, integrate frontend-backend
                  components, and ensure seamless across the application
                </li>
                <li>
                  Built <strong>authentication, CRUD operations</strong>, and
                  optimized <strong>database</strong> queries, improving
                  efficiency and maintainability of the codebase.
                </li>
              </ul>

              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <strong> Industrial Training Intern</strong> -Cloud Counselage
                  Pvt. Ltd. (Remote)
                </div>
                <span className="text-xs text-gray-600 mt-2 sm:mt-0">
                  May 2024 – Jun 2024
                </span>
              </div>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  Collaborated in an Agile team to build{" "}
                  <strong>RESTful APIs</strong>, integrate frontend-backend
                  components, and ensure seamless across the application
                </li>
                <li>
                  Built <strong>authentication, CRUD operations</strong>, and
                  optimized <strong>database</strong> queries, improving
                  efficiency and maintainability of the codebase.
                </li>
              </ul>

              {/* Project Section  */}
              <h3 className="back text-white px-2 py-1">Projects</h3>

              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center">
                  <strong className="mr-1">Rent Orbit</strong> |
                  <p className="italic ml-1">
                    React.js, Tailwind CSS, Axios, Cloudinary, Multer, MongoDB
                  </p>
                </div>
                <span className="text-gray-600 text-xs mt-2 sm:mt-0">
                  Feb 2025 – Mar 2025
                </span>
              </div>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  A full-stack web application that connects{" "}
                  <strong>Tenants with Landlords</strong> for room booking and
                  property management.
                </li>
              </ul>

              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center">
                  <strong className="mr-1">Resume Generator</strong> |
                  <p className="italic ml-1">
                    React.js, Tailwind CSS, axios, mongoDB, html2pdf.js
                  </p>
                </div>
                <span className="text-gray-600 text-xs mt-2 sm:mt-0">
                  Jan 2025 – Feb 2025
                </span>
              </div>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  A resume builder web platform that allows users to generate
                  professional, ATS-friendly with customizable sections.
                </li>
              </ul>

              <div className="mt-2 text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center">
                  <strong className="mr-1"> Blood Donation Finder</strong> |
                  <p className="italic ml-1">
                    React.js, Tailwind CSS, lucide-react, axios
                  </p>
                </div>
                <span className="text-gray-600 text-xs mt-2 sm:mt-0">
                  Nov 2024 – Dec 2024
                </span>
              </div>
              <ul className="list-disc ml-0 sm:ml-6 text-sm pl-4 mt-2 space-y-2 leading-loose">
                <li>
                  Built a platform to connect <strong>blood donors</strong> and
                  recipients based on location and blood type
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-2 order-last lg:order-last">
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="back text-white px-2 py-1">Certificates</h3>
              </div>
              <div className="grid grid-cols-2 text-sm gap-4">
                <div className="mt-3">
                  <div className="font-semibold">Java Essentials</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">Infosys</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">JavaScript</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">Infosys</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Agile Project Management</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">HP Life</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Postman API Fundamentals</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">Postman</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Java Essentials</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">Infosys</p>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Java Essentials</div>
                  <div className="text-xs text-gray-500">May, 2024</div>
                  <p className="text-sm text-gray-600 mt-1">Infosys</p>
                </div>
                <a className="mt-3 text-sm text-[#0f5f8b] underline" href="#">
                  View all certificates
                </a>
              </div>
            </div>

            <div className="p-4 border rounded text-sm">
              <div className="font-semibold mb-2">Live Projects</div>
              <div className="grid space-y-2">
                <a
                  className="text-blue-600 break-words"
                  href="https://rent-orbit.onrender.com/"
                >
                  https://rent-orbit.onrender.com/
                </a>
                <a
                  className="text-blue-600 break-words"
                  href="https://resume-generator-1-ag1w.onrender.com/"
                >
                  https://resume-generator-1-ag1w.onrender.com/
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="#"
                  className="inline-block text-sm text-[#0f5f8b] underline"
                >
                  View More
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <div className="w-full text-center text-xs py-1 bg-[#d61a1a] text-white border-b border-yellow-300">
        For a detailed look at each section, please refer to their respective
        navigation links.
      </div>
    </>
  );
}
