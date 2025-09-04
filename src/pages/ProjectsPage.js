import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'fullstack', label: '풀스택' },
    { value: 'frontend', label: '프론트엔드' }, 
    { value: 'mobile', label: '모바일' },
    { value: 'ai', label: 'AI' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="page projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">프로젝트</h1>
          
          <div className="project-filters">
            {categories.map(category => (
              <button
                key={category.value}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>해당 카테고리에 프로젝트가 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;