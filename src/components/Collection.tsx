
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rums = [
    {
      name: "Vanilla Flavored",
      description: "The perfect rum to mix with ANYTHING! Bursting with sweet vanilla flavor, it's the ultimate companion for those who like their drinks smooth, versatile, and full of character.",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
      tags: ["Smooth", "Vanilla", "Premium"],
      bgGradient: "from-amber-50 via-yellow-50 to-cream-100",
      accentColor: "amber-600",
      textColor: "text-amber-900",
      cardColor: "bg-gradient-to-br from-amber-50 via-yellow-50 to-cream-100"
    },
    {
      name: "Chocolate Flavored",
      description: "The FIRST Chocolate Rum to ever enter the scene of this industry. With it's bold, yet smooth flavor, you'll find the possibilities of new cocktails to be endless! Or just sip it straight.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
      tags: ["Spiced", "Chocolate", "Sweet"],
      bgGradient: "from-amber-100 via-orange-200 to-yellow-100",
      accentColor: "orange-600",
      textColor: "text-orange-900",
      cardColor: "bg-gradient-to-br from-amber-100 via-orange-200 to-yellow-100"
    },
    {
      name: "Strawberry Flavored",
      description: "Bright, sweet, and unapologetically playful - this Strawberry Rum takes center stage in any cocktail! A must-have for curious mixers and confident sippers alike.",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Strawberry", "Limited"],
      bgGradient: "from-pink-100 via-rose-100 to-red-100",
      accentColor: "pink-600",
      textColor: "text-pink-900",
      cardColor: "bg-gradient-to-br from-pink-100 via-rose-100 to-red-100"
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rums.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [rums.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rums.length) % rums.length);
  };

  const getCardPosition = (index: number) => {
    const position = (index - currentIndex + rums.length) % rums.length;
    
    switch (position) {
      case 0: // Active card (center)
        return {
          transform: 'translateX(0px) scale(1)',
          zIndex: 30,
          opacity: 1,
        };
      case 1: // Next card (right)
        return {
          transform: 'translateX(320px) scale(0.9)',
          zIndex: 20,
          opacity: 1,
        };
      case 2: // Previous card (left)
        return {
          transform: 'translateX(-320px) scale(0.9)',
          zIndex: 10,
          opacity: 1,
        };
      default:
        return {
          transform: 'translateX(0px) scale(0.8)',
          zIndex: 0,
          opacity: 0,
        };
    }
  };

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

        <div className="relative h-[650px] flex items-center justify-center">
          {/* Cards Container */}
          <div className="relative w-80 h-[550px] mx-auto">
            {rums.map((rum, index) => (
              <div
                key={rum.name}
                className={`absolute inset-0 w-80 h-[550px] ${rum.cardColor} rounded-2xl p-6 text-center transition-all duration-700 ease-in-out cursor-pointer border-2 shadow-2xl`}
                style={getCardPosition(index)}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-current rounded-full"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-current rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-current rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-current rounded-full"></div>
                </div>

                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl h-48">
                  <img 
                    src={rum.image} 
                    alt={rum.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-3 ${rum.textColor} font-eb-garamond`}>
                    {rum.name}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex justify-center gap-2 mb-4">
                    {rum.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-3 py-1 text-xs font-semibold bg-${rum.accentColor}/20 ${rum.textColor} rounded-full border border-${rum.accentColor}/50`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className={`${rum.textColor}/80 mb-6 leading-relaxed text-sm`}>
                    {rum.description}
                  </p>
                  
                  <Button className={`px-6 bg-${rum.accentColor} hover:bg-${rum.accentColor}/80 text-white font-bold py-2 transition-all duration-500 transform hover:scale-105 shadow-xl`}>
                    View Signature Cocktails
                  </Button>
                </div>

                {/* Card Corner Decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-current opacity-30"></div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-rum-gold/20 border border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-rum-gold/20 border border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {rums.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-rum-gold' : 'bg-rum-gold/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
