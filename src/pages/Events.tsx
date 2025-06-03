import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      date: "August 2, 2025 - August 3, 2025",
      title: "LRA Showcase 2025",
      location: "New Orleans Morial Convention Center | New Orleans",
      description: "Come get a sample of our delicious rum. and walk away with a bottle of your own!"
    },
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
              Upcoming <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Join us for exclusive tastings, tours, and experiences celebrating the art of rum
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.title}
                className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20 hover:border-rum-gold/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="text-rum-gold font-semibold mb-2">{event.date}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  <p className="text-white/70 mb-4">{event.location}</p>
                  <p className="text-white/90 leading-relaxed mb-6">{event.description}</p>
                </div>
                {/* <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">
                    {event.price}
                  </div>
                  <Button className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold">
                    Book Now
                  </Button>
                </div> */}
              </div>
            ))}
          </div>

          <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-12 border border-rum-gold/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              Private Events
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Looking to host a private tasting or corporate event? Our team can create a bespoke experience 
              tailored to your needs, featuring our finest rums and expert guidance.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold px-12 py-6 text-lg">
              Contact Our Events Team
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
