
import React from 'react';

const Heritage = () => {
  return (
    <section id="heritage" className="py-20 bg-rum-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-5xl font-bold text-rum-red mb-8">
              A Legacy of 
              <span className="text-rum-gold"> Excellence</span>
            </h2>
            <p className="text-lg text-rum-red/80 mb-6 leading-relaxed">
              For over 150 years, our master distillers have perfected the art of rum making. 
              Each bottle carries the essence of Caribbean tradition, crafted with the finest 
              sugarcane and aged in oak barrels under the tropical sun.
            </p>
            <p className="text-lg text-rum-red/80 mb-8 leading-relaxed">
              Our commitment to quality and tradition has made us one of the most respected 
              rum producers in the Caribbean, with awards and recognition from around the world.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rum-gold mb-2">150+</div>
                <div className="text-rum-red/70">Years of Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rum-gold mb-2">50+</div>
                <div className="text-rum-red/70">International Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rum-gold mb-2">12</div>
                <div className="text-rum-red/70">Unique Blends</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=800&q=80" 
                alt="Rum distillery" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rum-red/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
