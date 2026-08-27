import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, FolderGit2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 bg-cyber-bg overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] radial-glow-purple pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-cyber-accent tracking-widest uppercase font-space block mb-2">03 / Selected Work</span>
            <h2 className="text-4xl font-space font-extrabold tracking-tight text-white">
              Projects with Purpose
            </h2>
          </div>
          <p className="text-cyber-muted max-w-md font-normal text-sm md:text-base">
            A selective showcase of software platforms connecting databases, frontend frameworks, and GenAI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => {
            const isInProgress = project.status !== undefined;
            
            return (
              <TiltCard 
                key={project.title} 
                maxRotation={12}
                className="glass-panel rounded-2xl flex flex-col justify-between h-[420px] preserve-3d"
              >
                {/* Project Header */}
                <div className="p-6 space-y-4 preserve-3d">
                  <div className="flex justify-between items-start translate-z-20">
                    <span className="p-2.5 bg-cyber-accent/5 border border-cyber-accent/20 rounded-xl">
                      <FolderGit2 className="w-5 h-5 text-cyber-accent" />
                    </span>
                    {project.status && (
                      <span className="px-2.5 py-1 text-[10px] font-bold text-cyber-bg bg-cyber-accent rounded-full uppercase tracking-wider font-space">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1 translate-z-30">
                    <h3 className="text-xl font-space font-extrabold text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyber-accent tracking-wide uppercase">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-cyber-muted text-xs md:text-sm leading-relaxed line-clamp-4 translate-z-20">
                    {project.description}
                  </p>
                  
                  <div className="pt-2 translate-z-25">
                    <span className="block text-[10px] font-bold text-cyber-muted/80 uppercase tracking-widest mb-1.5 font-space">Contribution:</span>
                    <p className="text-xs text-cyber-text/90 italic font-normal leading-relaxed">
                      "{project.contribution}"
                    </p>
                  </div>

                  {/* Progress Bar for In-Progress Project */}
                  {isInProgress && (
                    <div className="pt-2 space-y-1.5 translate-z-20">
                      <div className="flex justify-between text-[10px] font-bold font-space text-cyber-accent">
                        <span>Development Progress</span>
                        <span>60%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-cyber-border">
                        <div className="h-full w-[60%] bg-cyber-accent shadow-cyber-glow" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer details */}
                <div className="p-6 pt-0 border-t border-cyber-border/40 mt-auto preserve-3d">
                  <div className="flex flex-wrap gap-1.5 py-3.5 translate-z-20">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-cyber-border text-cyber-text/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between translate-z-30">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-4 py-2 border border-cyber-border hover:border-cyber-accent/40 bg-cyber-bg hover:bg-cyber-accent/5 text-xs text-white hover:text-cyber-accent font-bold rounded-lg flex items-center gap-1.5 transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code Repository
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
export default Projects;
