import React from 'react';

const GithubStats = () => {
  const username = "Arshadvkb";
  
  return (
    <section id="github-stats" className="section-padding bg-background w-full relative">
      <div className="container-width px-6 z-10 relative">
        <div className="mb-16 fade-up flex flex-col text-center items-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
             Code <span className="text-primary">Activity</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Live metrics and language distribution directly from GitHub, reflecting continuous integration and development pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          <div className="interactive-card p-6 md:p-10 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-6 self-start uppercase">Overview</h3>
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&title_color=3B82F6&text_color=ffffff&icon_color=06B6D4&bg_color=00000000&border_color=333333&hide_border=true&rank_icon=github`}
              alt={`${username} GitHub Stats`}
              className="w-full h-auto object-contain transition-all duration-500 max-w-lg"
            />
          </div>
          
          <div className="interactive-card p-6 md:p-10 flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-6 self-start uppercase">Top Languages</h3>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&title_color=3B82F6&text_color=ffffff&bg_color=00000000&border_color=333333&hide_border=true`}
              alt={`Top Languages for ${username}`}
              className="w-full h-auto object-contain transition-all duration-500 max-w-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_100%_100%,hsl(var(--primary)/0.03)_0%,transparent_50%)] pointer-events-none"></div>
    </section>
  );
};

export default GithubStats;
