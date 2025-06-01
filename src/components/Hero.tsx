import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Splashing Banner.mov" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-rum-black/50 via-transparent to-rum-black/30"></div>
      </div>

      {/* Animated Gold Particles */}
      {/* <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rum-gold rounded-full opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)'
            }}
          ></div>
        ))}
      </div> */}

      {/* Gradient Orbs */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rum-red/30 to-rum-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rum-gold/20 to-rum-red/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-light mb-10 text-white uppercase tracking-widest animate-fade-in-up eb-garamond-700" style={{ textShadow: '-2px 3px 0 #FFD700, -4px 6px 0 #8B0000' }}>
            ROMAN CANDY RUM
          </h1>
          <h3 className="text-xl md:text-2xl font-light mb-10 text-white uppercase tracking-widest animate-fade-in-up eb-garamond-500" style={{ animationDelay: '0.3s', textShadow: '-1px 1px 0 rgba(255,215,0,0.7)' }}>
            A New Orleans Tradition, All Grown Up!
          </h3>
        </div>
        
        {/* <div className="animate-fade-in-up backdrop-blur-sm bg-rum-black/20 rounded-2xl p-8 border border-rum-gold/20" style={{ animationDelay: '0.6s' }}>
          <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light leading-relaxed">
            Crafted with <span className="text-rum-gold font-semibold">passion</span>, aged to <span className="text-rum-gold font-semibold">perfection</span>.<br />
            Experience the finest Caribbean tradition.
          </p>
        </div> */}

        <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rum-gold via-rum-gold-light to-rum-gold hover:from-rum-gold-dark hover:via-rum-gold hover:to-rum-gold-light text-rum-black font-bold px-16 py-8 text-xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden group shadow-2xl border border-rum-gold/50"
          >
            <span className="relative z-10 eb-garamond-600">DISCOVER THE LEGEND</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-rum-gold rounded-full flex justify-center backdrop-blur-sm bg-rum-black/20 shadow-lg">
          <div className="w-1.5 h-4 bg-gradient-to-b from-rum-gold to-rum-gold-dark rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
