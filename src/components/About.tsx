import React from 'react';
import { Award, GraduationCap, Trophy, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-cyber-bg">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-cyber-accent tracking-widest uppercase font-space block mb-2">01 / Profile</span>
            <h2 className="text-4xl font-space font-extrabold tracking-tight text-white">
              A Developer Who Builds
            </h2>
          </div>
          <p className="text-cyber-muted max-w-md font-normal text-sm md:text-base">
            Currently pursuing B.Tech CSE with a strong interest in AI-powered products and full-stack systems.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bio Description */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <p className="text-cyber-text/90 text-base md:text-lg leading-relaxed">
              {portfolioData.about}
            </p>
            <p className="text-cyber-muted text-sm leading-relaxed">
              I enjoy turning ideas into working software — from client-server applications and databases to AI-assisted web tools. My current direction sits at the intersection of software engineering and intelligent applications.
            </p>
          </div>

          {/* Quick Facts Dashboard */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Fact 1: CGPA */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyber-accent/30 hover:shadow-cyber-glow transition-all duration-300">
              <div className="p-3 bg-cyber-accent/10 border border-cyber-accent/20 rounded-xl w-fit">
                <GraduationCap className="w-6 h-6 text-cyber-accent" />
              </div>
              <div className="mt-6">
                <span className="block text-3xl font-space font-extrabold text-white">8.4</span>
                <span className="block text-xs font-semibold text-cyber-muted uppercase tracking-wider mt-1">CGPA / 10 · up to Sem VI</span>
              </div>
            </div>

            {/* Fact 2: Expected Graduation */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyber-accent2/30 hover:shadow-purple-glow transition-all duration-300">
              <div className="p-3 bg-cyber-accent2/10 border border-cyber-accent2/20 rounded-xl w-fit">
                <Users className="w-6 h-6 text-cyber-accent2" />
              </div>
              <div className="mt-6">
                <span className="block text-3xl font-space font-extrabold text-white">2027</span>
                <span className="block text-xs font-semibold text-cyber-muted uppercase tracking-wider mt-1">Expected Graduation</span>
              </div>
            </div>

            {/* Fact 3: Symposium Prize */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyber-accent/30 hover:shadow-cyber-glow transition-all duration-300">
              <div className="p-3 bg-cyber-accent/10 border border-cyber-accent/20 rounded-xl w-fit">
                <Trophy className="w-6 h-6 text-cyber-accent" />
              </div>
              <div className="mt-6">
                <span className="block text-3xl font-space font-extrabold text-white">1st</span>
                <span className="block text-xs font-semibold text-cyber-muted uppercase tracking-wider mt-1">Mind Crush Winner</span>
              </div>
            </div>

            {/* Fact 4: Hackathon Status */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-cyber-accent2/30 hover:shadow-purple-glow transition-all duration-300">
              <div className="p-3 bg-cyber-accent2/10 border border-cyber-accent2/20 rounded-xl w-fit">
                <Award className="w-6 h-6 text-cyber-accent2" />
              </div>
              <div className="mt-6">
                <span className="block text-3xl font-space font-extrabold text-white">Top 20</span>
                <span className="block text-xs font-semibold text-cyber-muted uppercase tracking-wider mt-1">NexBuildON Finalist</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
export default About;
