import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Heritage from '@/components/Heritage';
import Collection from '@/components/Collection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Heritage />
      <Collection />
      <Footer />
    </div>
  );
};

export default Index;
