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
    <section id="skills" className="section-padding bg-background w-full relative">
      <div className="container-width px-6 z-10 relative">
        <div className="mb-16 fade-up flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-muted-foreground font-mono text-xs mb-4">
            <Cpu className="w-3 h-3 text-primary" /> Technical Arsenal
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Engineering <span className="text-primary">Stack</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl text-lg">
            A comprehensive overview of the technologies and frameworks I utilize to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="interactive-card p-6 flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-white/5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground hover:border-white/10 transition-colors"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen -z-0"></div>
    </section>
  );
};

export default Skills;
