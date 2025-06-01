import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Collection = () => {
  const rums = [
    {
      name: "Caribbean Gold",
      description: "A smooth, rich rum with notes of vanilla and caramel, perfect for sipping",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
      tags: ["Smooth", "Vanilla", "Premium"]
    },
    {
      name: "Spiced Reserve",
      description: "Complex spices meet tropical fruits in perfect harmony, aged to perfection",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=80",
      tags: ["Spiced", "Complex", "Tropical"]
    },
    {
      name: "Master's Choice",
      description: "Our finest expression, aged to absolute perfection with unmatched depth",
      image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Aged", "Limited"]
    },
    {
      name: "Black Label",
      description: "Dark, mysterious, and incredibly smooth with hints of chocolate and oak",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
      tags: ["Dark", "Chocolate", "Oak"]
    }
  ];

  return (
    <section id="collection" className="py-24 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-rum-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-rum-red/10 to-rum-gold/10 rounded-full blur-3xl"></div>
        
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
            Our <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Premium Collection</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional range of premium rums, each with its own unique character and story
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {rums.map((rum, index) => (
              <CarouselItem key={rum.name} className="basis-full">
                <div 
                  className="bg-gradient-to-br from-rum-black-light/80 to-rum-red-dark/20 backdrop-blur-lg rounded-2xl p-8 text-center hover:from-rum-black-light/90 hover:to-rum-red-dark/30 transition-all duration-700 animate-scale-in group border border-rum-gold/20 shadow-2xl mx-auto max-w-4xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-8 overflow-hidden rounded-xl">
                    <img 
                      src={rum.image} 
                      alt={rum.name}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-rum-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {rum.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-rum-gold/20 text-rum-gold rounded-full border border-rum-gold/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent font-eb-garamond">{rum.name}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">{rum.description}</p>
                  
                  <div className="flex justify-center">
                    <Button className="px-8 bg-gradient-to-r from-rum-gold via-rum-gold-light to-rum-gold hover:from-rum-gold-dark hover:via-rum-gold hover:to-rum-gold-light text-rum-black font-bold py-3 transition-all duration-500 transform hover:scale-105 shadow-xl border border-rum-gold/50">
                      View Recipe
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-rum-gold/20 border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm" />
          <CarouselNext className="bg-rum-gold/20 border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
};

export default Collection;
