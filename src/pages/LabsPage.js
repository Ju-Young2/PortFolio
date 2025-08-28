import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { labsData } from '../data/labs';

const LabsPage = () => {

  return (
    <div className="page projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">실험실</h1>
          
          <div className="projects-grid">
            {labsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>


        </div>
      </section>
    </div>
  );
};

export default LabsPage;