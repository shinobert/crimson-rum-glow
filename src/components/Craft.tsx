import React from 'react';

const Craft = () => {

  return (
    <section id="craft" className="py-24 bg-gradient-to-br from-rum-red-dark via-rum-black to-rum-red-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rum-gold/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-rum-gold/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Golden particles */}
        {[...Array(10)].map((_, i) => (
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
        <div className="relative rounded-2xl overflow-hidden animate-scale-in group">
          <img 
            src="/Images/all-rums.jpg"
            alt="Master's Distillery Collection"
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rum-black/80 via-rum-red/40 to-transparent flex items-center">
            <div className="p-8 text-white max-w-2xl backdrop-blur-sm bg-rum-black/20 rounded-2xl m-8 border border-rum-gold/30">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-eb-garamond">Not Your Grandpa's Candy
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                So how did we make the rum taste just like the taffy? Well it's simple: rum is made with molasses and so is our taffy, so much of the recipes are the same. We did the impossible making the world's first chocolate rum, and took vanilla and strawberry flavoring in the rum industry to the next level! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
