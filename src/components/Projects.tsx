import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Github, Code2, Globe, Database, ArrowRight, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import libraryLogo from '@/assets/Modern Public Library Logo Template.png';
import chatapp from '@/assets/Creative Chatting App Logo.png'
import penyywatch from '@/assets/Blue_Minimalist_Financial_Consulting_Agency_Logo__3_-removebg-preview.png'
import cubecollab from '@/assets/Add a heading.png'
import autoscribe from '@/assets/Add a heading (1).png'

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
      description:
        "AI-powered aeroponics automation system optimizing plant growth via intelligent monitoring and control.",
      detailedDescription:
        "The AERO AI project automates an aeroponics system by integrating Gemini 2.5 Flash for AI-driven optimization, MQTT for real-time data communication, Raspberry Pi as the central hub hosting a Mosquitto MQTT broker and Node.js server, ESP32 for interfacing with sensors (e.g., DHT22 for temperature/humidity, pH for nutrients) and actuators (e.g., ultrasonic foggers, pumps), and a Flutter-based dashboard for user monitoring and control. Sensor data is published via MQTT, processed by the Node.js server with Gemini API for intelligent decisions (e.g., adjusting misting based on humidity), and commands are sent back to the ESP32, while the Flutter dashboard displays real-time data and allows manual control, creating an efficient, scalable system for automated plant growth.",
      technologies: [
        "Embedded C",
        "Python",
        "Node.js",
        "Flutter",
        "Gemini AI",
        "Raspberry Pi",
      ],
      image: "/lovable-uploads/314fe94b-27e1-4b25-908d-a7cc05e75d9d.png",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "All-in-One Fitness App",
      description:
        "Comprehensive fitness companion featuring workout tracking, nutrition planning, and progress analytics.",
      detailedDescription:
        "All-In-One Fitness app project is an innovative and comprehensive platform designed to cater to the diverse needs of fitness enthusiasts, integrating features for admins, users, trainers, and experts. The app enhances user engagement by incorporating advanced functionalities like facial recognition for seamless attendance tracking, enabling accurate and efficient check-ins at gyms or fitness centers. It also includes a robust chat system, allowing users to communicate directly with trainers and experts for personalized health tips and guidance, fostering a supportive fitness community. Additionally, the app features an AI-powered chatbot, leveraging cutting-edge technology to provide instant responses, workout suggestions, and motivational support, enhancing the user experience. Built with a focus on modularity and scalability, the app aims to streamline fitness management, making it a versatile tool for users to achieve health goals.",
      technologies: ["Django", "OpenCV", "Tensorflow", "Flutter"],
      image: "/lovable-uploads/a38ac704-4929-49fe-b3b4-eba6b58a7244.png",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "Secure system with JWT authentication, enabling CRUD operations for books and members.",
      detailedDescription:
        "A comprehensive Library Management System built with robust security using JWT (JSON Web Tokens) for authentication and authorization. The system streamlines library operations through essential CRUD (Create, Read, Update, Delete) functionalities with role-based access control for administrators and librarians. Features include secure user authentication, book cataloging with advanced search capabilities, member management with verification, circulation tracking, automated due date reminders, and comprehensive administrative controls for seamless library operations.",
      technologies: [
        "MongoDb",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Tailwind CSS",
        "Cloudinary",
      ],
      image: libraryLogo,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Real Time Chat App",
      description:
        "ChatSphere: Secure, instant messaging with private rooms and file sharing using Socket.io.",
      detailedDescription:
        "ChatSphere is a fun, real-time chat app I built using the MERN stack (MongoDB for data, Express and Node.js for the backend, React for the sleek frontend) and Socket.io to make conversations feel instant and alive. It lets users sign up securely, jump into private or group rooms, send messages with typing indicators and read receipts, and even share images or files—all without any lag. Deployed on Vercel and Heroku, it's perfect for quick team huddles or casual catch-ups, slashing wait times by 80% compared to old-school polling, and the code's open on GitHub for anyone to tweak or join in!",
      technologies: [
        "MongoDb",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Tailwind CSS",
        "Cloudinary",
        "Socket.io",
        "DaisyUi",
      ],
      image: chatapp,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Penny Watch",
      description:
        "PennyWatch is a smart personal finance management app that helps users track expenses, manage budgets, and gain insights into their spending habits in real time.",
      detailedDescription:
        "PennyWatch is a personal finance app that helps users track income and expenses, understand spending habits, and make smarter financial decisions. With real-time tracking and simple insights, it gives a clear view of where money goes, making budgeting easier and more effective.",
      technologies: ["Flutter", "Hive Db", "GetX"],
      image: penyywatch,
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Cube Collab",
      description:
        "Cube Collab is a real-time collaborative platform that enables teams to create, edit, and manage projects seamlessly across multiple users in a unified workspace.",
      detailedDescription: "Cube Collab is a modern collaboration platform designed to streamline teamwork by allowing multiple users to work together in real time within a shared digital workspace. It integrates features like live editing, document synchronization, task management, and communication tools to enhance productivity and coordination among teams. Built with scalability and performance in mind, Cube Collab supports seamless interaction between frontend and backend systems, making it ideal for developers, creators, and teams who need an efficient and centralized environment to collaborate, manage projects, and track progress effectively.",
      technologies: ["MongoDb", "Express.js", "Node.js", "React", "AWS", "Docker"],
      image: cubecollab,
      github: "https://github.com/Arshadvkb/Cube-Collab",
      live: "#",
      featured: false,
    },
    {
      title: "AutoScribe",
      description:
        "AutoScribe is an AI-powered platform that helps students upload their notes and instantly get clear, concise, and structured summaries.",
      detailedDescription: "AutoScribe is a student-focused productivity tool designed to simplify studying by transforming lengthy notes into easy-to-understand summaries using AI. Students can upload their handwritten or digital notes, and the platform intelligently processes the content to generate concise summaries, key points, and organized study material. By reducing information overload and highlighting the most important concepts, AutoScribe helps students save time, improve retention, and prepare more effectively for exams, making learning more efficient and focused.",
      technologies: ["Firebase", "Python", "Node.js", "React", "Typescript", "Docker"],
      image:autoscribe,
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden border-t border-primary/5">
      {/* Precision decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none opacity-40" />
      
      <div className="container-width relative z-10">
        <ScrollReveal>
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                <Code2 className="w-4 h-4" /> Systems Architecture
              </div>
              <h2 className="font-heading text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
                Major <span className="text-primary">Works.</span>
              </h2>
            </div>
            <p className="text-foreground/40 font-bold text-xs tracking-[0.4em] uppercase bg-white/5 px-6 py-3 rounded-xl border border-white/5">
              LOG_COUNT: {projects.length}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className="group cursor-pointer interactive-card flex flex-col h-full bg-[#080808] border-white/5 hover:border-primary/20"
                onClick={() => handleCardClick(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-[#050505]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-100"
                  />
                  <div className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 backdrop-blur-2xl border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-2xl shadow-primary/20">
                    <ArrowRight className="w-6 h-6 -rotate-45" />
                  </div>
                  <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    Project.0{index + 1}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors uppercase italic">{project.title}</h3>
                  </div>
                  <p className="text-foreground/50 font-sans text-base leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-8">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-foreground/40 group-hover:border-primary/20 group-hover:text-primary transition-all">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg bg-transparent border border-white/5 text-foreground/20">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                  <div className="flex gap-4 pt-8 border-t border-white/5">
                    <button
                      className="flex-1 premium-button-secondary text-[10px] h-12 uppercase tracking-widest font-black"
                      onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                    >
                      <Github className="w-4 h-4 mr-3" /> Repository
                    </button>
                    <button
                      className="flex-1 premium-button text-[10px] h-12 uppercase tracking-widest font-black"
                      onClick={(e) => { e.stopPropagation(); handleCardClick(project); }}
                    >
                      <ArrowRight className="w-4 h-4 mr-3" /> System_Log
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden border border-primary/20 bg-[#080808] rounded-[32px] shadow-2xl backdrop-blur-3xl group [&>button]:hidden">
          {/* Custom Close Button */}
          <div 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-8 right-8 z-50 p-4 rounded-2xl bg-black/40 border border-white/10 text-foreground/40 hover:text-primary hover:border-primary/40 cursor-pointer transition-all duration-300 group/close flex items-center gap-3 backdrop-blur-xl"
          >
            <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/close:opacity-100 transition-opacity">Close</span>
            <X className="w-5 h-5" />
          </div>

          {selectedProject && (
            <div className="flex flex-col lg:flex-row min-h-[600px] max-h-[90vh] overflow-y-auto lg:overflow-hidden">
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative bg-[#050505] overflow-hidden h-[400px] lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808] z-10 lg:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-10 lg:hidden block"></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-12 left-12 z-20">
                  <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-3xl border border-primary/20 text-primary">
                    <Code2 className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col relative z-20 overflow-y-auto custom-scrollbar">
                
                <DialogHeader className="mb-12 text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary">Deployment_ID: PRJ-00{projects.indexOf(selectedProject) + 1}</span>
                    <div className="h-px flex-grow bg-primary/10" />
                  </div>
                  <DialogTitle className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">
                    {selectedProject.title}<span className="text-primary">.</span>
                  </DialogTitle>
                  <DialogDescription className="text-xs font-bold tracking-[0.4em] uppercase text-foreground/30">
                    Systems Architecture Documentation
                  </DialogDescription>
                </DialogHeader>

                <div className="flex-grow space-y-12 mb-16">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground/20">Executive_Summary</h4>
                    <p className="text-foreground/60 leading-relaxed font-sans text-lg font-light">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground/20">Integrated_Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string) => (
                        <span key={tech} className="font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-foreground/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-auto pt-10 border-t border-white/5">
                  <button className="flex-1 premium-button h-16 text-[10px] font-black uppercase tracking-[0.3em] italic" onClick={() => window.open(selectedProject.live, '_blank')}>
                    <Globe className="w-5 h-5 mr-3 text-accent" /> Execute Live_Sync
                  </button>
                  <button className="flex-1 premium-button-secondary h-16 text-[10px] font-black uppercase tracking-[0.3em] italic" onClick={() => window.open(selectedProject.github, '_blank')}>
                    <Github className="w-5 h-5 mr-3" /> Pull Source
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
