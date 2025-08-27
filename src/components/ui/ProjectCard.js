import React from 'react';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <div 
      className="project-card"
      style={{ 
        animationDelay: `${delay}s` 
      }}
    >
      <div className="project-img">
        <i className={project.icon}></i>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> 라이브 데모 (예정)
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;