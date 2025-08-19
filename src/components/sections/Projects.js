import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/projects';
import '../../styles/components/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;