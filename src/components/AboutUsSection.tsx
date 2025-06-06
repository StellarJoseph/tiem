import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const AboutUsSection = () => {
  return <section className="py-20 bg-background">
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
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">🏢</span>
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                TIEM Energy is a leading solar solutions provider dedicated to delivering clean, affordable, and reliable energy across Nigeria. With years of experience, we design and install customized solar systems tailored to meet diverse energy needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">👥</span>
                Who We Serve
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We proudly serve homeowners, businesses, schools, and communities looking to reduce energy costs and embrace sustainable power solutions in both urban and remote areas of Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">⭐</span>
                Benefits of Patronizing Us
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  High-quality, durable solar products guaranteed to perform in Nigerian conditions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Personalized solar solutions to match your energy needs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Professional installation & dependable after-sales support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Competitive pricing with no compromise on service
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  Trusted by hundreds of customers across Nigeria
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted rounded-lg p-8 h-80 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                [Image Placeholder: Solar Installation Team or Project]
              </p>
            </div>
            
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
    </section>;
};
export default AboutUsSection;