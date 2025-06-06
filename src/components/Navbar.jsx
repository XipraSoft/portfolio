import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo"><span id='part'>Portf</span>olio.</h1>
    <ul className="nav-links">
       <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
       <li><a href="#achievemets">Achievements</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
