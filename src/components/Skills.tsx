import React from 'react';
import { Code2, Cpu, Wrench, Layers, Database, Cloud } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & APIS",
      description: "Server architecture & logic",
      skills: [
        { name: "Django", logo: "https://cdn.simpleicons.org/django" },
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", logo: "https://cdn.simpleicons.org/express/white" },
      ],
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Databases",
      description: "Data storage & modeling",
      skills: [
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
      ],
      icon: <Database className="w-6 h-6 text-primary" />,
    },
    {
      title: "Languages",
      description: "Core programming languages",
      skills: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python" },
        { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
        { name: "Java", logo: "https://cdn.simpleicons.org/openjdk" },
        { name: "C", logo: "https://cdn.simpleicons.org/c" },
        { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
      ],
      icon: <Code2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Frontend & Mobile",
      description: "Client-side interfaces",
      skills: [
        { name: "React", logo: "https://cdn.simpleicons.org/react" },
        { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
        { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" },
      ],
      icon: <Cpu className="w-6 h-6 text-primary" />,
    },
    {
      title: "Tools & Platforms",
      description: "Development workflow",
      skills: [
        { name: "Git", logo: "https://cdn.simpleicons.org/git" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
        { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
        { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
        { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
      ],
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
    {
      title: "Cloud & DevOps",
      description: "Infrastructure & Deployment",
      skills: [
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
        { name: "Firebase Hosting", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
        { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify" },
        { name: "Render", logo: "https://cdn.simpleicons.org/render" },
      ],
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background w-full relative overflow-hidden">
      <div className="container-width px-6 z-10 relative">
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              <Cpu className="w-4 h-4" /> Technical Arsenal
            </div>
            <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">
              Core <span className="text-primary text-glow">Capabilities.</span>
            </h2>
            <p className="text-foreground/40 max-w-2xl text-xl font-light leading-relaxed">
              A precise decomposition of the technologies utilized to architect high-integrity digital ecosystems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5 bg-[#050505] rounded-[2rem] overflow-hidden">
          {skillCategories.map((category, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 + (index * 0.1)} 
              direction={index % 2 === 0 ? 'up' : 'down'}
              className={`border-white/5 transition-all duration-500 group hover:bg-primary/[0.02] ${
                index % 3 !== 2 ? 'lg:border-r' : ''
              } ${
                index < 3 ? 'lg:border-b' : ''
              } ${
                index % 2 !== 1 ? 'md:border-r lg:md:border-r-0' : ''
              } ${
                index < 4 ? 'md:border-b lg:md:border-b-0' : ''
              } border-b lg:border-b-0`}
            >
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                      {category.icon}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground/20">Module.0{index + 1}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10">
                  <h3 className="text-4xl font-black tracking-tighter text-foreground uppercase italic group-hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-relaxed max-w-[200px]">{category.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 px-4 py-2 rounded-xl border border-white/5 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      
      {/* Refined Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen -z-0"></div>
    </section>
  );
};

export default Skills;
