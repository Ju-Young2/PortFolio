import React, { useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/modals/ProjectModal'; // 모달 import
import { projectsData } from '../data/projects';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // 모달 상태 추가
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'fullstack', label: '풀스택' },
    { value: 'frontend', label: '프론트엔드' }, 
    // { value: 'mobile', label: '모바일' },
    { value: 'ai', label: 'AI' }
  ];

  // 선택된 카테고리에 따른 프로젝트 필터링
  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  // 프로젝트 클릭 시 모달 열기
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                onClick={() => handleProjectClick(project)} // 클릭 핸들러 추가
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

      {/* 프로젝트 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProjectsPage;