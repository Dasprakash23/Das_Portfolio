import React from 'react';
import { ArrowRight, FileText, Send, Github, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/10 w-[40vw] h-[40vw] radial-glow-cyan pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[45vw] h-[45vw] radial-glow-purple pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
          
          {/* Hero Text */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-accent/30 bg-cyber-accent/5 text-cyber-accent text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
              Open to Opportunities
            </div>
            
            <div className="space-y-2">
              <p className="text-cyber-accent text-lg font-medium tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-space font-extrabold tracking-tight text-white leading-none">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-space font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-cyber-accent2 to-white">
                {portfolioData.title} &amp; {portfolioData.subtitle}
              </h2>
            </div>
            
            <p className="text-cyber-muted text-base md:text-lg max-w-xl font-normal leading-relaxed">
              {portfolioData.tagline} Currently pursuing my B.Tech in CSE at Christ College of Engineering and Technology (CGPA 8.4/10).
            </p>

            <div className="flex items-center gap-2 text-cyber-muted/80 text-sm">
              <MapPin className="w-4 h-4 text-cyber-accent" />
              <span>{portfolioData.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => onScrollTo('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-cyber-accent to-cyber-accent3 hover:from-cyber-accent3 hover:to-cyber-accent text-cyber-bg font-bold rounded-xl flex items-center gap-2 hover:shadow-cyber-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="resume.pdf" 
                download
                className="px-6 py-3 border border-cyber-border bg-cyber-panel/40 hover:bg-cyber-panel/80 text-white font-bold rounded-xl flex items-center gap-2 hover:border-cyber-accent/40 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-cyber-accent" />
                Download Resume
              </a>

              <button 
                onClick={() => onScrollTo('contact')}
                className="px-6 py-3 border border-transparent hover:border-cyber-border hover:bg-cyber-panel/20 text-cyber-accent font-medium rounded-xl flex items-center gap-2 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-cyber-border/30 max-w-md">
              <a 
                href={portfolioData.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 border border-cyber-border rounded-xl text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 hover:bg-cyber-accent/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 border border-cyber-border rounded-xl text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 hover:bg-cyber-accent/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Photo - With Floating Motion, Glow and Interactive 3D Tilt */}
          <div className="flex justify-center items-center">
            <TiltCard maxRotation={15} className="rounded-full preserve-3d">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-cyber-accent/30 animate-float custom-glow-pulse bg-gradient-to-tr from-cyber-accent2/20 via-cyber-accent/10 to-transparent preserve-3d">
                {/* Decorative absolute rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyber-accent2/35 animate-[spin_40s_linear_infinite] translate-z-10" />
                <div className="absolute inset-2 rounded-full border border-cyber-accent/20 animate-[spin_20s_linear_infinite_reverse] translate-z-20" />
                
                {/* Main image container */}
                <div className="w-full h-full rounded-full overflow-hidden border border-cyber-accent/40 bg-cyber-bg relative translate-z-40">
                  {/* Subtle overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/75 via-transparent to-transparent z-10 pointer-events-none" />
                  
                  {/* Image tag with fallbacks */}
                  <img 
                    src="dasprakash.png" 
                    onError={(e) => {
                      // Fallback: Use a stylish stylized SVG developer avatar with cyber lines if image is not loaded
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%230f172a'><circle cx='50' cy='50' r='50' fill='%230b1329'/><path d='M50 20 C40 20 32 28 32 38 C32 45 36 50 42 53 C26 56 16 68 16 80 L84 80 C84 68 74 56 58 53 C64 50 68 45 68 38 C68 28 60 20 50 20 Z' fill='%231e293b' stroke='%236ee7ff' stroke-width='1.5'/><circle cx='50' cy='36' r='3' fill='%236ee7ff'/><path d='M35 55 L42 48' stroke='%238b5cf6' stroke-width='1.5'/><path d='M65 55 L58 48' stroke='%238b5cf6' stroke-width='1.5'/></svg>";
                    }}
                    alt="Dasprakash M" 
                    className="w-full h-full object-cover relative z-0 transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </TiltCard>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Hero;
