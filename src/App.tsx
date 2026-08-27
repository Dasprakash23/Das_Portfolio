import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AskDasAI from './components/AskDasAI';

export const App: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cyber-bg min-h-screen text-cyber-text relative overflow-x-hidden">
      {/* Global animated glow bubbles */}
      <div className="absolute top-10 left-10 w-96 h-96 radial-glow-cyan opacity-40 pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] radial-glow-purple opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 left-[20%] w-96 h-96 radial-glow-cyan opacity-20 pointer-events-none" />

      {/* Navigation */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Main Sections */}
      <main>
        <Hero onScrollTo={handleScrollTo} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chatbot */}
      <AskDasAI />
    </div>
  );
};

export default App;
