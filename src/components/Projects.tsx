
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, Code2, Globe, Database } from 'lucide-react';
import libraryLogo from '@/assets/Modern Public Library Logo Template.png';
import chatapp from '@/assets/Creative Chatting App Logo.png'

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
      description: "AI-powered aeroponics automation system optimizing plant growth via intelligent monitoring and control.",
      detailedDescription: "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
      technologies: ["Embedded C","Python","Node.js","Flutter","Gemini AI","Raspberry Pi",],
      image: "/lovable-uploads/314fe94b-27e1-4b25-908d-a7cc05e75d9d.png",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "All-in-One Fitness App",
      description: "Comprehensive fitness companion featuring workout tracking, nutrition planning, and progress analytics.",
      detailedDescription: "All-In-One Fitness app project is an innovative and comprehensive platform designed to cater to the diverse needs of fitness enthusiasts, integrating features for admins, users, trainers, and experts. The app enhances user engagement by incorporating advanced functionalities like facial recognition for seamless attendance tracking, enabling accurate and efficient check-ins at gyms or fitness centers. It also includes a robust chat system, allowing users to communicate directly with trainers and experts for personalized health tips and guidance, fostering a supportive fitness community. Additionally, the app features an AI-powered chatbot, leveraging cutting-edge technology to provide instant responses, workout suggestions, and motivational support, enhancing the user experience. Built with a focus on modularity and scalability, the app aims to streamline fitness management, making it a versatile tool for users to achieve their health and fitness goals efficiently.",
      technologies: ["Django","OpenCV", "Tensorflow", "Flutter"],
      image: "/lovable-uploads/a38ac704-4929-49fe-b3b4-eba6b58a7244.png",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Library Management System",
      description: "Secure system with JWT authentication, enabling CRUD operations for books and members.",
      detailedDescription: "A comprehensive Library Management System built with robust security using JWT (JSON Web Tokens) for authentication and authorization. The system streamlines library operations through essential CRUD (Create, Read, Update, Delete) functionalities with role-based access control for administrators and librarians. Features include secure user authentication, book cataloging with advanced search capabilities, member management with verification, circulation tracking, automated due date reminders, and comprehensive administrative controls for seamless library operations.",
      technologies: ["MongoDb","Express.js","React.js","Node.js", "JWT", "Tailwind CSS","Cloudinary"],
      image: libraryLogo,
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Real Time Chat App",
      description: "ChatSphere: Secure, instant messaging with private rooms and file sharing using Socket.io.",
      detailedDescription: "ChatSphere is a fun, real-time chat app I built using the MERN stack (MongoDB for data, Express and Node.js for the backend, React for the sleek frontend) and Socket.io to make conversations feel instant and alive. It lets users sign up securely, jump into private or group rooms, send messages with typing indicators and read receipts, and even share images or files—all without any lag. Deployed on Vercel and Heroku, it's perfect for quick team huddles or casual catch-ups, slashing wait times by 80% compared to old-school polling, and the code's open on GitHub for anyone to tweak or join in!",
      technologies: ["MongoDb","Express.js","React.js","Node.js", "JWT", "Tailwind CSS","Cloudinary","Socket.io","DaisyUi"],
      image: chatapp,
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-width">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and experiments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card group overflow-hidden cursor-pointer flex flex-col h-full border-none shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => handleCardClick(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-md">View Details</p>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-bold tracking-tight">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-base line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/40 text-foreground/80 hover:bg-secondary/60">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                  >
                    <Github className="w-4 h-4" /> Source
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                    onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-background/80 backdrop-blur-xl">
            {selectedProject && (
              <div className="flex flex-col md:flex-row h-[80vh] md:h-auto overflow-y-auto">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</DialogTitle>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </DialogHeader>

                  <div className="flex-grow space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8 pt-4 border-t border-border">
                    <Button className="flex-1 gap-2" onClick={() => window.open(selectedProject.live, '_blank')}>
                      <Globe className="w-4 h-4" /> Live Site
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2" onClick={() => window.open(selectedProject.github, '_blank')}>
                      <Github className="w-4 h-4" /> Code
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
