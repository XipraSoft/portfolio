import React from 'react';
import './Project.css'; 

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="project-heading">Work <span id='part'>Showcase</span></h1>
      <div className="image-grid">
        <img src="7.png" alt="Project 1" />
        <img src="8.png" alt="Project 2" />
        <img src="9.png" alt="Project 3" />
        <img src="10.png" alt="Project 4" />
        <img src="11.png" alt="Project 5" />
        <img src="12.png" alt="Project 6" />
      </div>
    </div>
  );
};

export default Project;
