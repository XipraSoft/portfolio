import React from 'react';
import './Skills.css';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'HTML', class: 'html', width: '90%' },
    { name: 'CSS', class: 'css', width: '85%' },
    { name: 'JavaScript', class: 'js', width: '83%' },
    { name: 'React.js', class: 'react', width: '75%' },
    { name: 'Node.js', class: 'node', width: '70%' },
    { name: 'MongoDB', class: 'mongo', width: '70%' },
  ];

  return (
    <div id="skills" className="skills" ref={ref}>
      <h2>
        My Skills <span id="stack">Stack</span>
      </h2>
      <div className="skills-content">
        <div className="skills-text">
          <p>
            I am a passionate Full Stack Developer with expertise in crafting responsive, modern web interfaces using HTML, CSS, and Tailwind CSS. I build dynamic, interactive UIs with JavaScript and ReactJS. On the server side, I create robust, scalable backends using Node.js and Express, efficiently managing data with MongoDB. I focus on clean, maintainable code and seamless user experiences. I thrive in collaborative environments and value clear communication throughout the development cycle. Whether it's building from scratch or enhancing existing systems, I deliver reliable, elegant solutions tailored to user needs.
          </p>
        </div>

        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <p>{skill.name}</p>
              <div className="skill-bar">
                <div
                  className={`skill-fill ${skill.class}`}
                  style={{
                    width: inView ? skill.width : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
