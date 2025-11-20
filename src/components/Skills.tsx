
import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎸" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Django REST", icon: "🔧" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "jQuery", icon: "💫" },
    { name: "React.js", icon: "⚛️" },
    { name: "Flutter", icon: "📱" },
    { name: "Dart", icon: "🎯" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "SQLite", icon: "💾" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📮" }
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-foreground text-center transition-colors duration-300 group-hover:text-primary">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
