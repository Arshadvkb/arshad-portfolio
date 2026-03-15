import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, Code2, Globe, Database } from 'lucide-react';
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
      technologies: ["Embedded C","Python","Node.js","Flutter","Gemini AI","Raspberry Pi",],
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
    <section id="projects" className="section-padding bg-background relative border-y border-border">
      {/* Decorative Matrix Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      <div className="container-width relative z-10">
        <div className="mb-20 fade-up flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-primary pb-6">
          <div>
            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Featured<br/><span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm text-right">
            // Output_Directory<br/>
            [4_Items_Found]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col h-full bg-card brutal-card hover:bg-[#151515]"
              onClick={() => handleCardClick(project)}
            >
              <div className="relative aspect-video overflow-hidden border-b-2 border-border group-hover:border-primary transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                <div className="absolute top-4 right-4 bg-background text-primary font-mono text-xs font-bold px-3 py-1 border-2 border-primary shadow-[2px_2px_0_hsl(var(--primary))] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Inspect
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-foreground/80 font-sans text-lg mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="font-mono text-[10px] md:text-xs uppercase tracking-wider bg-secondary text-secondary-foreground px-2 py-1 border border-border group-hover:border-primary/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider bg-transparent text-muted-foreground px-2 py-1 border border-border">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <button
                      className="flex-1 font-mono text-xs uppercase tracking-wider bg-transparent text-foreground border border-border hover:bg-secondary py-3 flex items-center justify-center gap-2 transition-colors duration-200"
                      onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                    >
                      <Github className="w-4 h-4" /> Source
                    </button>
                    <button
                      className="flex-1 brutal-button py-3 flex items-center justify-center gap-2"
                      onClick={(e) => { e.stopPropagation(); window.open(project.live, '_blank'); }}
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden border-2 border-primary bg-background rounded-none shadow-[12px_12px_0_hsl(var(--primary))]">
            {selectedProject && (
              <div className="flex flex-col md:flex-row h-[85vh] md:h-auto overflow-y-auto">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative border-r-2 border-border">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover absolute inset-0 filter contrast-125"
                  />
                  <div className="absolute top-4 left-4 z-20 font-mono text-xs font-bold text-background bg-primary px-2 py-1 uppercase">
                    ID: {selectedProject.title.substring(0, 3).toUpperCase()}_{Math.floor(Math.random() * 1000)}
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-background relative">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-l w-0 h-0 border-t-[64px] border-t-primary border-l-[64px] border-l-transparent"></div>
                  
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 pr-8">{selectedProject.title}</DialogTitle>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span key={tech} className="font-mono text-xs uppercase tracking-wider bg-secondary text-secondary-foreground px-2 py-1 border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </DialogHeader>

                  <div className="flex-grow space-y-6 my-6">
                    <p className="text-foreground/90 leading-relaxed font-sans text-lg">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-auto pt-8 border-t-2 border-border/50">
                    <button className="flex-1 brutal-button py-4" onClick={() => window.open(selectedProject.live, '_blank')}>
                      <Globe className="w-4 h-4 inline-block mr-2 -mt-1" /> Launch_Site
                    </button>
                    <button className="flex-1 font-mono text-sm uppercase tracking-wider bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background py-4 transition-all duration-200" onClick={() => window.open(selectedProject.github, '_blank')}>
                      <Github className="w-4 h-4 inline-block mr-2 -mt-1" /> View_Code
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
