import React from 'react';
import { Code2, Cpu, Wrench, Layers, Database, Cloud } from 'lucide-react';

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
      icon: <Layers className="w-8 h-8 text-primary" />,
    },
    {
      title: "Databases",
      description: "Data Storage Solutions",
      skills: [
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
      ],
      icon: <Database className="w-8 h-8 text-primary" />,
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
        {
          name: "C#",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
      ],
      icon: <Code2 className="w-8 h-8 text-primary" />,
    },
    {
      title: "Frontend & Mobile",
      description: "Client-side interfaces",
      skills: [
        { name: "React", logo: "https://cdn.simpleicons.org/react" },
        { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
        { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.simpleicons.org/tailwindcss",
        },
        { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" },
      ],
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      title: "Tools & Platforms",
      description: "DevOps & Workflow",
      skills: [
        { name: "Git", logo: "https://cdn.simpleicons.org/git" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
        { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
        {
          name: "VS Code",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        },
        { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
      ],
      icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud Infrastructure & Deployment",
      skills: [
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
        { name: "Firebase Hosting", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
        { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify" },
        { name: "Render", logo: "https://cdn.simpleicons.org/render" },
      ],
      icon: <Cloud className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background w-full relative">
      <div className="container-width px-6 z-10 relative">
        <div className="mb-20 fade-up border-b-2 border-primary pb-6 inline-block">
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Hardware <span className="text-primary">&</span><br/>Software
          </h2>
          <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm mt-4">
            // Tech_Stack.manifest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-border">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-transparent border-b-2 border-r-2 border-border hover:bg-card transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-8 border-b-2 border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {category.icon}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground uppercase opacity-50">CAT_0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">{category.title}</h3>
                <p className="text-sm font-mono text-muted-foreground mt-2">{category.description}</p>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase border border-border bg-background hover:border-primary hover:text-primary transition-all duration-200"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-200" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,hsl(var(--primary)/0.05)_0%,transparent_50%)] pointer-events-none"></div>
    </section>
  );
};

export default Skills;
