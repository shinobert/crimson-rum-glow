
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigation = (path: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      navigate(path);
      setIsMobileMenuOpen(false);
      setIsTransitioning(false);
    }, 800);
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
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rum-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-10 h-10 bg-gradient-to-br from-rum-gold to-rum-gold-dark rounded-full flex items-center justify-center shadow-lg animate-glow">
              <span className="text-rum-black font-bold text-xl">R</span>
            </div>
            <span className="text-white text-2xl font-bold bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-['EB_Garamond'] font-[700]">Roman Candy Rum</span>
          </Link>

          {/* Hamburger Menu Button - Always Visible */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-rum-gold transition-colors duration-300 p-2 z-60 relative"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background with New Orleans jazz club feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-rum-gold rounded-full opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Gradient orbs for ambiance */}
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-rum-red/20 to-rum-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-rum-red/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            {/* Menu Title with New Orleans flair */}
            <h2 className={`text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-rum-gold via-white to-rum-gold bg-clip-text text-transparent font-['EB_Garamond'] transition-all duration-1000 ${
              isMobileMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}>
              Menu
            </h2>

            {/* Navigation Links */}
            <nav className="space-y-8">
              {navLinks.map((link, index) => (
                <div
                  key={link.to}
                  className={`transition-all duration-700 ease-out ${
                    isMobileMenuOpen 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-20'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className="block text-white hover:text-rum-gold transition-all duration-500 font-medium text-4xl md:text-6xl font-['EB_Garamond'] relative group"
                  >
                    <span className="relative z-10">{link.text}</span>
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-rum-gold to-rum-gold-light transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    {/* Glow effect on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-rum-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  </button>
                </div>
              ))}
            </nav>

            {/* Decorative elements */}
            <div className={`mt-16 flex justify-center space-x-8 transition-all duration-1000 ${
              isMobileMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-rum-gold rounded-full animate-pulse" style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Transition Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-800 ease-in-out ${
        isTransitioning ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-rum-black via-rum-red to-rum-black flex items-center justify-center">
          {/* Loading animation */}
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-rum-gold/30 border-t-rum-gold rounded-full animate-spin mb-8"></div>
            <p className="text-rum-gold text-2xl font-['EB_Garamond'] animate-pulse">Loading...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
