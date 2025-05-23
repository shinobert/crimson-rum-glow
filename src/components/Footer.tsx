
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rum-red text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-rum-gold rounded-full flex items-center justify-center">
                <span className="text-rum-red font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">CARIBBEAN</span>
            </div>
            <p className="text-rum-cream/80 mb-4">
              Crafting exceptional rum since 1873. Experience the finest Caribbean tradition.
            </p>
            <div className="text-sm text-rum-cream/60">
              Drink Responsibly. 21+ Only.
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold text-rum-gold mb-4">Products</h4>
            <ul className="space-y-2 text-rum-cream/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors">Caribbean Gold</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Spiced Reserve</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Master's Choice</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold text-rum-gold mb-4">Company</h4>
            <ul className="space-y-2 text-rum-cream/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Heritage</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Distillery Tours</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <h4 className="text-lg font-bold text-rum-gold mb-4">Connect</h4>
            <ul className="space-y-2 text-rum-cream/80">
              <li><a href="#" className="hover:text-rum-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-rum-gold transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rum-cream/20 pt-8 text-center text-rum-cream/60">
          <p>&copy; 2024 Caribbean Premium Rum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
