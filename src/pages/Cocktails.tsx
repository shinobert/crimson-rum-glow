
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cocktails = () => {
  const cocktails = [
    {
      name: "Caribbean Gold Punch",
      rum: "Caribbean Gold 8 Year",
      ingredients: ["2 oz Caribbean Gold", "1 oz Fresh Lime Juice", "1 oz Simple Syrup", "Dash of Angostura Bitters", "Pineapple & Orange Garnish"],
      description: "A tropical classic with the perfect balance of sweet and citrus",
      image: "https://images.unsplash.com/photo-1546171753-97d8c4ffe650?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Spiced Old Fashioned",
      rum: "Spiced Reserve 12 Year",
      ingredients: ["2 oz Spiced Reserve", "1 Sugar Cube", "2 Dashes Orange Bitters", "Orange Peel", "Luxardo Cherry"],
      description: "A sophisticated twist on the classic with warm Caribbean spices",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Master's Manhattan",
      rum: "Master's Choice 21 Year",
      ingredients: ["2 oz Master's Choice", "1 oz Sweet Vermouth", "2 Dashes Aromatic Bitters", "Luxardo Cherry"],
      description: "An elegant cocktail showcasing the complexity of our finest rum",
      image: "https://images.unsplash.com/photo-1582263309913-9dc184fa6ced?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Black Label Negroni",
      rum: "Black Label 15 Year",
      ingredients: ["1 oz Black Label", "1 oz Campari", "1 oz Sweet Vermouth", "Orange Twist"],
      description: "A bold and bitter cocktail with deep, rich flavors",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Signature <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Cocktails</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Expertly crafted cocktails that showcase the versatility and complexity of our premium rums
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rum-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-rum-gold font-semibold">
                    Featured: {cocktail.rum}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                    {cocktail.name}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{cocktail.description}</p>
                  
                  <div>
                    <h4 className="text-rum-gold font-semibold mb-3">Ingredients:</h4>
                    <ul className="space-y-2">
                      {cocktail.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="text-white/70 flex items-center">
                          <span className="w-2 h-2 bg-rum-gold rounded-full mr-3"></span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 backdrop-blur-sm bg-rum-black/20 rounded-2xl p-12 border border-rum-gold/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              Mixology Masterclass
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
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
