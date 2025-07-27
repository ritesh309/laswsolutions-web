"use client";

import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatarSrc: string;
  avatarAlt: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials, 
  title = "What Our Clients Say", 
  className = "" 
}) => {
  return (
    <section id="testimonials" className={`py-20 md:py-32 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              avatarSrc={testimonial.avatarSrc}
              avatarAlt={testimonial.avatarAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 