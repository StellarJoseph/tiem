
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                Who We Are
              </h2>
              <div className="h-1 w-24 bg-accent ml-4"></div>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>TIEM ENERGY</strong> - Empowering a sustainable future. At TIEM ENERGY, we're committed to delivering reliable, cost-effective solar energy solutions to homes and businesses across Nigeria. From seamless installations to expert support, we make the switch to solar effortless and rewarding. We are a community of people building a new energy system with rooftop solar at the cornerstone, helping people go solar and join together in Nigeria's renewable energy transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                Our Story
              </h2>
              <div className="h-1 w-24 bg-accent ml-4"></div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded to solve Nigeria's unstable power problem, TIEM Energy was born from personal frustration with unreliable electricity supply. What began as a quest for energy independence evolved into a national mission to power homes and businesses sustainably and affordably. Over the years, we have grown from a small startup to a trusted solar provider, delivering clean energy solutions across Nigeria while building lasting relationships with our customers and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#d20500] text-white p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 border-l-4 border-white pl-4">
                  Our Mission
                </h3>
                <div className="h-1 w-24 bg-[#ffd901] ml-4"></div>
              </div>
              <p className="text-white/90 leading-relaxed">
                We're a community of people building a new energy system with rooftop solar at the cornerstone. We help people go solar, join together, and reduce dependency on unstable power grids by delivering long-lasting solar inverter systems that empower communities across Nigeria.
              </p>
            </div>

            <div className="bg-[#ffd901] text-gray-900 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 border-l-4 border-[#d20500] pl-4">
                  Our Vision
                </h3>
                <div className="h-1 w-24 bg-[#d20500] ml-4"></div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                We envision a clean, equitable energy system that directs control and benefits back to local communities, with solar on every roof and reliable, affordable power accessible to all Nigerians, creating a sustainable energy future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
              <div className="h-1 w-24 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Sustainability</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We champion renewable energy as a cleaner, future-forward power source for Nigerian homes and businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Innovation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We continuously explore and apply the latest solar technologies to deliver advanced energy solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Customer Satisfaction</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every project is guided by our commitment to exceed client expectations with excellent service and results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Integrity</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in honesty and transparency in pricing, communication, and all customer relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Excellence</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our installations and service delivery are carried out with precision, care, and top-tier quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all h-full">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">Accountability</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We take full responsibility for the systems we deliver, offering post-installation support and guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Business Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                Strategic Business Info
              </h2>
              <div className="h-1 w-24 bg-accent ml-4"></div>
            </div>
            
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
