import React, { useEffect, useRef, useState } from 'react'; // Import useState
import './Project.css';

const images = [
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
];

const Project = () => {
  const trackRef = useRef(null);
  // 1. Add state to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
        // 2. Update the active index for the *next* slide before the animation starts
        // The image that is currently at index 0 is the one moving out.
        // The one that is at index 1 is moving into the first position.
        // So we calculate the next active index based on the current one.
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);

        const track = trackRef.current;
        const firstImage = track.children[0];
        track.style.transition = 'transform 0.6s ease';
        track.style.transform = 'translateX(-370px)';

        setTimeout(() => {
          track.style.transition = 'none';
          track.appendChild(firstImage);
          track.style.transform = 'translateX(0)';
        }, 600);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-container" id="project">
      <h2 className="project-heading">Work <span id='part'>Showcase</span></h2>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Project ${i + 1}`} />
          ))}
        </div>
      </div>

      {/* 3. Render the dots directly here */}
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

export default Project;