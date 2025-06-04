import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Heritage = () => {
  const milestones = [
    { year: "1915", title: "The Wagon Was Built", description: "Sam sold coal in the winter, watermelons in the summer, and taffy on the side" },
    { year: "1946", title: "The Candy Man", description: "Sam started selling exclusively Roman Chewing Taffy from the wagon" },
    { year: "1969", title: "A Bitter Goodbye", description: "Sam passed away" },
    { year: "1971", title: "Tradition Continued", description: "Sam's grandson, Ronnie Kottemann, became the new Candy Man" },
    { year: "2014", title: "A Sweet Surprise", description: "Roman Candy Rum was birthed" }
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
              A legacy spanning over 100 years, rooted in tradition, driven by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="animate-fade-in-left">
              <img 
                src="/Images/cart.jpg" 
                alt="Traditional Roman Candy Cart"
                className="rounded-2xl shadow-2xl border border-transparent hover:border-rum-gold/50 transition-all duration-300 w-full h-full object-cover max-h-[500px]"
              />
            </div>
            <div className="animate-fade-in-right backdrop-blur-sm bg-rum-black/30 rounded-2xl py-4 px-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300">
              <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                The Story Begins
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                In 1899, the son of Italian immigrants, Sam Cortese, was riding the back of a wagon where he accidentally fell off in front of an incoming street car that resulted in having both of his legs severed off at the young age of 10.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Through perseverance, adversity, and tenacity, Sam found a way to survive and be successful by building the iconic Roman Chewing Candy wagon and selling salt water taffy out of it. His story inspires us as we continue to build upon his legacy.
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
                  className="relative h-40 animate-fade-in-up backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Year number */}
                  <div className={`absolute ${index % 2 === 0 ? 'left-8' : 'right-8'} top-1/2 transform -translate-y-1/2`}>
                    <div className="text-6xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Centered content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white/80">{milestone.description}</p>
                    </div>
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
