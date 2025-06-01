import React from 'react';

const Craft = () => {
  const steps = [
    {
      title: "Selection",
      description: "Only the finest Caribbean sugarcane",
      icon: "🌾"
    },
    {
      title: "Fermentation",
      description: "Traditional methods passed down generations",
      icon: "⚗️"
    },
    {
      title: "Distillation",
      description: "Copper pot stills for maximum purity",
      icon: "🔥"
    },
    {
      title: "Aging",
      description: "Oak barrels under tropical sun",
      icon: "🛢️"
    }
  ];

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
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 font-eb-garamond">
            The Art of <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Craftsmanship</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every drop tells a story of passion, tradition, and uncompromising quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center group animate-fade-in-up backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20 hover:border-rum-gold/50 transition-all duration-500 hover:bg-rum-black/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-eb-garamond">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden animate-scale-in group">
          <img 
            src="/Images/all-rums.jpg"
            alt="Master's Distillery Collection"
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rum-black/80 via-rum-red/40 to-transparent flex items-center">
            <div className="p-12 text-white max-w-2xl backdrop-blur-sm bg-rum-black/20 rounded-2xl m-8 border border-rum-gold/30">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-eb-garamond">Master Distiller's Touch</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Each batch is carefully monitored by our master distiller, 
                ensuring every bottle meets our exacting standards of excellence and carries forward our legacy of perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
