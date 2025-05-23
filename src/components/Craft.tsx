
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
    <section id="craft" className="py-20 bg-rum-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-rum-red mb-6">
            The Art of <span className="text-rum-gold">Craftsmanship</span>
          </h2>
          <p className="text-xl text-rum-red/80 max-w-2xl mx-auto">
            Every drop tells a story of passion, tradition, and uncompromising quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-rum-red mb-3">{step.title}</h3>
              <p className="text-rum-red/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl overflow-hidden animate-scale-in">
          <img 
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=80"
            alt="Distillery process"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rum-red/70 to-transparent flex items-center">
            <div className="p-12 text-white max-w-lg">
              <h3 className="text-3xl font-bold mb-4">Master Distiller's Touch</h3>
              <p className="text-lg opacity-90">
                Each batch is carefully monitored by our master distiller, 
                ensuring every bottle meets our exacting standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
