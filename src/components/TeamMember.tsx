"use client";

import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  description, 
  imageSrc, 
  imageAlt, 
  className = "" 
}) => {
  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-700 ${className}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
      />
      <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-blue-400 text-lg font-medium mb-4">{position}</p>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TeamMember; 