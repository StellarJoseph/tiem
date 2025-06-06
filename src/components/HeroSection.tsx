
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
            <span className="block text-accent">Reliable Solar Energy</span>
            Solutions
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable, Tailored Solar Systems for Homes and Businesses Across Nigeria
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
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Speak to a Consultant
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-sm">📞 Call/WhatsApp:</span>
              <a href="tel:+2348063840230" className="font-medium hover:text-accent transition-colors">
                +234 806 384 0230
              </a>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <a href="tel:+2348165539671" className="font-medium hover:text-accent transition-colors">
                +234 816 553 9671
              </a>
            </div>
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
