import React, { useEffect, useState } from 'react';
import { Home, Menu } from 'lucide-react';

const Header = () => {
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsHero(rect.bottom > 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className={`${isHero ? 'bg-transparent' : 'bg-blue-dark'} rounded-full px-6 py-3 shadow-lg flex items-center justify-between transition-colors duration-300`}>
          <div className="flex items-center justify-between w-full lg:w-auto lg:space-x-8">
            <div className="flex items-center space-x-2 pr-2 lg:pr-8">
              <div className="w-24 md:w-36 h-12 md:h-16 bg-transparent rounded flex items-center justify-center p-0">
                <img 
                  src="/8d449375-2572-4fca-95f4-3e05daf166ca_removalai_preview (1).png" 
                  alt="Infinite Spa Logo" 
                  className="w-full h-full object-contain" 
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
            
            <button className="lg:hidden text-white">
              <Menu className="w-5 h-5" />
            </button>
            
            <nav className="hidden lg:flex items-center space-x-6 text-white lg:flex-1">
              <button 
                onClick={() => scrollToSection('spa-designs')}
                className="text-white font-medium hover:text-sky-300 transition-colors"
              >
                Spa Designs
              </button>
              <button 
                onClick={() => scrollToSection('turnkey-finish')}
                className="text-white hover:text-sky-300 transition-colors"
              >
                Turnkey finish
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-white hover:text-sky-300 transition-colors"
              >
                Come & Meet Us
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-sky-300 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-sky-300 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-3 text-white">
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="px-4 py-2 text-white hover:text-sky-300 font-medium transition-colors"
            >
              Order catalogue
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-400 font-medium transition-colors"
            >
              Find Infinite-Spa Agent
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;