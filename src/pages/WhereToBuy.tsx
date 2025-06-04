import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const WhereToBuy = () => {
  const retailers = [
    {
      name: "Premium Spirits & Wine",
      location: "Miami, FL",
      type: "Retail Store",
      products: "Full Collection Available"
    },
    {
      name: "Caribbean Liquor Emporium",
      location: "New York, NY", 
      type: "Retail Store",
      products: "Exclusive Limited Editions"
    },
    {
      name: "Spirits Direct Online",
      location: "Nationwide Shipping",
      type: "Online Retailer",
      products: "Complete Range + Delivery"
    },
    {
      name: "The Rum House",
      location: "Los Angeles, CA",
      type: "Specialty Store",
      products: "Expert Curation"
    }
  ];

  const regions = [
    {
      region: "North America",
      countries: ["United States", "Canada", "Mexico"],
      availability: "Widely Available"
    },
    {
      region: "Caribbean",
      countries: ["Barbados", "Jamaica", "Puerto Rico", "Dominican Republic"],
      availability: "Exclusive Collections"
    },
    {
      region: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands"],
      availability: "Select Products"
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "Australia", "Singapore"],
      availability: "Premium Range"
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
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white uppercase tracking-wider font-eb-garamond" style={{ fontWeight: 800 }}>
              Where To <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Buy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Find our premium rums at select retailers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Featured Retailers
              </h2>
              <div className="space-y-6">
                {retailers.map((retailer, index) => (
                  <div 
                    key={retailer.name}
                    className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-6 border border-transparent hover:border-rum-gold/50 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{retailer.name}</h3>
                      <span className="text-rum-gold text-sm">{retailer.type}</span>
                    </div>
                    <p className="text-white/70 mb-2">{retailer.location}</p>
                    <p className="text-white/80">{retailer.products}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Global Availability
              </h2>
              <div className="space-y-6">
                {regions.map((region, index) => (
                  <div 
                    key={region.region}
                    className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-6 border border-transparent hover:border-rum-gold/50 transition-all duration-500"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{region.region}</h3>
                      <span className="text-rum-gold text-sm">{region.availability}</span>
                    </div>
                    <p className="text-white/80">{region.countries.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300 text-center">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Online Store
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Shop our complete collection online with worldwide shipping. 
                Enjoy exclusive online-only releases and member benefits.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-8 py-4">
                Shop Online
              </Button>
            </div>

            <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300 text-center">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                Become a Retailer
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Interested in carrying our premium rum collection? 
                Contact our sales team to learn about wholesale opportunities.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-8 py-4">
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
