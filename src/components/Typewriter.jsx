import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = () => {
  const texts = [
    "FullStackDeveloper",
    "MernStackDeveloper",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (pause) return;

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setPause(true);
      setTimeout(() => setIsDeleting(true), 1000);
      setTimeout(() => setPause(false), 1000);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, pause]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="typewriter-cursor">&nbsp;</span>
    </span>
  );
};

export default Typewriter;