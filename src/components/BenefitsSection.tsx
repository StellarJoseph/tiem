
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'High-Quality, Durable Products',
      description: 'Solar products guaranteed to perform excellently in Nigerian conditions with proven durability and efficiency',
      icon: '⚡',
    },
    {
      title: 'Personalized Solar Solutions',
      description: 'Custom-designed solar systems tailored to your specific energy requirements and budget constraints',
      icon: '🎯',
    },
    {
      title: 'Professional Installation & Support',
      description: 'Expert installation by certified technicians with dedicated after-sales support and maintenance services',
      icon: '🔧',
    },
    {
      title: 'Competitive Pricing',
      description: 'Affordable pricing without compromising on quality or service, making solar energy accessible to all',
      icon: '💰',
    },
    {
      title: 'Trusted by Hundreds',
      description: 'Proven track record with hundreds of satisfied customers nationwide who trust our expertise',
      icon: '👥',
    },
    {
      title: 'Nigerian Expertise',
      description: 'Local expertise understanding Nigerian power challenges with solutions designed for our unique environment',
      icon: '🇳🇬',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Benefits of Patronizing TIEM Energy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why hundreds of Nigerian homes and businesses choose TIEM Energy for their solar power needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Growing Family of Satisfied Customers?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a free consultation and customized quote for your home or business. Our experts will design the perfect solar solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348063840230"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              📞 Call +234 806 384 0230
            </a>
            <a
              href="https://wa.link/k395rj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              💬 Get Solar Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
