
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs", "GraphQL"],
      icon: "🔧"
    },
    {
      title: "Frontend Development", 
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      icon: "🎨"
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Cross-platform", "Firebase", "State Management"],
      icon: "📱"
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "SQL", "PostgreSQL", "Git", "Docker", "AWS"],
      icon: "💾"
    }
  ];

  return (
    <section className="section-padding px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire development stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {skill}
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
