
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Info } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const projects = [
    {
      title: "Aero AI",
      description: "Revolutionary AI-powered aeroponics automation system that optimizes plant growth through intelligent monitoring and control of nutrients, pH levels, and environmental conditions.",
      detailedDescription: "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
      technologies: ["Gemini 2.5 Flash", "Python", "Node.js", "Flutter", "MQTT", "Raspberry Pi", "ESP32", "DHT22 Sensors", "pH Sensors", "Mosquitto Broker", "Embedded C"],
      image: "/lovable-uploads/314fe94b-27e1-4b25-908d-a7cc05e75d9d.png",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "All-in-One Fitness App",
      description: "Comprehensive fitness companion featuring workout tracking, nutrition planning, progress analytics, and social features to help users achieve their health goals.",
      detailedDescription: "All-In-One Fitness app project is an innovative and comprehensive platform designed to cater to the diverse needs of fitness enthusiasts, integrating features for admins, users, trainers, and experts. The app enhances user engagement by incorporating advanced functionalities like facial recognition for seamless attendance tracking, enabling accurate and efficient check-ins at gyms or fitness centers. It also includes a robust chat system, allowing users to communicate directly with trainers and experts for personalized health tips and guidance, fostering a supportive fitness community. Additionally, the app features an AI-powered chatbot, leveraging cutting-edge technology to provide instant responses, workout suggestions, and motivational support, enhancing the user experience. Built with a focus on modularity and scalability, the app aims to streamline fitness management, making it a versatile tool for users to achieve their health and fitness goals efficiently.",
      technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Flutter", "OpenCV", "Tensorflow", "Gemni 2.5 flash"],
      image: "/lovable-uploads/a38ac704-4929-49fe-b3b4-eba6b58a7244.png",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Library Management System",
      description: "Efficient library management system enabling basic CRUD operations for managing books, members, and lending records with an intuitive interface.",
      detailedDescription: "A comprehensive Library Management System that streamlines library operations through essential CRUD (Create, Read, Update, Delete) functionalities. The system allows librarians to efficiently manage book inventories, track member registrations, handle book lending and returns, and maintain detailed records. Features include book cataloging with search capabilities, member management, circulation tracking, and administrative controls for seamless library operations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API", "JavaScript", "Tailwind CSS"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 an-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in full-stack development and emerging technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glow overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => handleCardClick(project)}
            >
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                    <Button className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
