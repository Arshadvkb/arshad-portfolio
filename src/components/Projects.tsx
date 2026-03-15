import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Github, Code2, Globe, Database, ArrowRight } from 'lucide-react';
import libraryLogo from '@/assets/Modern Public Library Logo Template.png';
import chatapp from '@/assets/Creative Chatting App Logo.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects = [
    {
      title: "Aero AI",
      description: "AI-powered aeroponics automation system optimizing plant growth via intelligent monitoring and control.",
      detailedDescription: "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
      technologies: ["Embedded C","Python","Node.js","Flutter","Gemini AI","Raspberry Pi"],
      image: "/lovable-uploads/314fe94b-27e1-4b25-908d-a7cc05e75d9d.png",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "All-in-One Fitness App",
      description: "Comprehensive fitness companion featuring workout tracking, nutrition planning, and progress analytics.",
      detailedDescription: "All-In-One Fitness app project is an innovative and comprehensive platform designed to cater to the diverse needs of fitness enthusiasts, integrating features for admins, users, trainers, and experts. The app enhances user engagement by incorporating advanced functionalities like facial recognition for seamless attendance tracking, enabling accurate and efficient check-ins at gyms or fitness centers. It also includes a robust chat system, allowing users to communicate directly with trainers and experts for personalized health tips and guidance, fostering a supportive fitness community. Additionally, the app features an AI-powered chatbot, leveraging cutting-edge technology to provide instant responses, workout suggestions, and motivational support, enhancing the user experience. Built with a focus on modularity and scalability, the app aims to streamline fitness management, making it a versatile tool for users to achieve health goals.",
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
    <section id="projects" className="section-padding bg-background relative border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-width relative z-10">
        <div className="mb-16 fade-up flex flex-col md:flex-row justify-between items-end gap-6 pb-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-muted-foreground font-mono text-xs">
              <Code2 className="w-3 h-3 text-primary" /> Case Studies
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-medium text-sm text-right bg-secondary/30 px-4 py-2 rounded-lg border border-white/5">
            Showing {projects.length} results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer interactive-card flex flex-col h-full"
              onClick={() => handleCardClick(project)}
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20 bg-card/40">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-foreground/70 font-sans text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="font-medium text-[11px] px-2.5 py-1 rounded-md bg-secondary border border-white/5 text-foreground/80 group-hover:border-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-medium text-[11px] px-2.5 py-1 rounded-md bg-transparent border border-white/5 text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    <button
                      className="flex-1 premium-button-secondary text-xs h-10 w-full"
                      onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                    >
                      <Github className="w-4 h-4 mr-2" /> Source
                    </button>
                    <button
                      className="flex-1 premium-button text-xs h-10 w-full"
                      onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden border border-white/10 bg-background/95 backdrop-blur-3xl rounded-2xl shadow-2xl">
            {selectedProject && (
              <div className="flex flex-col md:flex-row h-[85vh] md:h-auto overflow-y-auto">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background z-10 pointer-events-none md:block hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none md:hidden block"></div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative z-20">
                  
                  <DialogHeader className="mb-6 text-left">
                    <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-lg text-primary font-medium tracking-wide">
                      Systems Architecture Overview
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="font-medium text-[11px] px-2.5 py-1 rounded-md bg-secondary/50 border border-white/5 text-foreground/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow space-y-6 mb-8">
                    <p className="text-foreground/70 leading-relaxed font-sans text-base">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                    <button className="flex-1 premium-button h-12" onClick={() => window.open(selectedProject.live, '_blank')}>
                      <Globe className="w-4 h-4 mr-2" /> View Live Deployment
                    </button>
                    <button className="flex-1 premium-button-secondary h-12" onClick={() => window.open(selectedProject.github, '_blank')}>
                      <Github className="w-4 h-4 mr-2" /> Repository
                    </button>
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
