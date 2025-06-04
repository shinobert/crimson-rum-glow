import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

// ContactForm component to isolate form state changes
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been sent.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300">
      <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-rum-gold bg-clip-text text-transparent">
        Send Us a Message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-white/80 mb-2" htmlFor="name">Name</label>
          <input 
            id="name"
            name="name"
            type="text" 
            className="w-full bg-rum-black/50 border border-transparent hover:border-rum-gold/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2" htmlFor="email">Email</label>
          <input 
            id="email"
            name="email"
            type="email" 
            className="w-full bg-rum-black/50 border border-transparent hover:border-rum-gold/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2" htmlFor="subject">Subject</label>
          <input 
            id="subject"
            name="subject"
            type="text" 
            className="w-full bg-rum-black/50 border border-transparent hover:border-rum-gold/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message"
            rows={5}
            className="w-full bg-rum-black/50 border border-transparent hover:border-rum-gold/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rum-gold transition-colors resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {submitStatus.message && (
          <div className={`p-3 rounded-lg ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
            {submitStatus.message}
          </div>
        )}
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-rum-gold to-rum-gold-dark text-rum-black hover:from-rum-gold-dark hover:to-rum-gold font-bold py-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

const Contact = () => {
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
              Get In <span className="bg-gradient-to-r from-rum-gold to-rum-gold-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for inquiries, partnerships, or just to share your rum stories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="animate-fade-in-left">
              <ContactForm />
            </div>

            <div className="animate-fade-in-right space-y-8">
              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300">
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

              <div className="backdrop-blur-sm bg-rum-black/30 rounded-2xl p-8 border border-transparent hover:border-rum-gold/50 transition-all duration-300">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
