import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Create_nice_showcase_202507161937.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-end pb-8">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-end justify-center md:justify-start">
            {/* Left Content */}
            <div className="text-white flex flex-col gap-4 md:gap-6 items-center md:items-start pl-2 text-center md:text-left max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded text-sm md:text-base font-medium mb-2">
                Wellness designs
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight md:leading-snug mb-4 md:mb-6 md:whitespace-nowrap">
                Ready-made wellness units by Infinite-Spa
              </h1>
              <button 
                onClick={() => scrollToSection('spa-designs')}
                className="bg-white text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm md:text-base"
              >
                <span>Find out more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;