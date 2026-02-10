import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Cpu, Wrench, Layers, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
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
        { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      className: "hover:border-blue-500/50"
    },
    {
      title: "Frameworks & Libraries",
      description: "Full-stack development tools",
      skills: [
        { name: "React", logo: "https://cdn.simpleicons.org/react" },
        { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
        { name: "Django", logo: "https://cdn.simpleicons.org/django" },
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", logo: "https://cdn.simpleicons.org/express/black" },
        { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" },
      ],
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      className: "hover:border-indigo-500/50"
    },

    {
      title: "Databases",
      description: "Data Storage Solutions",
      skills: [
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },

      ],
      icon: <Database className="w-5 h-5 text-purple-500" />,
      className: "hover:border-purple-500/50 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Tools & Platforms",
      description: "DevOps & Workflow",
      skills: [
        { name: "Git", logo: "https://cdn.simpleicons.org/git" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
        { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
        { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
        { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
        { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
      ],
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      className: "hover:border-amber-500/50"
    },
    {
      title: "IoT & Embedded",
      description: "Hardware & Automation",
      skills: [
        { name: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi" },
        { name: "Arduino", logo: "https://cdn.simpleicons.org/arduino" },
      ],
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      className: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background w-full">
      <div className="container-width px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated stack of technologies I use to build robust solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group bg-card/30 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.className}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{category.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground pl-1">{category.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-background border border-border/50 shadow-sm hover:border-primary/20 transition-all hover:shadow-md cursor-default"
                    >
                      <div className="flex items-center justify-center p-2 rounded-md bg-white shadow-sm border border-gray-100 group-hover/item:scale-105 transition-all duration-300">
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                      </div>
                      <span className="text-foreground/80 font-semibold group-hover/item:text-foreground transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
