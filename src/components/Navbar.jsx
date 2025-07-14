import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handler to close menu when a link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="logo"><span id='part'>Portf</span>olio.</h1>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#service" onClick={handleNavClick}>Services</a></li>
        <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
        <li><a href="#project" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#achievement" onClick={handleNavClick}>Achievements</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;