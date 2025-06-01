import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rum-black to-rum-red-dark text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Golden particles */}
        {[...Array(5)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-in-left flex justify-center items-center">
            <img 
              src="/Images/Logo.png" 
              alt="Roman Candy Rum Logo" 
              className="h-24 w-auto"
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/heritage" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Heritage
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Awards
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Events
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/cocktails" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Cocktails
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/where-to-buy" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Where To Buy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rum-gold transition-colors duration-300 relative group">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rum-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <div className="flex items-center space-x-6 mb-6">
              <a href="https://www.facebook.com/RomanCandyRum" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-rum-gold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="https://x.com/RomanCandyRum" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-rum-gold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/romancandyrum/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-rum-gold transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <p className="text-white/80 mb-4">
              Follow us for updates, recipes, and events
            </p>
            <p className="text-white/80">
              <a href="mailto:info@romancandyrum.com" className="hover:text-rum-gold transition-colors duration-300">
                info@romancandyrum.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="backdrop-blur-sm bg-rum-black/20 rounded-xl p-6 border border-rum-gold/20 mb-16 animate-fade-in-up">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white/80 mb-4 leading-relaxed text-center max-w-3xl">
              Crafting exceptional rum since 1915. Experience the finest Caribbean tradition.
            </p>
            <div className="text-sm text-rum-gold font-semibold text-center">
              Drink Responsibly. 21+ Only.
            </div>
          </div>
        </div>

        <div className="border-t border-rum-gold/30 pt-8 text-center">
          <p className="text-white/70">&copy; 2025 Roman Candy Rum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
