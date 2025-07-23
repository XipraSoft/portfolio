import React, { useEffect, useRef } from 'react';
import './Achievement.css';


const images = [
  '13.png',
  '14.png',
  '15.png',
  '16.png',
 
];

const Project = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
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
   
    <div  id="achievement" className="achieve-container" >
      <h2 className="achieve-heading">Professional <span id='part'>Achievements</span></h2>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Project ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Project;
