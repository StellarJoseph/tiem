
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adebayo Ogundimu',
      role: 'Small Business Owner, Lagos',
      content: 'TIEM Energy installed a 5KW system for my shop. My electricity bills dropped by 80% and the system works perfectly even during harmattan season.',
      rating: 5,
      initials: 'AO',
    },
    {
      name: 'Mrs. Chioma Okwu',
      role: 'Homeowner, Abuja',
      content: 'Excellent service from consultation to installation. The team was professional and the solar system has been running flawlessly for 8 months now.',
      rating: 5,
      initials: 'CO',
    },
    {
      name: 'Engr. Musa Ibrahim',
      role: 'Factory Manager, Kano',
      content: 'We installed a 50KW system for our textile factory. The quality of components and technical support from TIEM Energy is outstanding.',
      rating: 5,
      initials: 'MI',
    },
    {
      name: 'Dr. Folake Adeyemi',
      role: 'Medical Practitioner, Ibadan',
      content: 'As a doctor, reliable power is crucial for my clinic. TIEM Energy provided a customized solution that meets all our medical equipment needs.',
      rating: 5,
      initials: 'FA',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from satisfied customers across Nigeria who trust TIEM Energy for their solar solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent text-sm">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary">
                    <AvatarFallback className="text-primary-foreground font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join hundreds of satisfied customers across Nigeria</p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">2MW+</span>
              <span>Solar Installed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-primary">98%</span>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
