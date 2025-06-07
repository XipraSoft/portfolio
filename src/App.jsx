import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Achievement from './components/Achievement'; 
import './App.css'; // Importing global styles


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Project />
      <Achievement/>
      <Contact />
    </>
  );
}

export default App;
