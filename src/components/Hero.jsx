import React from 'react';
import './Hero.css';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';

const handleNavClick = () => setMenuOpen(false);

const Hero = ({ animationVariant }) => (
   
  <motion.div
    className="hero"
    id="home"
    variants={animationVariant}
    initial="hidden"
    animate="visible"
  >
    <div className="text">
      <motion.h2 className="hero-greeting" variants={animationVariant}>
        Hello, It's me
      </motion.h2>

      <motion.h1 className="hero-name" variants={animationVariant}>
        Usman Raza
      </motion.h1>

      <div id="developer">
        <span className="and-im">And I'm</span>
        <br className="mobile-break" />
        <span className="typewriter-wrapper">
          <Typewriter />
        </span>
      </div>

      <motion.h3 className="hero-description" variants={animationVariant}>
        🚀 Building seamless web experiences | Crafting clean code and powerful apps | Fullstack Developer turning ideas into reality | Developer bridging front-end & back-end magic
      </motion.h3>

      <motion.div className="social-icons" variants={animationVariant}>
        <img src="3.png" alt="" loading="lazy"  />
    <a href='https://www.linkedin.com/in/muhammadusmanrazasipra/' target='blank'> <img src="4.png" alt="" loading="lazy" /></a>
        <a href='https://github.com/XipraSoft' target='blank'><img src="5.png" alt="" loading="lazy" /></a>
        <img src="6.png" alt="" loading="lazy" />
      </motion.div>

      <motion.a
        href="#contact"
        onClick={handleNavClick}
        className="btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </div>

    <motion.div className="hero-image" variants={animationVariant}>
      <img src="19.png" alt="Hero" loading="lazy" />
    </motion.div>
  </motion.div>
);

export default Hero;
