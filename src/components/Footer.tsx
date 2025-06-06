
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const productCategories = [
    'Solar Panels',
    'Solar Inverters',
    'Batteries',
    'All-in-One Systems',
    'Charge Controllers',
    'Mounting Systems',
  ];

  const quickLinks = [
    'About Us',
    'Products',
    'Installation Services',
    'Warranties',
    'FAQs',
    'Contact',
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/ba0ed9d0-e60e-4e7d-a66d-acfa48de53c8.png" 
              alt="TIEM Energy Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-background/80">
              Leading provider of high-quality solar energy solutions across Nigeria. Empowering homes and businesses with reliable, affordable solar power.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+2348063840230" className="hover:text-accent transition-colors">
                  +234 806 384 0230
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+2348165539671" className="hover:text-accent transition-colors">
                  +234 816 553 9671
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@tiemenergy.com" className="hover:text-accent transition-colors">
                  info@tiemenergy.com
                </a>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Product Categories</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-background/80 hover:text-accent transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Support & Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Free Consultation</li>
              <li>Installation Services</li>
              <li>Maintenance & Repair</li>
              <li>Warranty Support</li>
              <li>Technical Support</li>
              <li>24/7 Emergency Service</li>
            </ul>
            <div className="pt-4">
              <a
                href="https://wa.me/2348063840230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/80 text-sm">
            © {new Date().getFullYear()} TIEM Energy. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/80 hover:text-accent transition-colors">
              Warranty Terms
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-background/60 text-sm">
          <p>Trusted by 500+ customers across Nigeria • 2MW+ solar capacity installed • 98% customer satisfaction rate</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
