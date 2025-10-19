import React from "react";
import UnifiedMentorLogo from "../assets/unified_mentor_logo.png";
import CloudCounselageLogo from "../assets/cloud_counselage_logo.png";
const experiences = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    company: "Unified Mentor",
    logo: UnifiedMentorLogo,
    period: "Apr 2025 - Jun 2025",
    description:
      "Worked on full-stack MERN applications, developing RESTful APIs, implementing secure authentication using JWT, and optimizing responsive UIs with Tailwind CSS for seamless user experience.",
    highlights: [
      "Built end-to-end web applications using the MERN stack.",
      "Designed and optimized reusable React components.",
      "Integrated backend APIs and handled authentication using JWT.",
    ],
  },
  {
    id: 2,
    title: "Industrial Training",
    company: "Cloud Counselage Pvt. Ltd.",
    logo: CloudCounselageLogo,
    period: "Jun 2024 - Jul 2024",
    description:
      "Underwent industrial training focused on real-world web development practices, working on modern UI frameworks and API integrations while understanding project deployment workflows.",
    highlights: [
      "Gained hands-on exposure to industry-grade development standards.",
      "Worked on responsive UI and backend integration tasks.",
      "Collaborated in a team-oriented development environment.",
    ],
  },
];

function Experience() {
  return (
    <>
      <div className="back border-b-2 border-b-white border-t-2 border-t-black h-5 md:h-8 w-full"></div>
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad">Experience</h1>

            <div className="space-y-2 font-Lucida text-sm">
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className=""
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="w-16 h-16 border shadow-sm object-contain"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {exp.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default Experience;
