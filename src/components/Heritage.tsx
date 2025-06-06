import React from 'react';

const Heritage = () => {
  // Stats data with links
  const stats = [
    { value: "100+", label: "Years of Heritage", link: "/heritage" },
    { value: "10", label: "Prestigious Awards", link: "/awards" },
    { value: "3", label: "Unique Flavors", link: "#collection", isScrollLink: true }
  ];

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="heritage" className="py-24 bg-gradient-to-br from-rum-black to-rum-red-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-rum-gold/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-rum-red/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Golden particles */}
        {[...Array(10)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-10 font-eb-garamond text-center sm:text-left">
              True To Our 
              <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent block pb-3"> Heritage</span>
            </h2>
            <div className="backdrop-blur-sm bg-rum-black/20 rounded-2xl p-6 sm:p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed">
                Caribbean Rum meets a century's worth of New Orleans tradition. We perfected the flavors of our locally beloved Roman Chewing Taffy into smooth, sweet, award winning rums that will have you remembering the good ole days.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Whether it's Vanilla, Chocolate, or Strawberry - you'll find we are committed to keeping our New Orleans identity as we made the rum taste just like the taffy...but for grown ups!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-5">
              {stats.map((stat, index) => (
                <a 
                  key={index}
                  href={stat.link}
                  onClick={(e) => stat.isScrollLink ? handleScrollLink(e, stat.link) : undefined}
                  className="text-center backdrop-blur-sm bg-rum-gold/10 rounded-xl p-4 sm:p-6 border border-transparent hover:border-rum-gold/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.3),0_8px_20px_rgba(0,0,0,0.6)] hover:bg-rum-gold/20 hover:scale-105 cursor-pointer"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative group">
              <img 
                src="/Images/chocolate-rum.jpg" 
                alt="Roman Candy Chocolate Rum" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 border border-transparent hover:border-rum-gold/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rum-black/60 via-transparent to-rum-gold/20 rounded-2xl group-hover:from-rum-black/40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-rum-gold/0 to-rum-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
