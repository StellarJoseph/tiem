
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const steps = [
    {
      number: 1,
      title: "Schedule Your Energy Consultation",
      description: "We begin with a personalized conversation. Share your energy goals, ask your questions, and let us recommend solar options tailored to your needs.",
      icon: "📅"
    },
    {
      number: 2,
      title: "On-Site Assessment & Energy Audit",
      description: "Our experts visit your location to assess roof space, energy usage patterns, and feasibility—ensuring a safe and efficient solar installation plan.",
      icon: "🏠"
    },
    {
      number: 3,
      title: "Custom Solar System Design",
      description: "No one-size-fits-all here. We craft a unique system based on your audit, including ideal panel layout, inverter size, and battery configuration for your lifestyle or business.",
      icon: "⚡"
    },
    {
      number: 4,
      title: "Expert Review & Pre-Installation Briefing",
      description: "Before we lift a single panel, we walk you through every part of the plan—explaining how it all works and answering any final questions.",
      icon: "📋"
    },
    {
      number: 5,
      title: "Seamless Installation & Commissioning",
      description: "Our certified team handles everything—from panel mounting to wiring, system testing, and grid integration. You'll be up and running in no time.",
      icon: "🔧"
    },
    {
      number: 6,
      title: "Ongoing Support & System Care",
      description: "Solar is just the beginning. Enjoy continuous system monitoring, performance optimization tips, and dedicated support from our team whenever you need it.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Welcome to The TIEM Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              Your journey to uninterrupted solar power starts here. Explore our proven, step-by-step process to go solar with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                          <span className="text-2xl">{step.icon}</span>
                          {step.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="ml-16">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
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
              Have questions or ready to start? We're just a call or click away.
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
              Explore your next step today.
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

export default Experience;
