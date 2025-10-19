// import React from "react";
// import "./index.css"; // ensure Tailwind & font-lucida are loaded
// import ProfilePic from "./assets/PrincePic.jpg";

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col font-lucida">
//       {/* Header */}
//       <header className="bg-white">
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="flex flex-wrap items-center justify-between py-8">
//             {/* Logo */}
//             <div className="flex items-center gap-4">
//               <svg
//                 width="56"
//                 height="48"
//                 viewBox="0 0 56 48"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect width="56" height="48" rx="6" fill="#d7eef7" />
//                 <path
//                   d="M18 30c2-2 6-3 10-3s10 1 12 3"
//                   stroke="#0f5f8b"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <circle cx="40" cy="18" r="2" fill="#0f5f8b" />
//               </svg>
//               <div className="font-myriad">
//                 <div className="text-5xl font-bold text-[#0f5f8b]">
//                   PrinceTiwari
//                 </div>
//                 <div className="text-lg text-gray-800 font-semibold">
//                   Software Developer
//                 </div>
//               </div>
//             </div>

//             {/* Right side */}
//             <div className="flex items-center gap-4 mt-3 md:mt-0">
//               {/* Languages */}
//               <div className="hidden md:flex items-center gap-3 text-sm">
//                 <a href="#" className="text-gray-600 hover:text-gray-800">
//                   English
//                 </a>
//               </div>

//               {/* Search */}
//               <div className="hidden md:flex items-center border border-gray-200 rounded">
//                 <input
//                   className="px-3 py-1 w-40 text-sm bg-transparent outline-none"
//                   placeholder="Search"
//                 />
//                 <button className="px-3 py-1 text-sm bg-[#0f5f8b] text-white rounded-r">
//                   SEARCH
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="border-t border-b border-gray-200 overflow-x-auto">
//             <ul className="flex gap-6 text-sm py-3 min-w-max">
//               <li>
//                 <a className="text-[#0f5f8b]" href="#">
//                   Welcome
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-600" href="#">
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-600" href="#">
//                   Experience
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-600" href="#">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-600" href="#">
//                   Certificates
//                 </a>
//               </li>
//               <li>
//                 <a className="text-gray-600" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Welcome Section Start*/}
//       <section className="back text-white border-b-2 border-b-white border-t-2 border-t-black">
//         <div className="container mx-auto px-4 md:px-8 py-8">
//           <div className="flex flex-wrap items-start gap-5 md:gap-8">
//             {/* Image */}
//             <div className="flex-shrink-0">
//               <img src={ProfilePic} alt="author" className="w-12 h-12" />
//             </div>

//             {/* Statement + Name */}
//             <div className="flex-shrink-0 -ml-5">
//               <div className="font-semibold">Prince Tiwari</div>
//               <a href="#" className="block text-sm text-sky-200 underline mt-1">
//                 Software Developer
//               </a>
//             </div>

//             {/* Paragraph */}
//             <div className="flex-1">
//               <p className="text-sm text-sky-100 leading-relaxed">
//                 Software Development is evolving beyond coding and functionality
//                 — it’s about building intelligent, connected, and impactful
//                 digital experiences that transform how the world operates. But
//                 as technology advances, so do the threats surrounding it. That’s
//                 where Cybersecurity steps in, protecting every system, securing
//                 data integrity, and ensuring that innovation continues to grow
//                 in a safe and trusted digital world.
//               </p>
//             </div>

//             {/* Download */}
//             <div className="flex-shrink-0 text-right md:text-left">
//               <div className="inline-block bg-white/10 rounded px-4 py-3">
//                 <div className="text-sm">Download Resume</div>
//                 <div className="mt-2">
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 px-3 py-2 bg-[#2b9fb3] rounded text-white text-sm"
//                   >
//                     <svg width="16" height="16" viewBox="0 0 24 24">
//                       <path
//                         fill="currentColor"
//                         d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h6.66V9h3.84L12 2z"
//                       />
//                     </svg>
//                     <span>Resume 4.9.2</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 md:px-8 py-10 flex-1">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
//           {/* Left content */}
//           <div className="lg:col-span-2 space-y-4">
//             <h1 className="text-2xl font-bold font-myriad">
//               Hello, I'm Prince Tiwari
//             </h1>

//             <div className="space-y-2">
//               <p className="text-sm leading-loose mb-4">
//                 I am a highly motivated and technically proficient Full Stack
//                 Developer with a solid foundation in front-end and back-end
//                 development, responsive design, and database management. My
//                 experience in working with a wide range of development tools,
//                 frameworks, and technologies has equipped me with the skills
//                 necessary to design, build, and optimize dynamic web
//                 applications. I am eager to apply my skills in a
//                 forward-thinking company and contribute to a team focused on
//                 delivering high-quality, scalable solutions.
//               </p>

//               <h3 className="back text-white px-2 py-1 mt-6">About me</h3>
//               <ul className="list-disc grid grid-cols-2 ml-6 text-sm mt-2 leading-loose">
//                 <li>Birthday - Aug 31, 2004</li>
//                 <li>Phone Number - +91 7891922459</li>
//                 <li>Email - princetiwari.profes@gmail.com</li>
//                 <li>Address - Jaipur, Rajasthan</li>
//               </ul>

//               <h3 className="back text-white px-2 py-1 mt-6">Skills</h3>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   <strong>Programming & Scripting:</strong> Java, Python,
//                   JavaScript, C, HTML, CSS, SQL
//                 </li>
//                 <li>
//                   <strong>Frontend Tools:</strong> React.js, Tailwind CSS,
//                   Bootstrap, Django
//                 </li>
//                 <li>
//                   <strong>Backend & APIs:</strong> Node.js, Express.js, Django,
//                   REST APIs
//                 </li>
//                 <li>
//                   <strong>Databases:</strong> MySQL, MongoDB
//                 </li>
//                 <li>
//                   <strong>Application Analysis & Tools:</strong> Git, GitHub,
//                   Docker, AWS, VS Code, Postman
//                 </li>
//               </ul>

//               <h3 className="back text-white px-2 py-1 mt-6">Experience</h3>
//               <div className="mt-2 text-sm flex justify-between items-center">
//                 <div>
//                   <strong>Fullstack Web Development Intern</strong> - Unified
//                   Mentor (Remote)
//                 </div>
//                 <span className="text-xs text-gray-600">
//                   Apr 2025 – Jul 2025
//                 </span>
//               </div>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   {" "}
//                   Collaborated in an Agile team to build{" "}
//                   <strong>RESTful APIs</strong>, integrate frontend-backend
//                   components, and ensure seamless across the application
//                 </li>
//                 <li>
//                   Built <strong>authentication, CRUD operations</strong>, and
//                   optimized <strong>database</strong> queries, improving
//                   efficiency and maintainability of the codebase.
//                 </li>
//               </ul>

//               <div className="mt-2 text-sm flex justify-between items-center">
//                 <div>
//                   <strong> Industrial Training Intern</strong> -Cloud Counselage
//                   Pvt. Ltd. (Remote)
//                 </div>
//                 <span className="text-xs text-gray-600">
//                   May 2024 – Jun 2024
//                 </span>
//               </div>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   {" "}
//                   Collaborated in an Agile team to build{" "}
//                   <strong>RESTful APIs</strong>, integrate frontend-backend
//                   components, and ensure seamless across the application
//                 </li>
//                 <li>
//                   Built <strong>authentication, CRUD operations</strong>, and
//                   optimized <strong>database</strong> queries, improving
//                   efficiency and maintainability of the codebase.
//                 </li>
//               </ul>

//               {/* Project Section  */}
//               <h3 className="back text-white px-2 py-1 mt-6">Projects</h3>
//               <div className="mt-2 text-sm flex justify-between items-center">
//                 <div className="flex items-center">
//                   <strong className="mr-1">Rent Orbit</strong> |{" "}
//                   <p className="italic ml-1">
//                     React.js, Tailwind CSS, Axios, Cloudinary, Multer, MongoDB
//                   </p>
//                 </div>
//                 <span className="text-gray-600 text-xs">
//                   Feb 2025 – Mar 2025
//                 </span>
//               </div>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   {" "}
//                   A full-stack web application that connects{" "}
//                   <strong>Tenants with Landlords</strong> for room booking and
//                   property management.
//                 </li>
//               </ul>

//               <div className="mt-2 text-sm flex justify-between items-center">
//                 <div className="flex items-center">
//                   <strong className="mr-1">Resume Generator</strong> |{" "}
//                   <p className="italic ml-1">
//                     React.js, Tailwind CSS, axios, mongoDB, html2pdf.js
//                   </p>
//                 </div>
//                 <span className="text-gray-600 text-xs">
//                   Jan 2025 – Feb 2025
//                 </span>
//               </div>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   {" "}
//                   A resume builder web platform that allows users to generate
//                   professional, ATS-friendly with customizable sections.
//                 </li>
//               </ul>
//               <div className="mt-2 text-sm flex justify-between items-center">
//                 <div className="flex items-center">
//                   <strong className="mr-1"> Blood Donation Finder</strong> |{" "}
//                   <p className="italic ml-1">
//                     React.js, Tailwind CSS, lucide-react, axios
//                   </p>
//                 </div>
//                 <span className="text-gray-600 text-xs">
//                   Nov 2024 – Dec 2024
//                 </span>
//               </div>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2 leading-loose">
//                 <li>
//                   {" "}
//                   Built a platform to connect <strong>blood donors</strong> and
//                   recipients based on location and blood type
//                 </li>
//               </ul>

//               <h3 className="back text-white px-2 py-1 mt-6">What's next?</h3>
//               <ul className="list-disc ml-6 text-sm mt-2 space-y-2">
//                 <li>Learn more about the DeepaMehta concept.</li>
//                 <li>Download the DeepaMehta software.</li>
//                 <li>Installation is simple: unpack and run.</li>
//               </ul>

//               <div className="text-xs text-gray-500 mt-6">
//                 This page was last updated on February 2, 2019
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-6">
//             <div className="p-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="back text-white px-2 py-1 mt-6">Certificates</h3>
//               </div>
//               <div className="grid grid-cols-2 text-sm">
//                 <div className="mt-3">
//                   <div className="font-semibold">Java Essentials</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">Infosys</p>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-semibold">JavaScript</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">Infosys</p>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-semibold">Agile Project Management</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">HP Life</p>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-semibold">Postman API Fundamentals</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">Postman</p>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-semibold">Java Essentials</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">Infosys</p>
//                 </div>
//                 <div className="mt-3">
//                   <div className="font-semibold">Java Essentials</div>
//                   <div className="text-xs text-gray-500">May, 2024</div>
//                   <p className="text-sm text-gray-600 mt-1">Infosys</p>
//                 </div>
//                 <a className="mt-3 text-sm text-[#0f5f8b] underline" href="#">
//                   View all certificates
//                 </a>
//               </div>
//             </div>

//             <div className="p-4 border rounded text-sm">
//               <div className="font-semibold mb-2">Live Projects</div>
//               <div className="grid space-y-2">
//                 <a
//                   className="text-blue-600"
//                   href="https://rent-orbit.onrender.com/"
//                 >
//                   https://rent-orbit.onrender.com/
//                 </a>
//                 <a
//                   className="text-blue-600"
//                   href="https://rent-orbit.onrender.com/"
//                 >
//                   https://rent-orbit.onrender.com/
//                 </a>
//               </div>
//               <div className="mt-3">
//                 <a
//                   href="#"
//                   className="inline-block text-sm text-[#0f5f8b] underline"
//                 >
//                   View More
//                 </a>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Top thin warning */}
//       <div className="w-full text-center text-xs py-1 bg-[#d61a1a] text-white border-b border-yellow-300">
//         For a detailed look at each section, please refer to their respective
//         navigation links.
//       </div>

//       {/* Welcome Section End  */}
//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-200">
//         <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-sm">&copy; Prince Tiwari</div>
//           <div className="text-sm mt-3 md:mt-0">
//             <a href="#" className="underline">
//               Go on Top
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }





import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-lucida">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
