import React from 'react';

const LabCard = ({ lab, delay = 0 }) => {
  return (
    <div 
      className="project-card"
      style={{ 
        animationDelay: `${delay}s` 
      }}
    >
      <div className="project-img">
        <i className={lab.icon}></i>
      </div>
      <div className="project-info">
        <h3>{lab.title}</h3>
        <p>{lab.description}</p>
        <div className="project-tech">
          {lab.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {lab.demoUrl && (
            <a href={lab.demoUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> 라이브 데모 (예정)
            </a>
          )}
          {lab.githubUrl && (
            <a href={lab.githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabCard;