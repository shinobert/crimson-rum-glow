
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/heritage", text: "Heritage" },
    { to: "/awards", text: "Awards" },
    { to: "/events", text: "Events" },
    { to: "/cocktails", text: "Cocktails" },
    { to: "/where-to-buy", text: "Where To Buy" },
    { to: "/contact", text: "Contact" }
  ];

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-white hover:text-rum-gold transition-colors duration-300 font-medium relative group"
            >
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-rum-gold transition-colors duration-300 p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-rum-black/95 backdrop-blur-sm border-t border-rum-gold/20 md:hidden">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white hover:text-rum-gold transition-colors duration-300 font-medium py-3 border-b border-rum-gold/10 last:border-b-0"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
