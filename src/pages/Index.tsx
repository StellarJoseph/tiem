
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import USPSection from '@/components/USPSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <USPSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
