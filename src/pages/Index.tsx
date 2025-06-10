
import React from 'react';
import Header from '@/components/Header';
import NewHeroSection from '@/components/NewHeroSection';
import HeroSection from '@/components/HeroSection';
import ClienteleCategoriesSection from '@/components/ClienteleCategoriesSection';
import ProductCategories from '@/components/ProductCategories';
import SolarInvestmentSection from '@/components/SolarInvestmentSection';
import ProjectsOverviewSection from '@/components/ProjectsOverviewSection';
import BenefitsSection from '@/components/BenefitsSection';
import USPSection from '@/components/USPSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <NewHeroSection />
      <HeroSection />
      <ClienteleCategoriesSection />
      <ProductCategories />
      <SolarInvestmentSection />
      <ProjectsOverviewSection />
      <BenefitsSection />
      <USPSection />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
