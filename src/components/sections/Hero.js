import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/personalInfo';
import '../../styles/components/Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{personalInfo.name}</h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <p className="hero-description">{personalInfo.description}</p>
        <div className="hero-buttons">
          <button onClick={scrollToAbout} className="cta-button primary">
            더 알아보기
          </button>
          <Link to="/projects" className="cta-button secondary">
            프로젝트 보기
          </Link>
        </div>
      </div>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;