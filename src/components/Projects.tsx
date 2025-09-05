
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import fitnessAppLogo from '@/assets/fitness-app-clean.png';

const Projects = () => {
  const projects = [
    {
      title: "Aero AI",
      description: "Revolutionary AI-powered aeroponics automation system that optimizes plant growth through intelligent monitoring and control of nutrients, pH levels, and environmental conditions.",
      technologies: ["Python", "Node.js", "Flutter", "Appwrite", "Embedded C", "MQTT", "Raspberry Pi", "ESP32"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "All-in-One Fitness App",
      description: "Comprehensive fitness companion featuring workout tracking, nutrition planning, progress analytics, and social features to help users achieve their health goals.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Flutter"],
      image: fitnessAppLogo,
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in full-stack development and emerging technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 btn-primary">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
