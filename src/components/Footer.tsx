import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyber-border/40 py-10 bg-cyber-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-cyber-muted">
        <div>
          <span>&copy; {currentYear} Dasprakash M. Built with intent.</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cyber-accent font-semibold font-space tracking-wide">Full Stack Developer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-border" />
          <span className="text-cyber-accent2 font-semibold font-space tracking-wide">AI Engineer</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
