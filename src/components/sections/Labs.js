import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { labsData } from '../../data/labs';
import '../../styles/components/Projects.css';

const Labs = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">실험실</h2>
        <div className="projects-grid">
          {labsData.map((project, index) => (
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

export default Labs;