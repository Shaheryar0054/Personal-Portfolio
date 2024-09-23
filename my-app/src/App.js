import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div>
        <section id="home">
          <Home />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="techstack">
          <Techstack />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
