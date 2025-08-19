import React, { useState, useEffect, useRef } from 'react';

const SkillBar = ({ name, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, delay * 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level, delay]);

  return (
    <div ref={skillRef} className="skill-item">
      <div className="skill-name">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: `${isVisible ? animatedLevel : 0}%`,
            transition: `width 1s ease ${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;