
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsOverviewSection = () => {
  const projects = [
    {
      title: "2.5kVA Solar Install",
      location: "Lagos",
      description: "Residential solar system for 3-bedroom home",
      image: "/placeholder.svg"
    },
    {
      title: "5kVA Commercial Setup",
      location: "Abuja",
      description: "Business solar solution for retail store",
      image: "/placeholder.svg"
    },
    {
      title: "10kVA Enterprise System",
      location: "Port Harcourt", 
      description: "Large-scale solar installation for office complex",
      image: "/placeholder.svg"
    },
    {
      title: "3kVA Home Solution",
      location: "Ibadan",
      description: "Complete solar package for family residence",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Projects at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed energy solutions for homes and businesses across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <div className="text-4xl">🏠</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-primary font-medium mb-2">
                  {project.location}
                </CardDescription>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverviewSection;
