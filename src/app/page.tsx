"use client";

import React from 'react';
import {
  Navbar,
  Hero,
  Stats,
  Services,
  WhyChooseUs,
  Testimonials,
  Team,
  CallToAction,
  Contact,
  Footer
} from '../components';
import { websiteData } from '../data/websiteData';

// Main Home App component for the Law Solutions Associates website
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
      <Navbar />
      <Hero />
      <Stats stats={websiteData.stats} />
      <Services services={websiteData.services} />
      <WhyChooseUs benefits={websiteData.benefits} />
      <Testimonials testimonials={websiteData.testimonials} />
      <Team members={websiteData.team} />
      <CallToAction 
        title={websiteData.callToAction.title}
        description={websiteData.callToAction.description}
        buttonText={websiteData.callToAction.buttonText}
        buttonHref={websiteData.callToAction.buttonHref}
      />
      <Contact contactInfo={websiteData.contactInfo} />
      <Footer />

      {/* Tailwind CSS Customization (for animations) */}
      <style jsx>{`
        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 0.8s ease-out forwards;
        }

        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Home;
