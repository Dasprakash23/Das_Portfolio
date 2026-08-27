import React from 'react';
import { Briefcase, Trophy, GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-cyber-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-cyber-accent tracking-widest uppercase font-space block mb-2">04 / Journey</span>
            <h2 className="text-4xl font-space font-extrabold tracking-tight text-white">
              Experience & Achievements
            </h2>
          </div>
          <p className="text-cyber-muted max-w-md font-normal text-sm md:text-base">
            Professional steps, academic qualifications, and contest awards.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Column: Education & Experience */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space font-extrabold text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-5.5 h-5.5 text-cyber-accent" />
                Work &amp; Education
              </h3>
              
              <div className="relative border-l border-cyber-border/40 pl-6 ml-2.5 space-y-8">
                
                {/* Experience 1: AI Intern */}
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyber-accent border border-cyber-accent group-hover:scale-125 transition-transform duration-300 shadow-cyber-glow" />
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyber-accent uppercase font-space tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </div>
                      <h4 className="text-lg font-space font-bold text-white leading-tight">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-cyber-accent2/90">
                        {exp.company}
                      </p>
                      <p className="text-xs md:text-sm text-cyber-muted font-normal leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Education */}
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Bullet marker */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyber-accent2 border border-cyber-accent2 group-hover:scale-125 transition-transform duration-300 shadow-purple-glow" />
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyber-accent2 uppercase font-space tracking-wider">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {edu.duration}
                      </div>
                      <h4 className="text-lg font-space font-bold text-white leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-cyber-accent/90">
                        {edu.college}
                      </p>
                      <p className="text-xs md:text-sm text-cyber-accent/80 font-bold">
                        CGPA: {edu.cgpa}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-space font-extrabold text-white mb-6 flex items-center gap-3">
                <Trophy className="w-5.5 h-5.5 text-cyber-accent2" />
                Achievements &amp; Activities
              </h3>
              
              <div className="relative border-l border-cyber-border/40 pl-6 ml-2.5 space-y-8">
                
                {portfolioData.achievements.map((ach, index) => {
                  const isPrize = ach.title.includes("1st") || ach.title.includes("Top 20");
                  
                  return (
                    <div key={index} className="relative group">
                      {/* Bullet marker */}
                      <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border transition-transform duration-300 ${
                        isPrize 
                          ? 'bg-cyber-accent border-cyber-accent shadow-cyber-glow group-hover:scale-125' 
                          : 'bg-white/20 border-cyber-border group-hover:scale-110'
                      }`} />
                      
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyber-accent uppercase font-space tracking-wider">
                          <Award className="w-3.5 h-3.5 text-cyber-accent" />
                          Symposium &amp; Milestones
                        </div>
                        <h4 className="text-lg font-space font-bold text-white leading-tight">
                          {ach.title}
                        </h4>
                        <p className="text-xs md:text-sm text-cyber-muted font-normal leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Experience;
