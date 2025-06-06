import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Awards = () => {
  const awards = [
    {
      year: "2014",
      title: "WSWA Gold Spirits Winner",
      organization: "Wine & Spirits Wholesalers of America",
      product: "Chocolate Rum",
      medal: "Gold"
    },
    {
      year: "2014",
      title: "WSWA Silver Spirits Winner",
      organization: "Wine & Spirits Wholesalers of America",
      product: "Vanilla Rum",
      medal: "Silver"
    },
    {
      year: "2014",
      title: "WSWA Spirits Winner",
      organization: "Wine & Spirits Wholesalers of America",
      product: "Roman Candy Rum",
      medal: "Gold"
    },
    {
      year: "2014",
      title: "Gold Hot Mixology Award",
      organization: "Hot Mixology Viewer's Choice Awards",
      product: "Chocolate Rum",
      medal: "Gold"
    },
    {
      year: "2021",
      title: "Gold MASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Chocolate Rum",
      medal: "Gold"
    },
    {
      year: "2021",
      title: "Silver MASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Vanilla Rum",
      medal: "Silver"
    },
    {
      year: "2021",
      title: "Silver MASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Strawberry Rum",
      medal: "Silver"
    },
    {
      year: "2021",
      title: "Silver UNMASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Chocolate Rum",
      medal: "Silver"
    },
    {
      year: "2021",
      title: "Silver UNMASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Vanilla Rum",
      medal: "Silver"
    },
    {
      year: "2021",
      title: "Silver UNMASKED PR%F Award",
      organization: "The Original PR%F Awards",
      product: "Strawberry Rum",
      medal: "Silver"
    },
    
  ];

  // Function to get medal image based on medal type and award title
  const getMedalImage = (medalType, awardTitle) => {
    // Special cases based on award titles
    if (awardTitle.includes("WSWA Spirits Winner")) {
      return '/Images/WSWA_Gold_Spirits_Winner.png';
    }
    
    if (awardTitle.includes("Hot Mixology") && medalType.toLowerCase() === 'gold') {
      return '/Images/Hot_Mixology_Gold.png';
    }
    
    // PR%F Awards
    if (awardTitle.includes("MASKED PR%F") || awardTitle.includes("UNMASKED PR%F")) {
      if (medalType.toLowerCase() === 'gold') {
        return '/Images/Gold_PR_F_Award.png';
      } else if (medalType.toLowerCase() === 'silver') {
        return '/Images/Silver_PR_F_Award.png';
      }
    }
    
    // Default cases based on medal type
    switch(medalType.toLowerCase()) {
      case 'gold':
        return '/Images/WSWA_Gold_2014.png';
      case 'silver':
        return '/Images/WSWA_Silver_2014.png';
      default:
        return null;
    }
  };

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
      
      <div className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 md:mb-8 text-white uppercase tracking-wider font-eb-garamond" style={{ fontWeight: 800 }}>
              Our <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Awards</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Recognition of excellence from the world's most prestigious spirits competitions
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
              Recent Recognition
            </h2> */}
            {awards.map((award, index) => (
              <div 
                key={`${award.year}-${award.title}`}
                className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-4 sm:p-6 md:p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">
                    {award.year}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{award.title}</h3>
                    <p className="text-white/70 text-sm sm:text-base">{award.organization}</p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">{award.product}</p>
                  </div>
                  <div className="text-right flex items-center justify-end md:justify-end mt-2 md:mt-0">
                    {getMedalImage(award.medal, award.title) && (
                      <div className="mr-2 relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <img 
                          src={getMedalImage(award.medal, award.title)} 
                          alt={`${award.medal} Medal`}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Awards;
