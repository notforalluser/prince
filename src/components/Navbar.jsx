import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-[#0f5f8b] font-semibold" : "text-gray-600";

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <svg
              width="56"
              height="48"
              viewBox="0 0 56 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="48" rx="6" fill="#d7eef7" />
              <path
                d="M18 30c2-2 6-3 10-3s10 1 12 3"
                stroke="#0f5f8b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="40" cy="18" r="2" fill="#0f5f8b" />
            </svg>
            <div>
              <div className="text-4xl font-bold text-[#0f5f8b]">
                PrinceTiwari
              </div>
              <div className="text-lg text-gray-800 font-semibold">
                Software Developer
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center border border-gray-200 rounded">
            <input
              className="px-3 py-1 w-40 text-sm bg-transparent outline-none"
              placeholder="Search"
            />
            <button className="px-3 py-1 text-sm bg-[#0f5f8b] text-white rounded-r">
              SEARCH
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200 overflow-x-auto">
          <ul className="flex gap-6 text-sm py-3 min-w-max">
            <li>
              <NavLink className={navLinkClass} to="/">
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/experience">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/certificates">
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}