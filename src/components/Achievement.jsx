import React, { useEffect, useRef, useState } from 'react';
import './Achievement.css';

const images = ['13.png', '14.png', '15.png', '16.png'];

const Achievement = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
        // Update the active index to the next image in the sequence
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);

        const track = trackRef.current;
        const firstImage = track.children[0];

        // Start the slide animation
        track.style.transition = 'transform 0.6s ease';
        track.style.transform = 'translateX(-370px)'; // Slide left by one card width + margin

        // After the transition ends, move the card and reset the position
        setTimeout(() => {
          track.style.transition = 'none'; // Disable transition for the reset
          track.appendChild(firstImage); // Move the first image to the end
          track.style.transform = 'translateX(0)'; // Instantly reset position
        }, 600); // This should match the transition duration
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="achievement" className="achieve-container">
      <h2 className="achieve-heading">
        Professional <span id="part">Achievements</span>
      </h2>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Project ${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Dots for carousel navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Achievement;