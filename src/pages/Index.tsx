
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import ProductCategories from '@/components/ProductCategories';
import BenefitsSection from '@/components/BenefitsSection';
import USPSection from '@/components/USPSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ProductCategories />
      <BenefitsSection />
      <USPSection />
      <FeaturedProducts />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
