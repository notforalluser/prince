import React, { useState, useEffect, useRef } from "react";
import {
  Youtube,
  Linkedin,
  Github,
  Instagram,
  Code,
  Code2,
  Trophy,
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");
  const [animatedValues, setAnimatedValues] = useState({});

  const skillsData = {
    programming: [
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "Java", level: 80, color: "#007396" },
      { name: "C", level: 55, color: "#A8B9CC" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" },
      { name: "SQL", level: 85, color: "#4479A1" },
    ],
    frontend: [
      { name: "React.js", level: 88, color: "#61DAFB" },
      { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
      { name: "Bootstrap", level: 85, color: "#7952B3" },
    ],
    backend: [
      { name: "Node.js", level: 82, color: "#339933" },
      { name: "Express.js", level: 78, color: "#000000" },
      { name: "REST APIs", level: 80, color: "#FF6B6B" },
    ],
    databases: [
      { name: "MongoDB", level: 80, color: "#47A248" },
      { name: "MySQL", level: 75, color: "#4479A1" },
    ],
    tools: [
      { name: "Git/GitHub", level: 90, color: "#F05032" },
      { name: "Docker", level: 70, color: "#2496ED" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Postman", level: 85, color: "#FF6C37" },
    ],
    development: [
      { name: "SDLC", level: 85, color: "#8E44AD" },
      { name: "Debugging", level: 88, color: "#E74C3C" },
      { name: "Requirement Analysis", level: 82, color: "#27AE60" },
      { name: "Documentation", level: 90, color: "#3498DB" },
    ],
  };

  useEffect(() => {
    const currentSkills = skillsData[activeCategory];
    const newAnimatedValues = {};

    currentSkills.forEach((skill) => {
      newAnimatedValues[skill.name] = 0;
    });

    setAnimatedValues(newAnimatedValues);

    const timer = setTimeout(() => {
      const finalValues = {};
      currentSkills.forEach((skill) => {
        finalValues[skill.name] = skill.level;
      });
      setAnimatedValues(finalValues);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Radial progress component for main skills
  const RadialProgress = ({ skill, size = 100 }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (animatedValues[skill.name] / 100) * circumference;
    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={skill.color}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-800">
              {Math.round(animatedValues[skill.name] || 0)}%
            </span>
          </div>
        </div>
        <span className="mt-2 text-sm font-medium text-gray-700 text-center">
          {skill.name}
        </span>
      </div>
    );
  };

  // Progress bar component for list view
  const ProgressBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(animatedValues[skill.name] || 0)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${animatedValues[skill.name] || 0}%`,
            backgroundColor: skill.color,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="back border-b-2 border-b-white border-t-2 border-t-black h-5 md:h-8 w-full"></div>
      <main className="container mx-auto px-4 md:px-8 py-5 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold font-myriad">Skills</h1>

            <div className="space-y-2">
              <div className="">
                <div className="max-w-7xl mx-auto">
                  {/* Header */}
                  <div className="mb-6 font-Lucida text-sm">
                    <p>
                      A comprehensive overview of my technical expertise across
                      various domains including programming languages,
                      frameworks, tools, and development methodologies.
                    </p>
                  </div>

                  {/* Category Navigation */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {Object.keys(skillsData).map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                          activeCategory === category
                            ? "back text-white shadow-md transform scale-105"
                            : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Skills Display */}
                  <div className="p-6 md:p-8">
                    {/* Radial Charts for Desktop */}
                    <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                      {skillsData[activeCategory].map((skill) => (
                        <RadialProgress key={skill.name} skill={skill} />
                      ))}
                    </div>

                    {/* Progress Bars for Mobile */}
                    <div className="lg:hidden space-y-4">
                      {skillsData[activeCategory].map((skill) => (
                        <ProgressBar key={skill.name} skill={skill} />
                      ))}
                    </div>

                    {/* Skill Details */}
                    <div className="mt-7 md:mt-3">
                      <h3 className="font-semibold text-gray-800 mb-4">
                        {activeCategory.charAt(0).toUpperCase() +
                          activeCategory.slice(1)}{" "}
                        Skills Overview
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        {skillsData[activeCategory].map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: skill.color }}
                            ></div>
                            <span>{skill.name}</span>
                            <span className="font-medium ml-auto">
                              {skill.level}% Proficiency
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="leading-loose">
            {/* Social Links Section */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-gray-800 text-lg">
                Connect With Me
              </h3>

              <div className="flex flex-col space-y-4">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@CodingTutorial1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://www.youtube.com/@CodingTutorial1</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/princetiwari26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://www.linkedin.com/in/princetiwari26/</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/princetiwari26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://github.com/princetiwari26</span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/princetiwari_26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://leetcode.com/u/princetiwari_26/</span>
                </a>

                {/* CodeChef */}
                <a
                  href="https://www.codechef.com/users/princetiwari26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://www.codechef.com/users/princetiwari26</span>
                </a>

                {/* HackerRank */}
                <a
                  href="https://www.hackerrank.com/profile/princetiwari_pr1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://www.hackerrank.com/profile/princetiwari_pr1</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/princetiwari26__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-pink-600 transition"
                >
                  <div className="p-1 border-2 border-gray-300">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">https://www.instagram.com/princetiwari26__/</span>
                </a>
              </div>
            </div>

            {/* Existing Info Section */}
            <div className="text-sm text-gray-800">
              <div>
                <div className="font-semibold">Frontend Expertise</div>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Modern React development with responsive design using Tailwind
                  CSS and Bootstrap.
                </p>
              </div>

              <div className="mt-4">
                <div className="font-semibold">Backend & Databases</div>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Node.js with Express, MongoDB, MySQL, and REST API
                  development.
                </p>
              </div>

              <div className="mt-4">
                <div className="font-semibold">Development Tools</div>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Full SDLC experience with Git, Docker, AWS, and modern
                  development workflows.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
