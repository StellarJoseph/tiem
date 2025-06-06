
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
      icon: '💡',
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
      icon: '⭐',
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

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About TIEM ENERGY
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TIEM ENERGY, we are committed to delivering reliable, cost-effective, and sustainable solar energy solutions to homes and businesses across Nigeria. Our mission is to reduce dependency on unstable power grids and empower individuals and businesses with efficient, long-lasting solar inverter systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop"
                  alt="Solar installation"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We offer a range of high-quality solar inverters tailored to meet diverse energy needs. With a focus on innovation and customer satisfaction, our expert team ensures seamless installation, top-notch maintenance, and dedicated customer support, making your switch to solar energy effortless and rewarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To reduce dependency on unstable power grids and empower individuals and businesses with efficient, long-lasting solar inverter systems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become Nigeria's most trusted provider of sustainable and cost-effective solar energy solutions, empowering communities and businesses with uninterrupted power and environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at TIEM Energy
            </p>
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

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by experienced professionals dedicated to solar energy excellence
            </p>
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He leads system design, technical operations, and innovation strategy, ensuring every installation meets international standards and client expectations.
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

      {/* 5-Year Goal */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our 5-Year Vision for Nigeria</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed">
              Expand TIEM ENERGY's market presence across all 36 states, power over 50,000 homes and businesses, reduce national grid dependency by at least 10%, empower rural and urban communities with sustainable solar solutions, and promote environmental responsibility and employment opportunities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
