
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
      age: "8 Years",
      description: "A smooth, rich rum with notes of vanilla and caramel, perfect for sipping",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
      price: "$89",
      tags: ["Smooth", "Vanilla", "Premium"]
    },
    {
      name: "Spiced Reserve",
      age: "12 Years",
      description: "Complex spices meet tropical fruits in perfect harmony, aged to perfection",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=80",
      price: "$129",
      tags: ["Spiced", "Complex", "Tropical"]
    },
    {
      name: "Master's Choice",
      age: "21 Years",
      description: "Our finest expression, aged to absolute perfection with unmatched depth",
      image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=600&q=80",
      price: "$299",
      tags: ["Premium", "Aged", "Limited"]
    },
    {
      name: "Black Label",
      age: "15 Years",
      description: "Dark, mysterious, and incredibly smooth with hints of chocolate and oak",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
      price: "$199",
      tags: ["Dark", "Chocolate", "Oak"]
    }
  ];

  return (
    <section id="collection" className="py-24 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-rum-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-rum-red/10 to-rum-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Premium Collection</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover our exceptional range of premium rums, each with its own unique character and story
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {rums.map((rum, index) => (
              <CarouselItem key={rum.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="bg-gradient-to-br from-rum-black-light/80 to-rum-red-dark/20 backdrop-blur-lg rounded-2xl p-8 text-center hover:from-rum-black-light/90 hover:to-rum-red-dark/30 transition-all duration-700 transform hover:-translate-y-4 animate-scale-in group border border-rum-gold/20 shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-8 overflow-hidden rounded-xl">
                    <img 
                      src={rum.image} 
                      alt={rum.name}
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-rum-gold to-rum-gold-light text-rum-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {rum.age}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-rum-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {rum.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-rum-gold/20 text-rum-gold rounded-full border border-rum-gold/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">{rum.name}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{rum.description}</p>
                  <div className="text-4xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent mb-8 drop-shadow-lg">{rum.price}</div>
                  
                  <Button className="w-full bg-gradient-to-r from-rum-gold via-rum-gold-light to-rum-gold hover:from-rum-gold-dark hover:via-rum-gold hover:to-rum-gold-light text-rum-black font-bold py-4 transition-all duration-500 transform hover:scale-105 shadow-xl border border-rum-gold/50">
                    Add to Cart
                  </Button>
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
