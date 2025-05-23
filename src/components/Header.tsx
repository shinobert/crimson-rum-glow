
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-rum-red/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 animate-fade-in-left">
          <div className="w-10 h-10 bg-rum-gold rounded-full flex items-center justify-center">
            <span className="text-rum-red font-bold text-xl">R</span>
          </div>
          <span className="text-white text-2xl font-bold">CARIBBEAN</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 animate-fade-in-up">
          <a href="#heritage" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium">Heritage</a>
          <a href="#collection" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium">Collection</a>
          <a href="#craft" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium">Craft</a>
          <a href="#contact" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium">Contact</a>
        </div>

        <div className="animate-fade-in-right">
          <Button variant="outline" className="border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-red transition-all duration-300">
            Shop Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
