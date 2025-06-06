import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import FillTextLoading from './FillTextLoading';

// Self-contained loading dots component
const LoadingDots = () => {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return <span className="inline-block w-9 text-left eb-garamond-800 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">{dots}</span>;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled for background change
      setIsScrolled(currentScrollY > 50);
      
      // Determine if navbar should be visible based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide immediately with lower threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        // Scrolling up or at top - show immediately
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Add effect to lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Lock body by setting position fixed and preserving scroll offset
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Unlock body when menu is closed and restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsTransitioning(true);
    
    // Wait longer before navigating to ensure the text fill animation completes at least once
    setTimeout(() => {
      navigate(path);
      setIsMobileMenuOpen(false);
      
      // Add additional delay before hiding the loading screen
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2000);
    }, 4000);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/cocktails", text: "Cocktails" },
    { to: "/heritage", text: "Heritage" },
    { to: "/awards", text: "Awards" },
    { to: "/events", text: "Events" },
    { to: "/where-to-buy", text: "Where To Buy" },
    { to: "/contact", text: "Contact Us" }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-rum-black/50 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      } ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 pointer-events-none'}`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 animate-fade-in-left">
            <img 
              src="/Images/Logo.png" 
              alt="Roman Candy Rum Logo" 
              className="h-20 w-auto"
            />
            {/* <span className="text-white text-2xl font-bold bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-eb-garamond uppercase">ROMAN CANDY RUM</span> */}
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
      <div className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out overflow-y-auto overscroll-contain ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background with New Orleans jazz club feel */}
        <div className="fixed inset-0 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
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
        <div className="relative z-10 min-h-full flex flex-col justify-center pt-28 pb-16 md:py-24">
          <div className="text-left w-full max-w-2xl md:max-w-3xl px-8 md:px-12 mx-auto">
            {/* Navigation Links - Left aligned text in a centered container */}
            <nav className="space-y-6 md:space-y-12 flex flex-col items-start">
              {navLinks.map((link, index) => (
                <div
                  key={link.to}
                  className={`w-full transition-all duration-700 ease-out ${
                    isMobileMenuOpen 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-20'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className="w-full text-left text-white hover:text-rum-gold transition-all duration-500 font-eb-garamond relative group uppercase"
                    style={{ fontWeight: 800 }}
                  >
                    <span className="relative inline-block text-3xl md:text-5xl">
                      {link.text}
                      {/* Underline animation - moved inside the text span */}
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-rum-gold to-rum-gold-light transition-all duration-500 group-hover:w-full"></span>
                    </span>
                    {/* Glow effect on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-rum-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Loading Transition Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-800 ease-in-out ${
        isTransitioning ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black flex items-center justify-center">
          {/* Golden particles background */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-rum-gold rounded-full opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                  boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)'
                }}
              ></div>
            ))}
          </div>
          
          {/* Loading animation */}
          <div className="text-center relative z-10">
            <div className="inline-block">
              <img 
                src="/Images/Wheel.png" 
                alt="Loading Wheel" 
                className="w-64 h-64 mx-auto animate-spin-slow opacity-80 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                style={{ animationDuration: '8s' }}
              />
              <div className="flex justify-center mt-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl eb-garamond-800 flex items-center uppercase">
                  <FillTextLoading text="Roman Candy Rum" className="eb-garamond-800" isActive={isTransitioning} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
