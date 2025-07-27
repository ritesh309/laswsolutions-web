"use client";

import React from 'react';

interface SvgIconProps {
  icon: {
    viewBox: string;
    path: string;
  };
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, className = "h-16 w-16" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
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
  );
};

export default SvgIcon; 