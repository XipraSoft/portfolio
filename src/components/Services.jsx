import React from 'react';
import './Services.css';

const Services = () => {
  return (

    <div className="services-section" id='service'>
      <h2>Our <span id='service'>Services</span></h2>
      <div className="services-container">
        <div className="service-card">
          <span className="icon">{'</>'}</span>
          <h3>Web Development</h3>
          <p>
Crafting responsive, high-performance websites tailored to your business needs.
From front-end to back-end — full-stack solutions that drive results.          </p>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="icon">✏️</span>
          <h3>Graphic Design</h3>
          <p>
Boost your brand's visibility and reach the right audience with strategic campaigns.
SEO, social media, and ads — all in one data-driven package.

          </p>
          <button>Read More</button>
        </div>
        <div className="service-card">
          <span className="icon">📊</span>
          <h3>Digital Marketing</h3>
          <p>
Stunning visuals that capture attention and communicate clearly.
Logos, branding, and UI/UX designs crafted with creativity and purpose.

          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
    
  );
};

export default Services;