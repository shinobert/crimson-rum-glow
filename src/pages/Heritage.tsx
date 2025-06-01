import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Heritage = () => {
  const milestones = [
    { year: "1873", title: "The Beginning", description: "Founded by Master Distiller James Caribbean" },
    { year: "1920", title: "Golden Era", description: "Introduced our signature aging process" },
    { year: "1965", title: "International Recognition", description: "First international award at Paris Spirits Competition" },
    { year: "2010", title: "Modern Innovation", description: "State-of-the-art distillery completed" },
    { year: "2024", title: "Legacy Continues", description: "150+ years of uncompromising quality" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black relative overflow-hidden">
      {/* Background image - Mule */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <img
          src="/Images/mule.jpg"
          alt="Heritage Mule"
          className="absolute w-full h-full object-cover object-center mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rum-black/80 via-transparent to-rum-black/80"></div>
      </div>
      
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none z-5">
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
      
      <div className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white uppercase tracking-wider font-eb-garamond" style={{ fontWeight: 800 }}>
              Our <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              A legacy spanning over 150 years, rooted in tradition, driven by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="animate-fade-in-left">
              <img 
                src="/Images/cart.jpg" 
                alt="Traditional Roman Candy Cart"
                className="rounded-2xl shadow-2xl border border-rum-gold/30 w-full h-auto object-cover"
              />
            </div>
            <div className="animate-fade-in-right backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                The Story Begins
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                In 1873, Master Distiller James Caribbean set out to create the finest rum in the Caribbean. 
                Using traditional methods passed down through generations, he established what would become 
                one of the most respected rum houses in the world.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Today, we continue his legacy with the same commitment to quality, craftsmanship, and 
                the authentic Caribbean spirit that has defined our brand for over a century.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              Timeline of Excellence
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center gap-8 animate-fade-in-up backdrop-blur-sm bg-rum-black/20 rounded-2xl p-8 border border-rum-gold/20 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/80">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Heritage;
