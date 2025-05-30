
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Cocktails = () => {
  const cocktailsByFlavor = {
    chocolate: [
      {
        name: "Chocolate Mint Delight",
        rum: "Caribbean Chocolate Rum",
        ingredients: ["2 oz Chocolate Rum", "1 oz Fresh Mint Syrup", "1 oz Heavy Cream", "Dark Chocolate Shavings", "Fresh Mint Leaves"],
        description: "A rich and indulgent cocktail with deep chocolate notes and refreshing mint",
        image: "https://images.unsplash.com/photo-1546171753-97d8c4ffe650?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Caribbean Mocha Martini",
        rum: "Caribbean Chocolate Rum",
        ingredients: ["2 oz Chocolate Rum", "1 oz Coffee Liqueur", "1 oz Espresso", "0.5 oz Simple Syrup", "Cocoa Powder Rim"],
        description: "A sophisticated blend of chocolate and coffee with Caribbean flair",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80"
      }
    ],
    vanilla: [
      {
        name: "Vanilla Cream Paradise",
        rum: "Caribbean Vanilla Rum",
        ingredients: ["2 oz Vanilla Rum", "1 oz Coconut Cream", "1 oz Pineapple Juice", "0.5 oz Vanilla Syrup", "Toasted Coconut Flakes"],
        description: "A smooth and creamy tropical escape with rich vanilla undertones",
        image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Vanilla Spice Old Fashioned",
        rum: "Caribbean Vanilla Rum",
        ingredients: ["2 oz Vanilla Rum", "1 Sugar Cube", "2 Dashes Vanilla Bitters", "Orange Peel", "Cinnamon Stick"],
        description: "A classic cocktail elevated with warm vanilla and exotic spices",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80"
      }
    ],
    strawberry: [
      {
        name: "Strawberry Sunset",
        rum: "Caribbean Strawberry Rum",
        ingredients: ["2 oz Strawberry Rum", "1 oz Fresh Lime Juice", "1 oz Strawberry Puree", "0.5 oz Agave Nectar", "Fresh Strawberries"],
        description: "A vibrant and fruity cocktail that captures the essence of tropical sunsets",
        image: "https://images.unsplash.com/photo-1546171753-97d8c4ffe650?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Berry Bliss Mojito",
        rum: "Caribbean Strawberry Rum",
        ingredients: ["2 oz Strawberry Rum", "8 Fresh Mint Leaves", "6 Fresh Strawberries", "1 oz Lime Juice", "Soda Water"],
        description: "A refreshing twist on the classic mojito with sweet strawberry flavors",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  const renderCocktailCards = (cocktails: typeof cocktailsByFlavor.chocolate) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {cocktails.map((cocktail, index) => (
        <div 
          key={cocktail.name}
          className="backdrop-blur-sm bg-rum-black/30 rounded-2xl overflow-hidden border border-rum-gold/20 hover:border-rum-gold/50 transition-all duration-500 animate-fade-in-up group"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative overflow-hidden">
            <img 
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-6 text-rum-gold font-semibold text-sm md:text-base">
              Featured: {cocktail.rum}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              {cocktail.name}
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed text-sm md:text-base">{cocktail.description}</p>
            
            <div>
              <h4 className="text-rum-gold font-semibold mb-3">Ingredients:</h4>
              <ul className="space-y-2">
                {cocktail.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="text-white/70 flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-rum-gold rounded-full mr-3 flex-shrink-0"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8">
              Signature <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Cocktails</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Expertly crafted cocktails that showcase the versatility and complexity of our premium rums
            </p>
          </div>

          <Tabs defaultValue="chocolate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 md:mb-12 bg-rum-black/50 border border-rum-gold/20">
              <TabsTrigger 
                value="chocolate" 
                className="data-[state=active]:bg-rum-gold data-[state=active]:text-rum-black text-white hover:text-rum-gold transition-colors text-sm md:text-base"
              >
                Chocolate Rum
              </TabsTrigger>
              <TabsTrigger 
                value="vanilla"
                className="data-[state=active]:bg-rum-gold data-[state=active]:text-rum-black text-white hover:text-rum-gold transition-colors text-sm md:text-base"
              >
                Vanilla Rum
              </TabsTrigger>
              <TabsTrigger 
                value="strawberry"
                className="data-[state=active]:bg-rum-gold data-[state=active]:text-rum-black text-white hover:text-rum-gold transition-colors text-sm md:text-base"
              >
                Strawberry Rum
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chocolate" className="mt-0">
              {renderCocktailCards(cocktailsByFlavor.chocolate)}
            </TabsContent>

            <TabsContent value="vanilla" className="mt-0">
              {renderCocktailCards(cocktailsByFlavor.vanilla)}
            </TabsContent>

            <TabsContent value="strawberry" className="mt-0">
              {renderCocktailCards(cocktailsByFlavor.strawberry)}
            </TabsContent>
          </Tabs>

          <div className="mt-12 md:mt-20 backdrop-blur-sm bg-rum-black/20 rounded-2xl p-8 md:p-12 border border-rum-gold/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              Mixology Masterclass
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn to craft these signature cocktails and more with our expert mixologists. 
              Perfect your technique and discover new ways to enjoy our premium rums.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cocktails;
