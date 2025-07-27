"use client";

import React from 'react';

interface Benefit {
  icon: {
    viewBox: string;
    path: string;
  };
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  benefits: Benefit[];
  title?: string;
  className?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  benefits, 
  title = "Why Choose Law Solutions Associates?", 
  className = "" 
}) => {
  return (
    <section id="why-choose-us" className={`py-20 md:py-32 bg-gray-900 text-white ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <div className="text-6xl text-blue-400 mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto" 
                  fill="none" 
                  viewBox={benefit.icon.viewBox} 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={benefit.icon.path} 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 