
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About TIEM Energy
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering a sustainable future with reliable solar energy solutions in Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed">
                TIEM Energy is a leading solar solutions provider dedicated to delivering clean, affordable, and reliable energy across Nigeria. With years of experience, we design and install customized solar systems tailored to meet diverse energy needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Who We Serve</h3>
              <p className="text-muted-foreground leading-relaxed">
                We serve homeowners, businesses, schools, and communities seeking to reduce energy costs and embrace sustainable power solutions throughout urban and remote areas of Nigeria.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop"
              alt="TIEM Energy solar installation"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Homeowners</h4>
              <p className="text-muted-foreground">
                Residential solar solutions for urban and rural homes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Businesses</h4>
              <p className="text-muted-foreground">
                Commercial solar systems for SMEs and large enterprises
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
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
