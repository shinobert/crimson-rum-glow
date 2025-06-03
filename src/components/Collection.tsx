
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
      name: "Vanilla Flavored",
      description: "The perfect rum to mix with ANYTHING! Bursting with sweet vanilla flavor, it's the ultimate companion for those who like their drinks smooth, versatile, and full of character.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      tags: ["Smooth", "Vanilla", "Premium"],
      bgGradient: "from-amber-900 via-yellow-800 to-amber-700",
      accentColor: "amber-300"
    },
    {
      name: "Chocolate Flavored",
      description: "The FIRST Chocolate Rum to ever enter the scene of this industry. With it's bold, yet smooth flavor, you'll find the possibilities of new cocktails to be enjoyed are endless! Or just sip it straight.",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
      tags: ["Spiced", "Chocolate", "Sweet"],
      bgGradient: "from-amber-800 via-orange-900 to-red-900",
      accentColor: "orange-300"
    },
    {
      name: "Strawberry Flavored",
      description: "Bright, sweet, and unapologetically playful - this Strawberry Rum takes center stage in any cocktail! A must-have for curious mixers and confident sippers alike.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Strawberry", "Limited"],
      bgGradient: "from-pink-800 via-red-700 to-rose-600",
      accentColor: "pink-300"
    },
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
            Discover our sweet range of exceptional rums, each with its own unique character and story
          </p>
        </div>

        <div className="relative perspective-1000">
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "center", loop: true }}>
            <CarouselContent className="-ml-4">
              {rums.map((rum, index) => (
                <CarouselItem key={rum.name} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`relative h-[500px] bg-gradient-to-br ${rum.bgGradient} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-700 animate-scale-in group border border-${rum.accentColor}/30 shadow-2xl transform hover:rotate-1 hover:shadow-3xl`}
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>

                    {/* Image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl h-48">
                      <img 
                        src={rum.image} 
                        alt={rum.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className={`absolute inset-0 bg-gradient-to-t from-${rum.accentColor}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-eb-garamond">
                        {rum.name}
                      </h3>
                      
                      {/* Tags */}
                      <div className="flex justify-center gap-2 mb-4">
                        {rum.tags.map((tag) => (
                          <span 
                            key={tag}
                            className={`px-3 py-1 text-xs font-semibold bg-${rum.accentColor}/20 text-white rounded-full border border-${rum.accentColor}/30`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-white/90 mb-6 leading-relaxed text-sm">
                        {rum.description}
                      </p>
                      
                      <Button className={`px-6 bg-gradient-to-r from-${rum.accentColor} to-white hover:from-white hover:to-${rum.accentColor} text-black font-bold py-2 transition-all duration-500 transform hover:scale-105 shadow-xl border border-${rum.accentColor}/50`}>
                        View Cocktails
                      </Button>
                    </div>

                    {/* Card Corner Decorations */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/30"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-white/30"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-white/30"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/30"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-rum-gold/20 border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm -left-16" />
            <CarouselNext className="bg-rum-gold/20 border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm -right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Collection;
