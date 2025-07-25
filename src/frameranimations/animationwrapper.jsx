
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedWrapper = ({
  children,
  animationVariant,
  triggerOnce = false,
  threshold = 0.2,
}) => {
  const [ref, inView] = useInView({ triggerOnce, threshold });
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    const handleHashChange = () => {
      setAnimationKey(Date.now());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <motion.div
      key={animationKey}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariant}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
