
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs", "Django Restframewok"],
      icon: "🔧",
      gridClass: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Frontend Development", 
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "React.js"],
      icon: "🎨",
      gridClass: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart"],
      icon: "📱",
      gridClass: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL", "Sqlite", "Git", "GitHub", "Postman"],
      icon: "💾",
      gridClass: "md:col-span-2 md:row-span-1"
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
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 ${category.gridClass}`}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-center rounded-lg border border-border bg-secondary/50 px-3 py-2 text-xs font-medium text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
