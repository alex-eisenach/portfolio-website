import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30 relative">
      <Navbar />

      {/* Background Ambient Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[60%] right-[-10%] w-[35vw] h-[35vw] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
