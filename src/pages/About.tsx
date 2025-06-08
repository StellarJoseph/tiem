
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About TIEM Energy
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering a sustainable future with reliable solar energy solutions across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>TIEM ENERGY</strong> - Empowering a sustainable future. At TIEM ENERGY, we're committed to delivering reliable, cost-effective solar energy solutions to homes and businesses across Nigeria. From seamless installations to expert support, we make the switch to solar effortless and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-primary">🛠</span>
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded to solve Nigeria's unstable power problem. What began as a personal frustration evolved into a national mission to power homes and businesses sustainably and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary text-2xl">🎯</span>
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce dependency on unstable power grids by delivering long-lasting solar inverter systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary text-2xl">👁️‍🗨️</span>
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be Nigeria's most trusted solar provider, enabling reliable, clean power for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-primary">💡</span>
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🌱', title: 'Sustainability' },
                { icon: '🚀', title: 'Innovation' },
                { icon: '😊', title: 'Customer Satisfaction' },
                { icon: '🤝', title: 'Integrity' },
                { icon: '🏆', title: 'Excellence' },
                { icon: '🔄', title: 'Accountability' }
              ].map((value, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/20 transition-all">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Business Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="text-primary">📊</span>
              Strategic Business Info
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5-Year Goal</h3>
                <p className="text-muted-foreground">Expand to 5 Nigerian states, power 50,000+ sites, reduce grid dependency by 10%.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Target Audience</h3>
                <p className="text-muted-foreground">Ages 25–60, homeowners, SMEs, corporates, NGOs.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">USP</h3>
                <p className="text-muted-foreground">Tailored solar inverter systems with expert installation & support.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Advantages</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Skilled team</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Budget-flexible packages</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Transparent pricing</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Nationwide support</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Long-lasting components</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Emphasis on education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our solar solutions? We're here to help you make the switch to clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+2348063840230">📞 Call Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Switch to Solar Energy?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free consultation and customized quote for your home or business. Our experts will design the perfect solar solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/products">See Packages</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+2348063840230">Speak to a Consultant</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
