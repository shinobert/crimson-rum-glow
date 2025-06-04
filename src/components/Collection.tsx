import React, { useState, useEffect, memo, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types
type Rum = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  bgGradient: string;
  accentColor: string;
  textColor: string;
  cardColor: string;
  cocktailTab: string;
};

type RumCardProps = {
  rum: Rum;
  index: number;
  currentIndex: number;
  getCardPosition: (index: number) => {
    transform: string;
    zIndex: number;
    opacity: number;
  };
  onClick: () => void;
};

// Create a memoized card component to prevent unnecessary re-renders
const RumCard = memo(({ 
  rum, 
  index, 
  currentIndex, 
  getCardPosition, 
  onClick 
}: RumCardProps) => {
  const position = (index - currentIndex + 3) % 3; // 0 = center, 1 = right, 2 = left
  
  // Determine border color based on rum type
  const getBorderColor = () => {
    switch(rum.name) {
      case "Chocolate Flavored":
        return "border-white/40";
      case "Strawberry Flavored":
        return "border-black/40";
      case "Vanilla Flavored":
        return "border-amber-800/40";
      default:
        return "border-rum-gold/40";
    }
  };
  
  const borderColor = getBorderColor();
  
  return (
    <div
      className={`absolute inset-0 w-96 h-[500px] ${rum.cardColor} ${index === currentIndex ? 'active-card' : ''} rounded-2xl p-8 text-center transition-all duration-700 ease-in-out cursor-pointer`}
      style={{
        ...getCardPosition(index),
      }}
      onClick={onClick}
      onTouchStart={(e) => {
        // For touch devices, capture the touch start event
        const parentElement = e.currentTarget.parentElement;
        if (parentElement) {
          const event = new Event('mouseenter');
          parentElement.dispatchEvent(event);
        }
      }}
      onTouchEnd={(e) => {
        // When touch ends, simulate mouse leave after a short delay
        // This allows the click event to fire first
        setTimeout(() => {
          const parentElement = e.currentTarget.parentElement;
          if (parentElement) {
            const event = new Event('mouseleave');
            parentElement.dispatchEvent(event);
          }
        }, 1000); // 1 second delay before resuming
      }}
    >
      {/* Darkening overlay for side cards */}
      {position !== 0 && (
        <div 
          className="absolute inset-0 bg-black rounded-2xl transition-opacity duration-700 ease-in-out z-10"
          style={{ opacity: 0.2 }}
        ></div>
      )}
      
      {/* New Orleans decorative elements */}
      <div className={`absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 ${borderColor} rounded-tl-xl z-20`}></div>
      <div className={`absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 ${borderColor} rounded-tr-xl z-20`}></div>
      <div className={`absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 ${borderColor} rounded-bl-xl z-20`}></div>
      <div className={`absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 ${borderColor} rounded-br-xl z-20`}></div>

      
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl h-48 z-20">
        <img 
          src={rum.image} 
          alt={rum.name}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <h3 className={`text-2xl font-bold mb-3 ${rum.textColor} font-eb-garamond`}>
          {rum.name}
        </h3>
        
        <p className={`${rum.name === "Chocolate Flavored" ? 'text-[#FFF8E1]' : `${rum.textColor}/80`} mb-6 leading-relaxed text-base font-medium`}>
          {rum.description}
        </p>
        
        <a 
          href={`/cocktails?tab=${rum.cocktailTab}`}
          onClick={(e) => e.stopPropagation()}
          className={`inline-block px-6 bg-${rum.accentColor} hover:bg-${rum.accentColor}/80 ${rum.name === "Chocolate Flavored" ? 'text-[#FFF8E1]' : 'text-black'} font-bold py-2 rounded-md transition-all duration-300 transform hover:scale-105 card-button`}
        >
          View Signature Cocktails
        </a>
      </div>
    </div>
  );
});

RumCard.displayName = 'RumCard';

// Create a memoized background component
const BackgroundParticles = memo(() => {
  // Generate random positions once when component mounts
  const particles = React.useMemo(() => 
    [...Array(10)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${4 + Math.random() * 2}s`,
    })), 
  []);

  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-rum-gold/10 to-rum-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-rum-red/10 to-rum-gold/10 rounded-full blur-3xl"></div>
      
      {/* Golden particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-rum-gold rounded-full opacity-30 animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)'
          }}
        ></div>
      ))}
    </div>
  );
});

BackgroundParticles.displayName = 'BackgroundParticles';

// Create a memoized header component
const SectionHeader = memo(() => {
  return (
    <div className="text-center mb-20 animate-fade-in-up">
      <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 font-eb-garamond">
        Our <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Premium Collection</span>
      </h2>
      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
        Discover our sweet range of exceptional rums, each with its own unique character and story
      </p>
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';

// Create a memoized navigation buttons component
type NavigationButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
};

const NavigationButtons = memo(({ onPrev, onNext }: NavigationButtonsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-rum-gold/20 border border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-rum-gold/20 border border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </>
  );
});

NavigationButtons.displayName = 'NavigationButtons';

const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Add CSS for active card and button shadows
  const customStyles = `
    .active-card {
      opacity: 1 !important;
      background-color: rgba(255, 255, 255, 1) !important;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .card-button {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    
    .card-button:hover {
      box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    }
    
    .carousel-paused .active-card {
      box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.6) !important;
    }
    
    .active-card:hover {
      transform: translateX(0) translateY(-10px) scale(1) rotate(0deg) !important;
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6) !important;
    }
  `;

  const rums: Rum[] = [
    {
      name: "Vanilla Flavored",
      description: "The perfect rum to mix with ANYTHING! Bursting with sweet vanilla flavor, it's the ultimate companion for those who like their drinks smooth, versatile, and full of character.",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80",
      tags: ["Smooth", "Vanilla", "Premium"],
      bgGradient: "from-cream-100 via-vanilla-50 to-amber-50",
      accentColor: "amber-600",
      textColor: "text-amber-900",
      cardColor: "bg-gradient-to-br from-[#F8F4E3] via-[#FFF8E6] to-[#F5E9C9]",
      cocktailTab: "vanilla"
    },
    {
      name: "Chocolate Flavored",
      description: "The FIRST Chocolate Rum to ever enter the scene of this industry. With it's bold, yet smooth flavor, you'll find the possibilities of new cocktails to be endless!",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
      tags: ["Spiced", "Chocolate", "Sweet"],
      bgGradient: "bg-gradient-to-br from-[#3B2106] via-[#6B4226] to-[#3B2106]",
      accentColor: "orange-600",
      textColor: "text-[#FFF8E1]",
      cardColor: "bg-gradient-to-br from-[#3B2106] via-[#6B4226] to-[#3B2106]",
      cocktailTab: "chocolate"
    },
    {
      name: "Strawberry Flavored",
      description: "Bright, sweet, and unapologetically playful - this Strawberry Rum takes center stage in any cocktail! A must-have for curious mixers and confident sippers alike.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
      tags: ["Premium", "Strawberry", "Limited"],
      bgGradient: "from-pink-100 via-rose-100 to-red-100",
      accentColor: "pink-600",
      textColor: "text-pink-900",
      cardColor: "bg-gradient-to-br from-pink-400 via-rose-400 to-red-400",
      cocktailTab: "strawberry"
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    // Only set up the interval if not paused
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % rums.length);
      }, 5000);
      return () => clearInterval(interval);
    }
    // Return empty cleanup function when paused
    return () => {};
  }, [rums.length, isPaused]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % rums.length);
  }, [rums.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + rums.length) % rums.length);
  }, [rums.length]);

  const getCardPosition = useCallback((index: number) => {
    const position = (index - currentIndex + rums.length) % rums.length;
    
    switch (position) {
      case 0: // Active card (center)
        return {
          transform: 'translateX(0px) translateY(0) scale(1) rotate(0deg)',
          zIndex: 30,
          opacity: 1,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        };
      case 1: // Next card (right)
        return {
          transform: 'translateX(100px) translateY(0) scale(0.9) rotate(5deg)',
          zIndex: 20,
          opacity: 0.95,
          boxShadow: '15px 15px 30px -5px rgba(0, 0, 0, 0.5)'
        };
      case 2: // Previous card (left)
        return {
          transform: 'translateX(-100px) translateY(0) scale(0.9) rotate(-5deg)',
          zIndex: 10,
          opacity: 0.95,
          boxShadow: '-15px 15px 30px -5px rgba(0, 0, 0, 0.5)'
        };
      default:
        return {
          transform: 'translateX(0px) translateY(0) scale(0.8) rotate(0deg)',
          zIndex: 0,
          opacity: 0.9,
          boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3)'
        };
    }
  }, [currentIndex, rums.length]);

  return (
    <section id="collection" className="py-24 bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Add style for active card */}
      <style>{customStyles}</style>
      
      {/* Background Effects */}
      <BackgroundParticles />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader />

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Cards Container */}
          <div 
            className={`relative w-96 h-[500px] mx-auto ${isPaused ? 'carousel-paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {rums.map((rum, index) => (
              <RumCard
                key={rum.name}
                rum={rum}
                index={index}
                currentIndex={currentIndex}
                getCardPosition={getCardPosition}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          {/* <NavigationButtons onPrev={prevSlide} onNext={nextSlide} /> */}
        </div>

        {/* Not Your Grandpa's Candy Section */}
        <div className="mt-24 relative rounded-2xl overflow-hidden animate-scale-in group">
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

export default Collection;
