"use client";

import React from 'react';

interface ServiceCardProps {
  icon: {
    viewBox: string;
    path: string;
  };
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-10 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 border border-blue-100 hover:border-blue-300 ${className}`}>
      <div className="text-6xl text-blue-700 mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16" 
          fill="none" 
          viewBox={icon.viewBox} 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={icon.path} 
          />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard; 