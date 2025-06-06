
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCategories = () => {
  const categories = [
    {
      title: 'Solar Panels',
      description: 'High-efficiency solar panels for maximum energy generation',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      products: '50+ Models',
    },
    {
      title: 'Solar Inverters',
      description: 'Reliable inverters for seamless power conversion',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      products: '30+ Models',
    },
    {
      title: 'Batteries',
      description: 'Long-lasting energy storage solutions',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      products: '25+ Models',
    },
    {
      title: 'All-in-One Systems',
      description: 'Complete solar power solutions ready to install',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      products: '15+ Systems',
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Solar Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar energy products designed for Nigerian homes and businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
                  {category.products}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Browse All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
