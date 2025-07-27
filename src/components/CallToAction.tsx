"use client";

import React from 'react';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  className = "" 
}) => {
  return (
    <section className={`bg-blue-700 text-white py-20 md:py-28 text-center ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{title}</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-90">
          {description}
        </p>
        <a
          href={buttonHref}
          className="inline-block bg-white text-blue-700 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-200 transition-all duration-300 shadow-2xl transform hover:scale-110 border-2 border-white"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CallToAction; 