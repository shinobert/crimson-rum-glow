import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Medal } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

// Define type for cocktail object
interface Cocktail {
  name: string;
  rum: string;
  ingredients: string[];
  description: string;
  image: string;
  activeTabName?: string;
}

const Cocktails = () => {
  const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('chocolate');
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedCocktailDetails, setSelectedCocktailDetails] = useState<Cocktail | null>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
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

  const handleOpenCocktail = (cocktail: Cocktail, event: React.MouseEvent) => {
    // Get the position and dimensions of the clicked card
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    
    // Store the exact position and dimensions of the clicked card
    setCardPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    
    // Store which tab we're in along with the cocktail details
    setSelectedCocktailDetails({
      ...cocktail,
      activeTabName: activeTab
    });
    
    setExpandedCocktail(cocktail.name);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCocktail = () => {
    setExpandedCocktail(null);
    setSelectedCocktailDetails(null);
    
    // Re-enable scrolling
    document.body.style.overflow = '';
  };

  const renderCocktailGrid = (cocktails: typeof cocktailsByFlavor.chocolate, flavor: string) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cocktails.map((cocktail, index) => (
          <motion.div 
            key={`${flavor}-${cocktail.name}`}
            className="backdrop-blur-sm bg-rum-black/30 rounded-2xl overflow-hidden border border-transparent hover:border-rum-gold/50 transition-all duration-500 group cursor-pointer h-64 sm:h-80 relative"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={(e) => handleOpenCocktail(cocktail, e)}
            initial={{ opacity: 0, y: 20, borderRadius: '1rem' }}
            animate={{ opacity: 1, y: 0, borderRadius: '1rem' }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            layout
            layoutId={`card-container-${flavor}-${cocktail.name}`}
          >
            <motion.div 
              className="absolute inset-0 w-full h-full"
              layoutId={`card-image-container-${flavor}-${cocktail.name}`}
            >
              <motion.img 
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                layoutId={`card-image-${flavor}-${cocktail.name}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rum-black via-rum-black/60 to-transparent"></div>
            </motion.div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <motion.h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent"
                layoutId={`card-title-${flavor}-${cocktail.name}`}
              >
                {cocktail.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const handleTabChange = (value: string) => {
    // Don't update state if it's the same tab
    if (value === activeTab) return;
    
    setActiveTab(value);
    setExpandedCocktail(null);
    setSelectedCocktailDetails(null);
    
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
      {/* Add CSS for perspective */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1500px;
            transform-style: preserve-3d;
          }
          
          .modal-content {
            backface-visibility: hidden;
            transform-style: preserve-3d;
          }
        `}
      </style>
      
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
              <LayoutGroup>
                <div data-tab-content data-tab-value="chocolate" className={activeTab !== 'chocolate' ? 'hidden' : ''}>
                  {renderCocktailGrid(cocktailsByFlavor.chocolate, "chocolate")}
                </div>

                <div data-tab-content data-tab-value="vanilla" className={activeTab !== 'vanilla' ? 'hidden' : ''}>
                  {renderCocktailGrid(cocktailsByFlavor.vanilla, "vanilla")}
                </div>

                <div data-tab-content data-tab-value="strawberry" className={activeTab !== 'strawberry' ? 'hidden' : ''}>
                  {renderCocktailGrid(cocktailsByFlavor.strawberry, "strawberry")}
                </div>

                {/* App Store style modal */}
                <AnimatePresence>
                  {expandedCocktail && selectedCocktailDetails && (
                    <>
                      {/* Overlay */}
                      <motion.div
                        className="fixed inset-0 bg-black/70 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Modal */}
                      <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Overlay to capture clicks outside the modal */}
                        <div 
                          className="absolute inset-0 bg-transparent pointer-events-auto" 
                          onClick={handleCloseCocktail}
                        />
                        
                        {/* This invisible div tracks the original card position for animation */}
                        <motion.div
                          className="absolute"
                          initial={{ 
                            top: cardPosition.top,
                            left: cardPosition.left,
                            width: cardPosition.width,
                            height: cardPosition.height,
                            opacity: 0
                          }}
                          layoutId={`card-container-${selectedCocktailDetails.activeTabName || activeTab}-${selectedCocktailDetails.name}`}
                        />
                        
                        {/* The actual modal content */}
                        <motion.div
                          className="backdrop-blur-sm bg-rum-red-dark/60 overflow-hidden pointer-events-auto w-[90%] max-w-4xl max-h-[85vh] overflow-y-auto perspective-1000 z-10 modal-content"
                          style={{ 
                            borderRadius: '1rem'
                          }}
                          initial={{ 
                            opacity: 0,
                            scale: 0.9,
                            borderRadius: '1rem',
                            rotateY: -180
                          }}
                          animate={{ 
                            opacity: 1,
                            scale: 1,
                            borderRadius: '1.5rem',
                            rotateY: 0
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                            borderRadius: '1rem',
                            rotateY: 180,
                            transition: {
                              type: 'spring',
                              stiffness: 120,
                              damping: 20,
                              duration: 0.5
                            }
                          }}
                          transition={{ 
                            type: 'spring',
                            stiffness: 80,
                            damping: 12,
                            duration: 0.8
                          }}
                        >
                          {/* Close button */}
                          <motion.button
                            className="absolute top-4 right-4 z-10 bg-rum-black/50 backdrop-blur-sm rounded-full p-2 text-white/70 hover:text-white transition-colors"
                            onClick={handleCloseCocktail}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.button>
                          
                          <div className="flex flex-col md:flex-row">
                            <div className="relative md:w-2/5 lg:w-1/2">
                              <motion.img 
                                src={selectedCocktailDetails.image}
                                alt={selectedCocktailDetails.name}
                                className="w-full h-64 md:h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
                            </div>
                            
                            <div className="p-6 md:p-8 flex-1">
                              <motion.h3 
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                              >
                                {selectedCocktailDetails.name}
                              </motion.h3>
                              
                              <motion.p 
                                className="text-rum-gold text-sm mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                              >
                                {selectedCocktailDetails.rum}
                              </motion.p>
                              
                              <motion.p 
                                className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                              >
                                {selectedCocktailDetails.description}
                              </motion.p>
                              
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                              >
                                <h4 className="text-rum-gold font-semibold text-lg sm:text-xl mb-3">Ingredients:</h4>
                                <ul className="space-y-2 sm:space-y-3">
                                  {selectedCocktailDetails.ingredients.map((ingredient: string, idx: number) => (
                                    <motion.li 
                                      key={idx} 
                                      className="text-white/70 flex items-center text-sm sm:text-base"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                                    >
                                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-rum-gold rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                                      {ingredient}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </LayoutGroup>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cocktails;
