
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-4 border-white float-animation"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full border-2 border-white float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full border-3 border-white float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Improve Your Living with 
            <span className="block text-accent">Reliable and Uninterrupted</span>
            Solar Energy Solutions
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We Provide Affordable, Tailored Solar Systems for Homes and Businesses Across Nigeria
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Products
            </Button>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-3 text-lg"
              asChild
            >
              <a href="https://wa.link/k395rj" target="_blank" rel="noopener noreferrer">
                Get Solar Quote
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="text-white animate-bounce h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
