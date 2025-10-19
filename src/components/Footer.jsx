import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; Prince Tiwari</div>
        <div className="text-sm mt-3 md:mt-0">
          <a href="#" className="underline">
            Go on Top
          </a>
        </div>
      </div>
    </footer>
  );
}