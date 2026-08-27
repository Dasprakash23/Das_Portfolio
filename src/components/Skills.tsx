import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Database, Code, Cpu, Settings, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      title: 'Languages',
      icon: <Code className="w-5 h-5 text-cyber-accent" />,
      items: skills.languages,
    },
    {
      title: 'Frontend Development',
      icon: <Layers className="w-5 h-5 text-cyber-accent2" />,
      items: skills.frontend,
    },
    {
      title: 'Backend & APIs',
      icon: <Terminal className="w-5 h-5 text-cyber-accent" />,
      items: skills.backend,
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-cyber-accent2" />,
      items: skills.databases,
    },
    {
      title: 'AI & Generative Engineering',
      icon: <Cpu className="w-5 h-5 text-cyber-accent" />,
      items: skills.aiData,
      glow: true,
    },
    {
      title: 'Developer Tools',
      icon: <Settings className="w-5 h-5 text-cyber-accent2" />,
      items: skills.tools,
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-cyber-bg overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[35vw] h-[35vw] radial-glow-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-cyber-accent tracking-widest uppercase font-space block mb-2">02 / Technical Skills</span>
            <h2 className="text-4xl font-space font-extrabold tracking-tight text-white">
              My Technical Toolkit
            </h2>
          </div>
          <p className="text-cyber-muted max-w-md font-normal text-sm md:text-base">
            Clean structures, API integrations, and data engineering—specializing in Python systems.
          </p>
        </div>

        {/* Python Highlight Callout Card */}
        <div className="mb-12 glass-panel rounded-2xl p-8 border-2 border-cyber-accent/40 bg-gradient-to-r from-cyber-accent/5 via-cyber-accent2/5 to-transparent relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-cyber-accent/20 to-transparent pointer-events-none rounded-full blur-2xl" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyber-bg bg-cyber-accent font-space uppercase tracking-wider">
                Core Specialization
              </div>
              <h3 className="text-3xl font-space font-extrabold text-white">
                Python Engineering
              </h3>
              <p className="text-cyber-muted max-w-2xl text-sm md:text-base leading-relaxed">
                Python serves as the backbone of Dasprakash's stack, driving backend architecture (Django/DRF), data preprocessing, and AI API integrations (Generative AI endpoints and NLP routers).
              </p>
            </div>
            
            {/* Visual Prominent Python Badge */}
            <div className="flex items-center justify-center p-8 bg-cyber-bg/80 border border-cyber-accent/30 rounded-2xl shadow-cyber-glow-heavy shrink-0 transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-5xl md:text-6xl font-space font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyber-accent to-cyber-accent2">
                Python
              </span>
            </div>
          </div>
        </div>

        {/* Technical Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className={`glass-panel rounded-2xl p-6 hover:border-cyber-accent/20 transition-all duration-300 ${
                category.glow ? 'border border-cyber-accent/20 shadow-cyber-glow' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 border border-cyber-border rounded-xl">
                  {category.icon}
                </div>
                <h4 className="text-lg font-space font-bold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => {
                  const isPython = skill === "Python";
                  return (
                    <span 
                      key={skill} 
                      className={`text-xs md:text-sm px-3.5 py-2 rounded-xl transition-all duration-200 ${
                        isPython 
                          ? 'font-bold bg-cyber-accent/20 border border-cyber-accent text-cyber-accent shadow-cyber-glow'
                          : 'bg-white/5 border border-cyber-border text-cyber-text/80 hover:border-cyber-accent/30 hover:text-white'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
export default Skills;
