"use client";

import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  avatarSrc: string;
  avatarAlt: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  position, 
  avatarSrc, 
  avatarAlt, 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transform hover:scale-[1.02] transition-transform duration-300 ${className}`}>
      <p className="text-gray-700 text-lg italic mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center">
        <img
          src={avatarSrc}
          alt={avatarAlt}
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-300"
        />
        <div>
          <p className="font-semibold text-xl text-gray-800">{name}</p>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 