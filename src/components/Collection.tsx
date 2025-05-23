
import React from 'react';
import { Button } from "@/components/ui/button";

const Collection = () => {
  const rums = [
    {
      name: "Caribbean Gold",
      age: "8 Years",
      description: "A smooth, rich rum with notes of vanilla and caramel",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=400&q=80",
      price: "$89"
    },
    {
      name: "Spiced Reserve",
      age: "12 Years",
      description: "Complex spices meet tropical fruits in perfect harmony",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80",
      price: "$129"
    },
    {
      name: "Master's Choice",
      age: "21 Years",
      description: "Our finest expression, aged to absolute perfection",
      image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=400&q=80",
      price: "$299"
    }
  ];

  return (
    <section id="collection" className="py-20 bg-gradient-to-br from-rum-red to-rum-red-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-rum-gold">Premium Collection</span>
          </h2>
          <p className="text-xl text-rum-cream/90 max-w-2xl mx-auto">
            Discover our exceptional range of premium rums, each with its own unique character and story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rums.map((rum, index) => (
            <div 
              key={rum.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={rum.image} 
                  alt={rum.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rum-red/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-rum-gold text-rum-red px-3 py-1 rounded-full font-bold text-sm">
                  {rum.age}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{rum.name}</h3>
              <p className="text-rum-cream/80 mb-4">{rum.description}</p>
              <div className="text-3xl font-bold text-rum-gold mb-6">{rum.price}</div>
              
              <Button className="w-full bg-rum-gold hover:bg-rum-gold-dark text-rum-red font-bold py-3 transition-all duration-300 transform hover:scale-105">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
