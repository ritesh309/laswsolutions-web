"use client";

import React from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section id="home" className={`relative bg-gradient-to-br from-gray-900 to-black text-white py-32 md:py-48 overflow-hidden flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Placeholder image for legal theme - abstract lines/shapes */}
        <img
          src="https://placehold.co/1920x1080/0a0a0a/4a4a4a?text=Legal+Abstract+Lines"
          alt="Legal Abstract Background"
          className="w-full h-full object-cover"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = "https://placehold.co/1920x1080/0a0a0a/4a4a4a?text=Legal+Abstract"; 
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Empowering Your Future Through <span className="text-blue-400">Expert Legal & Tax Solutions</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-12 opacity-90 animate-fade-in-up delay-200">
          Law Solutions Associates is committed to providing unparalleled legal and tax advisory services, ensuring clarity, compliance, and strategic growth for your personal and business endeavors.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-2xl transform hover:scale-105 animate-fade-in-up delay-400 border-2 border-blue-600 hover:border-blue-700"
        >
          Discover Our Expertise
        </a>
      </div>
    </section>
  );
};

export default Hero; 