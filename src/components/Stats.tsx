"use client";

import React from 'react';

interface StatItem {
  number: string;
  title: string;
  description: string;
}

interface StatsProps {
  stats: StatItem[];
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ stats, className = "" }) => {
  return (
    <section className={`bg-white py-16 md:py-24 shadow-inner ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-100 shadow-md transform hover:scale-105 transition-transform duration-300 border border-gray-200">
              <h3 className="text-5xl font-extrabold text-blue-700 mb-2">{stat.number}</h3>
              <p className="text-xl font-semibold text-gray-800">{stat.title}</p>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 