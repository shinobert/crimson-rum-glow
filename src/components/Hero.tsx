
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rum-red via-rum-red-light to-rum-red">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236dadf473f28a4c4f8f4c8db6b6e8c7c0a8b0b0&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-rum-red/20"></div>
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rum-gold rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-rum-gold to-white bg-clip-text text-transparent animate-scale-in">
            CARIBBEAN
          </h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-rum-cream animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Premium Rum
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl mb-12 text-rum-cream/90 font-light leading-relaxed">
            Crafted with passion, aged to perfection.<br />
            Experience the finest Caribbean tradition.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="bg-rum-gold hover:bg-rum-gold-dark text-rum-red font-bold px-12 py-6 text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">DISCOVER THE LEGEND</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-rum-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rum-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
