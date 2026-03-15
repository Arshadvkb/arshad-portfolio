import React from 'react';

const GithubStats = () => {
  const username = "Arshadvkb";
  
  return (
    <section id="github-stats" className="section-padding bg-background w-full relative">
      <div className="container-width px-6 z-10 relative">
        <div className="mb-12 fade-up border-b-2 border-primary pb-6 inline-block">
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Metrics <span className="text-primary">&</span><br/>Activity
          </h2>
          <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm mt-4">
            // Github_Stats.log
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="brutal-card p-6 md:p-10 group bg-card hover:bg-[#151515] flex flex-col items-center justify-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 self-start">Overview</h3>
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&title_color=ccff00&text_color=ffffff&icon_color=ccff00&bg_color=00000000&border_color=333333&hide_border=true&rank_icon=github`}
              alt={`${username} GitHub Stats`}
              className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 max-w-lg"
            />
          </div>
          
          <div className="brutal-card p-6 md:p-10 group bg-card hover:bg-[#151515] flex flex-col items-center justify-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 self-start">Top_Languages</h3>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&title_color=ccff00&text_color=ffffff&bg_color=00000000&border_color=333333&hide_border=true`}
              alt={`Top Languages for ${username}`}
              className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 max-w-lg"
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
