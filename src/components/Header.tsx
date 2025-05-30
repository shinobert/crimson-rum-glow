
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      isScrolled ? 'bg-rum-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 animate-fade-in-left">
          <div className="w-10 h-10 bg-gradient-to-br from-rum-gold to-rum-gold-dark rounded-full flex items-center justify-center shadow-lg animate-glow">
            <span className="text-rum-black font-bold text-xl">R</span>
          </div>
          <span className="text-white text-2xl font-bold bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">CARIBBEAN</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 animate-fade-in-up">
          <Link to="/heritage" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Heritage
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/awards" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Awards
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/events" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Events
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/cocktails" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Cocktails
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/where-to-buy" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Where To Buy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="animate-fade-in-right">
          <Button className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-6 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shop Now
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
