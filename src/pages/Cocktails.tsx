import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Medal } from 'lucide-react';

const Cocktails = () => {
  const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('chocolate');
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ 
    left: '0%', 
    width: '33.333%',
    background: 'linear-gradient(to right, #402717, #5D3522)'
  });

  // Generate fixed positions for particles to prevent re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${4 + Math.random() * 2}s`
    }));
  }, []);

  // Update indicator position when tab changes
  useEffect(() => {
    if (tabsRef.current) {
      const tabIndex = ['chocolate', 'vanilla', 'strawberry'].indexOf(activeTab);
      if (tabIndex >= 0) {
        const background = 
          activeTab === 'chocolate' ? 'linear-gradient(to right, #402717, #5D3522)' :
          activeTab === 'vanilla' ? 'linear-gradient(to right, #F8F4E3, #F5E9C9)' :
          'linear-gradient(to right, #FBCFE8, #FDA4AF)'; // strawberry
        
        setIndicatorStyle({
          left: `${tabIndex * 33.333}%`,
          width: '33.333%',
          background
        });
      }
    }
  }, [activeTab]);

  // Read tab from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tabParam = searchParams.get('tab');
    
    // Check if the tab parameter exists and is valid
    if (tabParam && ['chocolate', 'vanilla', 'strawberry'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const cocktailsByFlavor = {
    chocolate: [
      {
        name: "Chocolate Rum Old Fashion",
        rum: "Chocolate Flavored Rum",
        ingredients: ["2 oz Roman Candy Chocolate Rum", "1 oz Aromatic Bitters", "1 oz Orange Bitters"],
        description: "In a Scotch glass, WITHOUT ICE, shake 2-3 dashes each of the bitters. Pour in about 2 oz. of Roman Candy Chocolate Rum. Now, introduce ice to cover the cocktail. Stir with a cocktail stirrer for about 30 seconds. It's ready to serve. (Note: It's important that this cocktail is mixed this way. Don't mix it directly over the ice. The ice comes last.) Enjoy!",
        image: "/Images/old-fashion.jpg"
      },
      {
        name: "Chocolate Martini",
        rum: "Chocolate Flavored Rum",
        ingredients: ["1 ½ oz Chocolate Rum", "1 oz Orchata or Rumchata Cinnamon Cream", "1 oz Milk", "Just a dash of Miletti or Godiva Chocolate Liqueur. Hershey's chocolate syrup will do. But just a dash or so. Ground Cinnamon"],
        description: "Add all ingredients into a shaker, except ground Cinnamon, with ice. Shake and pour into a chilled martini glass or cocktail glass. Dust with Cinnamon and serve.",
        image: "/Images/chocolate-martini.jpg"
      }
    ],
    vanilla: [
      {
        name: "Vanilla Cream Paradise",
        rum: "Vanilla Flavored Rum",
        ingredients: ["2 oz Vanilla Rum", "1 oz Coconut Cream", "1 oz Pineapple Juice", "0.5 oz Vanilla Syrup", "Toasted Coconut Flakes"],
        description: "A smooth and creamy tropical escape with rich vanilla undertones",
        image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Vanilla Spice Old Fashioned",
        rum: "Vanilla Flavored Rum",
        ingredients: ["2 oz Vanilla Rum", "1 Sugar Cube", "2 Dashes Vanilla Bitters", "Orange Peel", "Cinnamon Stick"],
        description: "A classic cocktail elevated with warm vanilla and exotic spices",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80"
      }
    ],
    strawberry: [
      {
        name: "Strawberry Sunset",
        rum: "Strawberry Flavored Rum",
        ingredients: ["2 oz Strawberry Rum", "1 oz Fresh Lime Juice", "1 oz Strawberry Puree", "0.5 oz Agave Nectar", "Fresh Strawberries"],
        description: "A vibrant and fruity cocktail that captures the essence of tropical sunsets",
        image: "https://images.unsplash.com/photo-1546171753-97d8c4ffe650?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Berry Bliss Mojito",
        rum: "Strawberry Flavored Rum",
        ingredients: ["2 oz Strawberry Rum", "8 Fresh Mint Leaves", "6 Fresh Strawberries", "1 oz Lime Juice", "Soda Water"],
        description: "A refreshing twist on the classic mojito with sweet strawberry flavors",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  const renderCocktailGrid = (cocktails: typeof cocktailsByFlavor.chocolate, flavor: string) => {
    // If there's an expanded cocktail, show only that one
    if (expandedCocktail) {
      const selectedCocktail = cocktails.find(c => c.name === expandedCocktail);
      
      if (!selectedCocktail) {
        return null; // This shouldn't happen, but just in case
      }
      
      return (
        <div className="space-y-4">
          <button 
            onClick={() => setExpandedCocktail(null)}
            className="mb-4 sm:mb-6 flex items-center text-rum-gold hover:text-rum-gold-light transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all {flavor} cocktails
          </button>
          
          <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl overflow-hidden border border-transparent hover:border-rum-gold/50 transition-all duration-500 animate-fade-in-up group flex flex-col md:flex-row">
            <div className="relative overflow-hidden md:w-2/5 lg:w-1/3">
              <img 
                src={selectedCocktail.image}
                alt={selectedCocktail.name}
                className="w-full h-48 sm:h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:left-6 text-rum-gold font-semibold text-xs sm:text-sm md:text-base">
                Featured: {selectedCocktail.rum}
              </div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                {selectedCocktail.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">{selectedCocktail.description}</p>
              
              <div>
                <h4 className="text-rum-gold font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">Ingredients:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedCocktail.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="text-white/70 flex items-center text-sm sm:text-base md:text-lg">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-rum-gold rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Otherwise, show the grid of cocktails
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cocktails.map((cocktail, index) => (
          <div 
            key={cocktail.name}
            className="backdrop-blur-sm bg-rum-black/30 rounded-2xl overflow-hidden border border-transparent hover:border-rum-gold/50 transition-all duration-500 animate-fade-in-up group cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => setExpandedCocktail(cocktail.name)}
          >
            <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
              <img 
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rum-black/90 via-rum-black/30 to-transparent"></div>
            </div>
            
            <div className="p-3 sm:p-4 md:p-5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                {cocktail.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-rum-gold text-xs sm:text-sm">{cocktail.rum}</p>
                <div className="text-white/80 flex items-center text-xs sm:text-sm">
                  <span>View Recipe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleTabChange = (value: string) => {
    // Don't update state if it's the same tab
    if (value === activeTab) return;
    
    setActiveTab(value);
    setExpandedCocktail(null);
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('tab', value);
    window.history.replaceState({}, '', url);
    
    // Show the correct content without rerendering
    if (contentRef.current) {
      const allContents = contentRef.current.querySelectorAll('[data-tab-content]');
      allContents.forEach(content => {
        if ((content as HTMLElement).dataset.tabValue === value) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
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
      
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-20 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 md:mb-8 text-white uppercase tracking-wider font-eb-garamond" style={{ fontWeight: 800 }}>
              Signature <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Cocktails</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Expertly crafted cocktails that showcase the versatility of our award winning rums, as well as pay homage to our roots
            </p>
          </div>

          <div className="w-full">
            {/* Add keyframes for medal wiggle animation */}
            <style>
              {`
                @keyframes wiggle {
                  0% { transform: rotate(0deg); }
                  25% { transform: rotate(-8deg); }
                  50% { transform: rotate(0deg); }
                  75% { transform: rotate(8deg); }
                  100% { transform: rotate(0deg); }
                }
                button:hover .medal-icon {
                  animation: wiggle 0.6s ease-in-out;
                }
                .medal-gold {
                  filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.7));
                }
                .medal-vanilla {
                  filter: drop-shadow(0 0 3px rgba(180, 83, 9, 0.7));
                }
                .medal-strawberry {
                  filter: drop-shadow(0 0 3px rgba(244, 114, 182, 0.7));
                }
                button:hover .medal-gold {
                  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.9));
                }
                button:hover .medal-vanilla {
                  filter: drop-shadow(0 0 5px rgba(180, 83, 9, 0.9));
                }
                button:hover .medal-strawberry {
                  filter: drop-shadow(0 0 5px rgba(244, 114, 182, 0.9));
                }
              `}
            </style>

            <div ref={tabsRef} className="grid w-full grid-cols-3 mb-8 md:mb-12 bg-rum-black/50 border border-transparent rounded-md transition-all duration-300 relative">
              {/* Sliding background indicator */}
              <div 
                className="absolute h-full rounded-md transition-all duration-500 ease-in-out z-0" 
                style={{ 
                  left: indicatorStyle.left, 
                  width: indicatorStyle.width,
                  background: indicatorStyle.background,
                  bottom: 0
                }}
              ></div>
              
              <button 
                onClick={() => handleTabChange('chocolate')}
                className={`py-2 px-3 sm:px-4 text-white text-xs sm:text-sm md:text-base flex items-center justify-center relative z-10 font-bold`}
                style={{ color: activeTab === 'chocolate' ? '#FFF8E1' : '' }}
              >
                <span className="medal-icon inline-block">
                  <Medal className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 stroke-[#FFD700] fill-none medal-gold" />
                </span>
                Chocolate Rum
              </button>
              <button 
                onClick={() => handleTabChange('vanilla')}
                className={`py-2 px-3 sm:px-4 text-white text-xs sm:text-sm md:text-base flex items-center justify-center relative z-10 font-bold`}
                style={{ color: activeTab === 'vanilla' ? '#92400E' : '' }}
              >
                <span className="medal-icon inline-block">
                  <Medal className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 stroke-[#C0C0C0] fill-none medal-vanilla" />
                </span>
                Vanilla Rum
              </button>
              <button 
                onClick={() => handleTabChange('strawberry')}
                className={`py-2 px-3 sm:px-4 text-white text-xs sm:text-sm md:text-base flex items-center justify-center relative z-10 font-bold`}
                style={{ color: activeTab === 'strawberry' ? '#DB2777' : '' }}
              >
                <span className="medal-icon inline-block">
                  <Medal className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 stroke-[#C0C0C0] fill-none medal-strawberry" />
                </span>
                Strawberry Rum
              </button>
            </div>

            <div ref={contentRef} className="mt-0">
              <div data-tab-content data-tab-value="chocolate" className={activeTab !== 'chocolate' ? 'hidden' : ''}>
                {renderCocktailGrid(cocktailsByFlavor.chocolate, "chocolate")}
              </div>

              <div data-tab-content data-tab-value="vanilla" className={activeTab !== 'vanilla' ? 'hidden' : ''}>
                {renderCocktailGrid(cocktailsByFlavor.vanilla, "vanilla")}
              </div>

              <div data-tab-content data-tab-value="strawberry" className={activeTab !== 'strawberry' ? 'hidden' : ''}>
                {renderCocktailGrid(cocktailsByFlavor.strawberry, "strawberry")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cocktails;
