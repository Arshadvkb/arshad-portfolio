
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-hero">
            Arshad VKB
          </h1>
          <p className="text-hero-sub max-w-3xl mx-auto">
            Full-Stack Developer crafting innovative solutions across web, mobile, and IoT platforms
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {['Python', 'Django', 'Node.js', 'Flutter', 'Express.js', 'MongoDB', 'SQL'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-muted rounded-full border border-border hover:border-accent transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button onClick={scrollToProjects} className="btn-primary animate-glow-pulse">
            View My Work
          </Button>
          
          <div className="flex gap-4">
            <a href="https://github.com/arshadvkb" className="p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto: arshadvkb969@gmail.com" className="p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
