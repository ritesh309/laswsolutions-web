"use client";

import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  icon: {
    viewBox: string;
    path: string;
  };
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
  title?: string;
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ services, title = "Our Comprehensive Services", className = "" }) => {
  return (
    <section id="services" className={`py-20 md:py-32 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 