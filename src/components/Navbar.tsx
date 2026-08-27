import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleClick('home'); }}
          className="flex items-center gap-2 text-2xl font-space font-bold tracking-tight text-white hover:text-cyber-accent transition-colors"
        >
          <Code2 className="w-6 h-6 text-cyber-accent" />
          <span>Das<span className="text-cyber-accent">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-cyber-accent ${
                activeSection === item.id ? 'text-cyber-accent' : 'text-cyber-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => handleClick('contact')}
            className="px-5 py-2 text-xs font-bold tracking-wider uppercase text-cyber-bg bg-cyber-accent rounded-lg hover:shadow-cyber-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-cyber-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-bg border-b border-cyber-border py-6 px-6 flex flex-col gap-5 animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
              className={`text-lg font-space font-medium transition-colors ${
                activeSection === item.id ? 'text-cyber-accent' : 'text-cyber-text/80'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => handleClick('contact')}
            className="w-full py-3 text-center text-sm font-bold tracking-wider uppercase text-cyber-bg bg-cyber-accent rounded-lg hover:shadow-cyber-glow transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
