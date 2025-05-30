
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rum-black via-rum-red-dark to-rum-black">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Get In <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for inquiries, partnerships, or just to share your rum stories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="animate-fade-in-left">
              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20">
                <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-rum-black/50 border border-rum-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-rum-black/50 border border-rum-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full bg-rum-black/50 border border-rum-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full bg-rum-black/50 border border-rum-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold py-4">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="animate-fade-in-right space-y-8">
              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                  Visit Our Distillery
                </h3>
                <div className="space-y-4 text-white/80">
                  <p><strong className="text-rum-gold">Address:</strong><br />
                  Caribbean Premium Rum Distillery<br />
                  123 Rum Heritage Road<br />
                  St. Michael, Barbados BB15055</p>
                  
                  <p><strong className="text-rum-gold">Phone:</strong><br />
                  +1 (246) 555-0123</p>
                  
                  <p><strong className="text-rum-gold">Email:</strong><br />
                  info@caribbeanpremiumrum.com</p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                  Business Hours
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-rum-gold/20">
                <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black">
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black">
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-rum-gold text-rum-gold hover:bg-rum-gold hover:text-rum-black">
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
