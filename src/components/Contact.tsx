"use client";

import React from 'react';

interface ContactInfo {
  phones: string[];
  email: string;
  website: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
  title?: string;
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ 
  contactInfo, 
  title = "Get in Touch", 
  className = "" 
}) => {
  return (
    <section id="contact" className={`py-20 md:py-32 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
            <div className="text-6xl text-blue-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Phone Numbers</h3>
            {contactInfo.phones.map((phone, index) => (
              <p key={index} className="text-gray-700 text-lg mb-2">{phone}</p>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
            <div className="text-6xl text-blue-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v5m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8m18 0h-2M3 10h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Email & Website</h3>
            <p className="text-gray-700 text-lg mb-2">
              Email: <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline transition-colors duration-300">{contactInfo.email}</a>
            </p>
            <p className="text-gray-700 text-lg">
              Website: <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-colors duration-300">{contactInfo.website.replace(/^https?:\/\//, '')}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 