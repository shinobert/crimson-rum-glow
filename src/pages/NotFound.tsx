import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
      
      <Header />
      
      <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-eb-garamond mb-8 text-white uppercase tracking-wider" style={{ fontWeight: 800 }}>
          <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">404</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Page Not Found</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl">
          It seems this bottle has been emptied. Let's get you back to our premium collection.
        </p>
        <Link 
          to="/" 
          className="bg-gradient-to-r from-rum-gold to-rum-gold-light hover:from-rum-gold-dark hover:to-rum-gold text-rum-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Return Home
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
