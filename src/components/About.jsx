import React from 'react';
import './About.css';

const About = () => (
  <div id="about" className="about">
    <div>
      <img src="20.png" alt="About Me" />
    </div>
    <div className="text">
    <h2>About <span id='Me'>Me</span></h2>
    <h3>FullStack Developer!</h3>
    <p>
   I'm Usman Raza, a creative force behind seamless digital experiences.
As a Full Stack MERN Developer, I specialize in building robust, scalable web applications.
I architect clean code and elegant solutions that bridge front-end and back-end flawlessly.
From idea to deployment, I transform concepts into intuitive, high-impact products.
Fueled by passion, driven by innovation — I code to create meaningful change.
I thrive in dynamic environments, constantly pushing boundaries through technology.
     </p>
      <a href="#projects" className="btn">Resume</a>
     </div>
  </div>
);

export default About;
  
