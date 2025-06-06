import React from 'react';
import './Hero.css';
import Typewriter from './Typewriter';

const Hero = () => (
  <div className="hero">
    <div className="text">
      <h2 id='Hello'>Hello, It's me</h2>
      <h1>Usman Raza</h1>
      <h2 id="developer">And I'm  <span><Typewriter/></span></h2>
      <h3>🚀 Building seamless web experiences | Crafting clean code and powerful apps | Fullstack Developer turning ideas into reality | Developer bridging front-end & back-end magic</h3>
      <div className="social-icons">
        <img src="3.png" alt="" />
        <img src="4.png" alt="" />
        <img src="5.png" alt="" />
        <img src="6.png" alt="" />
      </div>
      <a href="#projects" className="btn">Contact Me</a>
    </div>
    <div className="hero-image">
      <img src="1.png" alt="Hero" />
    </div>
  </div>
);

export default Hero;
