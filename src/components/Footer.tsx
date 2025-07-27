"use client";

import React from 'react';

interface FooterProps {
  companyName?: string;
  tagline?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Law Solutions Associates", 
  tagline = "Designed with precision and integrity. Your trusted partner in legal and tax matters.",
  className = "" 
}) => {
  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-3">{tagline}</p>
      </div>
    </footer>
  );
};

export default Footer; 