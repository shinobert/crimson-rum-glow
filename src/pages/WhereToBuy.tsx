import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const WhereToBuy = () => {
  const retailers = [
    {
      name: "Total Wine & More",
      location: "New Orleans, LA",
      type: "Retail Store",
      products: "Full Collection Available"
    },
    {
      name: "Red, White, & Brew",
      location: "Hammond, LA", 
      type: "Retail Store",
      products: "Full Collection Available"
    },
    {
      name: "Dorignac's",
      location: "Metairie, LA",
      type: "Retail Store",
      products: "Full Collection Available"
    }
  ];

  const regions = [
    {
      region: "North America",
      countries: ["United States"],
      availability: "Locally Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
      
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-8 text-white uppercase tracking-wider font-eb-garamond" style={{ fontWeight: 800 }}>
              Where To <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Buy</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Find our premium rums at select retailers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 mb-16 sm:mb-20">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Featured Retailers
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {retailers.map((retailer, index) => (
                  <div 
                    key={retailer.name}
                    className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-4 sm:p-6 border border-transparent hover:border-rum-gold/50 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{retailer.name}</h3>
                      <span className="text-rum-gold text-xs sm:text-sm">{retailer.type}</span>
                    </div>
                    <p className="text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">{retailer.location}</p>
                    <p className="text-white/80 text-sm sm:text-base">{retailer.products}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Global Availability
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {regions.map((region, index) => (
                  <div 
                    key={region.region}
                    className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-4 sm:p-6 border border-transparent hover:border-rum-gold/50 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{region.region}</h3>
                      <span className="text-rum-gold text-xs sm:text-sm">{region.availability}</span>
                    </div>
                    <p className="text-white/80 text-sm sm:text-base">{region.countries.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-6 sm:p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Online Store
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
                Shop our complete collection online with worldwide shipping. 
                Enjoy exclusive online-only releases and member benefits.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                Shop Online
              </Button>
            </div>

            <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-6 sm:p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Become a Retailer
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
                Interested in carrying our premium rum collection? 
                Contact our sales team to learn about wholesale opportunities.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhereToBuy;
