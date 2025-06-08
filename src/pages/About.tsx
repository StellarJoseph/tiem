
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const coreValues = [
    {
      title: 'Sustainability',
      description: 'We prioritize eco-friendly solutions to promote a cleaner future.',
      icon: '🌱',
    },
    {
      title: 'Innovation',
      description: 'We deliver cutting-edge, efficient solar technologies.',
      icon: '🚀',
    },
    {
      title: 'Customer Satisfaction',
      description: 'We provide seamless service, from consultation to installation and support.',
      icon: '😊',
    },
    {
      title: 'Integrity',
      description: 'We uphold transparency, trust, and ethical business practices.',
      icon: '🤝',
    },
    {
      title: 'Excellence',
      description: 'We strive for high performance in all aspects of our operations.',
      icon: '🏆',
    },
    {
      title: 'Accountability',
      description: 'We take responsibility for our actions and deliver on our promises.',
      icon: '🔄',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About TIEM Energy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering a sustainable future with reliable solar energy solutions across Nigeria
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              ✅ WHO WE ARE
            </h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">TIEM ENERGY</h3>
              <p className="text-lg text-muted-foreground mb-4">Slogan: Empowering a sustainable future</p>
              <p className="text-muted-foreground leading-relaxed">
                At TIEM ENERGY, we're committed to delivering reliable, cost-effective solar energy solutions to homes and businesses across Nigeria. From seamless installations to expert support, we make the switch to solar effortless and rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              🛠 OUR STORY
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded to solve Nigeria's unstable power problem. What began as a personal frustration evolved into a national mission to power homes and businesses sustainably and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-4">🎯 MISSION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Reduce dependency on unstable power grids by delivering long-lasting solar inverter systems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-4">👁️‍🗨️ VISION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be Nigeria's most trusted solar provider, enabling reliable, clean power for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              💡 CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Business Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              📊 STRATEGIC BUSINESS INFO
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">5-Year Goal</h3>
              <p className="text-muted-foreground">
                Expand to 5 Nigerian states, power 50,000+ sites, reduce grid dependency by 10%.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Target Audience</h3>
              <p className="text-muted-foreground">
                Ages 25–60, homeowners, SMEs, corporates, NGOs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">USP</h3>
              <p className="text-muted-foreground">
                Tailored solar inverter systems with expert installation & support.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Advantages</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Skilled team</li>
                <li>• Budget-flexible packages</li>
                <li>• Transparent pricing</li>
                <li>• Nationwide support</li>
                <li>• Long-lasting components</li>
                <li>• Emphasis on education</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Temiloluwa Ibukunoluwa Ojo
                  </h3>
                  <p className="text-primary font-semibold mb-4">Lead Engineer & Founder</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Temiloluwa is a seasoned energy professional with a BSc and MSc in Petroleum Engineering and over 8 years of experience in the energy sector. With a deep passion for clean energy and sustainable development, he founded TIEM ENERGY to provide reliable solar power solutions for Nigerians.
                  </p>
                  <blockquote className="text-primary italic border-l-4 border-primary pl-4">
                    "At TIEM ENERGY, we're not just installing solar panels — we're building energy independence for Nigerian homes and businesses."
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Get in Touch & CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">✅ Get in Touch</h2>
          <h3 className="text-2xl font-bold mb-8">Ready to Switch to Solar Energy?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/products">See Packages</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+2348063840230">Speak to a Consultant</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
