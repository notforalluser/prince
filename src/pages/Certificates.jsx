import React from "react";

const certificates = [
  {
    id: 1,
    title: "Java Essentials",
    organization: "Infosys",
    date: "May 2024",
    image: "https://i.postimg.cc/6pFvRjbQ/Java-Infosys-Springboard-Pre.png", // 🔁 Replace with actual certificate image URL
    description:
      "This certification validated my understanding of core Java programming concepts, object-oriented principles, and best practices in application development.",
    skills: [
      "Object-Oriented Programming (OOP) in Java",
      "Exception handling and multithreading",
      "Java Collections and Streams API",
      "Developing modular and reusable Java applications",
    ],
  },
  {
    id: 2,
    title: "JavaScript",
    organization: "HackerRank",
    date: "March 2024",
    image: "https://i.postimg.cc/Kv26JxwX/javascript.jpg",
    description:
      "Recognized for problem-solving and web programming proficiency using JavaScript, including ES6 syntax and DOM manipulation.",
    skills: [
      "ES6+ features and asynchronous programming",
      "DOM and event handling",
      "Problem-solving using modern JavaScript",
      "Understanding closures, scopes, and promises",
    ],
  },
  {
    id: 3,
    title: "Agile Project Management",
    organization: "HP Life",
    date: "January 2024",
    image: "https://i.postimg.cc/WbZyZ3nL/agile-Project-Management.jpg",
    description:
      "Completed professional training on Agile methodology and its real-world application in software development projects.",
    skills: [
      "Scrum framework and sprint planning",
      "Team collaboration and agile roles",
      "Iterative delivery and backlog management",
      "Adaptability to client feedback and project evolution",
    ],
  },
  {
    id: 4,
    title: "Postman API Fundamentals",
    organization: "Postman",
    date: "January 2024",
    image: "https://i.postimg.cc/gjFTtbzB/Postman-API.png",
    description:
      "Certified in REST API testing and automation using Postman, including collection management and environment variables.",
    skills: [
      "Creating and testing RESTful APIs",
      "Automating API workflows with scripts",
      "Using environment variables and collections",
      "API documentation and version control",
    ],
  },
];

function Certificates() {
  return (
    <>
      <div className="back border-b-2 border-b-white border-t-2 border-t-black h-5 md:h-8 w-full"></div>
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad">Certificates</h1>

            <div className="space-y-1 font-Lucida text-sm">
              <div>
                {certificates.map((cert, index) => (
                  <div key={index} className="p-6">
                    {/* Top Section: Image + Info */}
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={cert.image}
                          alt={`${cert.organization} Logo`}
                          className="h-20 border shadow-sm object-contain"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {cert.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            Issued by: {cert.organization}
                          </p>
                          <p className="text-sm text-gray-500">
                            Date: {cert.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        About Certificate
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Gained */}
                    <div className="pt-2">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Skills Gained
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {cert.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="back text-white px-2 py-1 mt-6">In short: All Certificates</h3>
              </div>
              <div className="text-sm">
                <div className="mt-3">
                  <div className="font-semibold">Java Essentials</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">JavaScript</div>
                </div>
                <div className="mt-3"></div>
                <div className="mt-3">
                  <div className="font-semibold">Agile Project Management</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Postman API Fundamentals</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Introduction of IOT</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Project Management</div>
                </div>
                <div className="mt-3">
                  <div className="font-semibold">Intellectual Property Rights & Compitation Law</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Certificates;
