
import React from 'react';

export const GitHubStats = () => {
    return (
        <section id="github-stats" className="container-width section-padding">
            <div className="flex flex-col items-center justify-center space-y-8 animate-fade-up">
                <div className="text-center mb-16 fade-up">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Open Source Contributions
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My coding activity and statistics on GitHub.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <div className="flex justify-center">
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=arshadvkb&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=71717a&icon_color=3b82f6&text_bold=false"
                            alt="Arshad's GitHub Stats"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=arshadvkb&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=71717a&icon_color=3b82f6&text_bold=false"
                            alt="Arshad's Top Languages"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center mt-8">
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=arshadvkb&theme=transparent&hide_border=true&title_color=3b82f6&text_color=71717a&icon_color=3b82f6&sideNums=true&sideLabels=true&fire=3b82f6&ring=3b82f6&currStreakLabel=3b82f6"
                        alt="Arshad's GitHub Streak"
                        className="w-full max-w-4xl h-auto"
                    />
                </div>
            </div>
        </section>
    );
};
