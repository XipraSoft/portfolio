import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Achievement from './components/Achievement'; 
import AnimatedWrapper from './frameranimations/animationwrapper';
import { fadeUp, fadeRight } from './frameranimations/fade';
import './App.css'; // Importing global styles



function App() {
  return (
    <>
   
      <Navbar />
       <AnimatedWrapper animationVariant={fadeUp}>
      <Hero animationVariant={fadeUp} />
       </AnimatedWrapper>
       <AnimatedWrapper animationVariant={fadeRight}>
      <About />
      </AnimatedWrapper>
      <AnimatedWrapper animationVariant={fadeRight}>
      <Services />
      </AnimatedWrapper>
       <AnimatedWrapper animationVariant={fadeRight}>
      <Skills/>
      </AnimatedWrapper>
      <AnimatedWrapper animationVariant={fadeRight}>
      <Project />
      </AnimatedWrapper>
       <AnimatedWrapper animationVariant={fadeRight}>
      <Achievement/>
      </AnimatedWrapper>
      <AnimatedWrapper animationVariant={fadeRight}>
      <Contact />
      </AnimatedWrapper>
     
    </>
  );
}

export default App;
