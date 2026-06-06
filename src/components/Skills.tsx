import React from 'react';
import { Code2, Cpu, Wrench, Layers, Database, Cloud } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

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
        { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
        { name: "Firebase Hosting", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
        { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify" },
        { name: "Render", logo: "https://cdn.simpleicons.org/render" },
      ],
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
  ];

  const specializations = [
    {
      name: "React.js",
      category: "Frontend Library",
      role: "TIER_01 // CLIENT_VIEW",
      logo: "https://cdn.simpleicons.org/react",
      glowColor: "rgba(97, 218, 251, 0.15)",
      description: "Crafting highly responsive web interfaces, optimizing rendering pathways, and managing complex state machines with extreme performance.",
      tags: ["Virtual DOM", "Context API", "Hooks", "Component Lifecycle"],
      level: 95
    },
    {
      name: "TypeScript",
      category: "Strict Typing",
      role: "COMPILER // TYPE_SYSTEM",
      logo: "https://cdn.simpleicons.org/typescript",
      glowColor: "rgba(49, 120, 198, 0.15)",
      description: "Enforcing strict compile-time types, designing custom interfaces/generics, and writing self-documenting code systems.",
      tags: ["Generics", "Utility Types", "Decorators", "Strict Mode"],
      level: 90
    },
    {
      name: "Node.js",
      category: "Server Runtime",
      role: "TIER_02 // SERVER_RUNTIME",
      logo: "https://cdn.simpleicons.org/nodedotjs",
      glowColor: "rgba(51, 153, 51, 0.15)",
      description: "Architecting non-blocking, async I/O servers, handling system events, streams, and deploying backend microservices.",
      tags: ["V8 Engine", "NPM Ecosystem", "Event Loop", "Buffer & Streams"],
      level: 92
    },
    {
      name: "Express.js",
      category: "Web Framework",
      role: "TIER_02 // ROUTING_ENGINE",
      logo: "https://cdn.simpleicons.org/express/white",
      glowColor: "rgba(255, 255, 255, 0.1)",
      description: "Building robust REST API infrastructures, implementing custom middleware controllers, CORS configurations, and error handlers.",
      tags: ["REST Routing", "Middleware Flow", "CORS & Security", "APIs"],
      level: 95
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      role: "TIER_03 // PERSISTENCE",
      logo: "https://cdn.simpleicons.org/mongodb",
      glowColor: "rgba(71, 162, 72, 0.15)",
      description: "Designing non-relational document schemas, tuning indices for performance, and writing advanced aggregate queries.",
      tags: ["Mongoose ODM", "Aggregations", "Atlas Cluster", "Schema Design"],
      level: 88
    },
    {
      name: "Git",
      category: "Version Control",
      role: "TIER_03 // VERSION_CONTROL",
      logo: "https://cdn.simpleicons.org/git",
      glowColor: "rgba(240, 80, 50, 0.15)",
      description: "Managing source code history, orchestrating complex branching workflows, resolving conflicts, and ensuring repository integrity.",
      tags: ["Branching", "Merge Conflicts", "Rebase", "Gitflow"],
      level: 92
    },
    {
      name: "Firebase",
      category: "Cloud Services",
      role: "TIER_03 // CLOUD_SERVICES",
      logo: "https://cdn.simpleicons.org/firebase",
      glowColor: "rgba(255, 202, 40, 0.15)",
      description: "Orchestrating real-time synchronized datasets, OAuth identities, serverless Cloud Functions, and edge hosting frameworks.",
      tags: ["Firestore DB", "Auth Service", "Serverless Fn", "Hosting"],
      level: 85
    }
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
              Skill <span className="text-primary text-glow">Set.</span>
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
                        id={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Core Specialization Section */}
        <ScrollReveal delay={0.2}>
          <div className="mt-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                  <Code2 className="w-4 h-4" /> Stack Specialization
                </div>
                <h3 className="font-heading text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                  Core <span className="text-primary text-glow">Specialties.</span>
                </h3>
              </div>
              <p className="text-foreground/40 max-w-md text-sm font-light leading-relaxed">
                Expert execution of full-stack engineering tools deployed to build performant, type-safe, and highly-scalable architectural solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec, index) => (
                <ScrollReveal
                  key={spec.name}
                  delay={0.1 * (index % 3)}
                  className="group relative rounded-[2rem] border border-white/5 bg-[#050505] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-card/85 hover:border-primary/20"
                >
                  {/* Subtle color glow backplate */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${spec.glowColor}, transparent 70%)`
                    }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/5 group-hover:border-primary/20 rounded-tl-[2rem] transition-colors duration-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/5 group-hover:border-primary/20 rounded-br-[2rem] transition-colors duration-500" />

                  <div className="relative z-10 space-y-6">
                    {/* Header: Level/Indicator and Role */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-foreground/30">
                        {spec.role}
                      </span>
                      <span className="text-[9px] font-mono font-bold tracking-[0.1em] text-primary bg-primary/10 border border-primary/20 rounded px-2 py-0.5">
                        CORE_MODULE
                      </span>
                    </div>

                    {/* Logo & Title */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 group-hover:scale-110">
                        <img 
                          src={spec.logo} 
                          alt={spec.name} 
                          className="w-8 h-8 object-contain filter brightness-100 group-hover:brightness-110" 
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black italic tracking-tighter text-foreground uppercase group-hover:text-primary transition-colors">
                          {spec.name}
                        </h4>
                        <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase">
                          {spec.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/50 text-xs leading-relaxed font-light min-h-[60px]">
                      {spec.description}
                    </p>

                    {/* Tech sub-tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {spec.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[9px] font-mono tracking-wider text-foreground/30 border border-white/5 rounded-md px-2 py-1 bg-white/[0.01] group-hover:border-white/10 group-hover:text-foreground/45 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Level gauge / slider */}
                  <div className="relative z-10 pt-8 space-y-2 mt-8">
                    <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-foreground/30">
                      <span>STABILITY INDEX</span>
                      <span className="text-primary font-bold group-hover:text-primary transition-colors">{spec.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${spec.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent relative"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Refined Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen -z-0"></div>
    </section>
  );
};

export default Skills;
