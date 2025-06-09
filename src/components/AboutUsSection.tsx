
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium" style={{ color: '#ffd901' }}>Our Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            What People <span style={{ color: '#d20500' }}>Say About</span> <span style={{ color: '#ffd901' }}>TIEM Energy</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Real testimonials from satisfied customers across Nigeria who trust TIEM Energy for their solar solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20 relative">
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#d20500' }}>
                  99
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Sunkanmi Adedeji</h4>
              <p className="text-sm text-muted-foreground mb-4">Factory Manager, Shomolu</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "We installed a 20KW system for our textile customization factory. The quality of hardware and technical support from TIEM Energy is outstanding."
              </p>
              <div className="flex justify-center text-accent text-sm">
                {'★'.repeat(5)}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20 relative">
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#d20500' }}>
                  99
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Dr. Folake Adeyemi</h4>
              <p className="text-sm text-muted-foreground mb-4">Medical Practitioner, Ibadan</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "As a medical practitioner, reliable power is crucial for my practice. TIEM Energy provided a customized solution that meets all our medical equipment needs."
              </p>
              <div className="flex justify-center text-accent text-sm">
                {'★'.repeat(5)}
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20 relative">
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#d20500' }}>
                  99
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Adebayo Ogundimu</h4>
              <p className="text-sm text-muted-foreground mb-4">Small Business Owner, Lagos</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "TIEM Energy installed a 5KW system for my shop. My electricity bills dropped by 80% and the system works perfectly even during harmattan season."
              </p>
              <div className="flex justify-center text-accent text-sm">
                {'★'.repeat(5)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Homeowners</h4>
              <p className="text-muted-foreground">
                Residential solar solutions for urban and rural homes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Businesses</h4>
              <p className="text-muted-foreground">
                Commercial solar systems for SMEs and large enterprises
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🏫</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Institutions</h4>
              <p className="text-muted-foreground">
                Educational institutions and community organizations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
