
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rum-black to-rum-red-dark text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rum-gold to-rum-gold-dark rounded-full flex items-center justify-center shadow-lg animate-glow">
                <span className="text-rum-black font-bold text-2xl">R</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">CARIBBEAN</span>
            </div>
            <div className="backdrop-blur-sm bg-rum-black/20 rounded-xl p-6 border border-rum-gold/20">
              <p className="text-white/80 mb-6 leading-relaxed">
                Crafting exceptional rum since 1873. Experience the finest Caribbean tradition.
              </p>
              <div className="text-sm text-rum-gold font-semibold">
                Drink Responsibly. 21+ Only.
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent mb-6">Products</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Caribbean Gold
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Spiced Reserve
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Master's Choice
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Limited Editions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent mb-6">Company</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Heritage
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Distillery Tours
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Press
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <h4 className="text-xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent mb-6">Connect</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Newsletter
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Instagram
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors duration-300 relative group">
                Facebook
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rum-gold/30 pt-8 text-center">
          <p className="text-white/70">&copy; 2024 Caribbean Premium Rum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
