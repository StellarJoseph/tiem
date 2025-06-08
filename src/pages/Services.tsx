
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ContactSection from '@/components/ContactSection';

const Services = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Affordable Plans',
      description: 'Flexible options for every budget'
    },
    {
      icon: '🧠',
      title: 'Expert Consultation',
      description: 'Get the right system for your specific needs'
    },
    {
      icon: '🔧',
      title: 'Professional Installation',
      description: 'No-hassle setup with certified technicians'
    },
    {
      icon: '🌍',
      title: 'Nationwide Reach',
      description: 'Serving clients across Nigeria'
    },
    {
      icon: '🔋',
      title: 'Durable Components',
      description: 'Long-lasting, tested solar hardware'
    },
    {
      icon: '📞',
      title: 'Ongoing Support',
      description: "We're here long after installation"
    }
  ];

  const workProcess = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We understand your needs'
    },
    {
      step: 2,
      title: 'Site Assessment',
      description: 'On-site inspection and load estimation'
    },
    {
      step: 3,
      title: 'System Design',
      description: 'Tailored solution planning'
    },
    {
      step: 4,
      title: 'Installation',
      description: 'Expert installation with top-grade components'
    },
    {
      step: 5,
      title: 'Testing',
      description: 'System test and quality assurance'
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing customer care and maintenance'
    }
  ];

  const services = [
    {
      icon: '🔋',
      title: 'Sales & Supply of Premium Solar Equipment and Accessories',
      description: 'Comprehensive product list including:',
      items: [
        'Solar Panels, Inverters (Standard & Hybrid), MPPT Controllers, All-in-One Systems',
        'Batteries (LiFePO₄ and Tubular), UPS Systems, Power Gateways',
        'Solar Street Lights, Monitoring Devices, Mounting Kits, Accessories'
      ]
    },
    {
      icon: '🔍',
      title: 'Site Survey & Energy Audit',
      description: 'Detailed on-site inspections and energy needs assessment by experienced engineers.',
      items: []
    },
    {
      icon: '🏠',
      title: 'Complete Energy Transition for Homes & Businesses',
      description: 'Fully customized, scalable solar power solutions for residential and commercial clients.',
      items: []
    },
    {
      icon: '🛠',
      title: 'Installation & Maintenance Services',
      description: 'Full system setup, load management, performance optimization, and post-installation care.',
      items: []
    },
    {
      icon: '💡',
      title: 'Free Energy Consultation',
      description: 'Complimentary expert advice to help you choose the right system for your power needs.',
      items: []
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solar energy solutions tailored for Nigerian homes and businesses
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              🛠 OUR BENEFITS — Why Choose TIEM ENERGY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              🔄 HOW WE WORK — Proven Solar Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Service Offerings
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {service.items.length > 0 && (
                      <ul className="space-y-2 text-muted-foreground">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Switch to Solar Energy?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/products">See Packages</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+2348063840230">Speak to a Consultant</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/2348063840230" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Services;
