"use client";

import React from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`bg-white shadow-lg py-5 sticky top-0 z-50 transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-extrabold text-gray-800 tracking-wider">
          Law Solutions <span className="text-blue-700">Associates</span>
        </a>
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Services</a>
          <a href="#why-choose-us" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Why Choose Us</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Testimonials</a>
          <a href="#team" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Our Team</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-semibold text-lg">Contact</a>
        </div>
        {/* Mobile menu button (can be expanded with state for functionality) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 