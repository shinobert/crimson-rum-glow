import React from 'react';

const Hero = () => {
  // Function to scroll to the next section smoothly
  const scrollToNextSection = () => {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    
    // Scroll down smoothly to just past the current viewport
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

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
          <source src="/Videos/Splashing Banner.mov" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-rum-black/50 via-transparent to-rum-black/30"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rum-red/30 to-rum-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rum-gold/20 to-rum-red/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white uppercase tracking-normal animate-fade-in-up font-eb-garamond" style={{ textShadow: '-2px 1px 0 #FFD700, -4px 3px 0 #8B0000', fontWeight: 800, transform: 'scaleY(1.2)' }}>
            ROMAN CANDY RUM
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-10 text-white uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A New Orleans Tradition, All Grown Up!
          </h3>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Now Clickable */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
        aria-label="Scroll to next section"
      >
        <div className="w-10 h-14 border-2 border-rum-gold rounded-full flex justify-center backdrop-blur-sm bg-rum-black/20 shadow-lg hover:bg-rum-black/40 transition-all duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-rum-gold to-rum-gold-dark rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
