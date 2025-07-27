"use client";

import React from 'react';
import TeamMember from './TeamMember';

interface TeamMemberData {
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TeamProps {
  members: TeamMemberData[];
  title?: string;
  className?: string;
}

const Team: React.FC<TeamProps> = ({ 
  members, 
  title = "Meet Our Dedicated Team", 
  className = "" 
}) => {
  return (
    <section id="team" className={`py-20 md:py-32 bg-gray-900 text-white ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              description={member.description}
              imageSrc={member.imageSrc}
              imageAlt={member.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 