import React from 'react';
import ModalOverlay from './ModalOverlay';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="project-modal">
        {/* 왼쪽 영역 - 이미지 및 프로젝트 정보 */}
        <div className="project-modal-left">
          {/* 프로젝트 이미지/아이콘 */}
          <div className="project-modal-image">
            <i className={project.icon}></i>
          </div>
          
          {/* 프로젝트 기본 정보 */}
          <div className="project-modal-info">
            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-description">{project.description}</p>
            
            {/* 기술 스택 */}
            <div className="project-modal-tech">
              <h4>사용 기술</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {/* 프로젝트 링크들 */}
            <div className="project-modal-links">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link demo-link"
                >
                  <i className="fas fa-external-link-alt"></i>
                  라이브 데모
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link github-link"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 오른쪽 영역 - 상세 내용 */}
        <div className="project-modal-right">
          <div className="project-details">
            <h3>프로젝트 상세</h3>
            
            {/* 프로젝트 개요 */}
            {project.overview && (
              <div className="detail-section">
                <h4>개요</h4>
                <p>{project.overview}</p>
              </div>
            )}
            
            {/* 주요 기능 */}
            {project.features && (
              <div className="detail-section">
                <h4>주요 기능</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* 개발 과정 */}
            {project.development && (
              <div className="detail-section">
                <h4>개발 과정</h4>
                <p>{project.development}</p>
              </div>
            )}
            
            {/* 챌린지 & 해결 */}
            {project.challenges && (
              <div className="detail-section">
                <h4>챌린지 & 해결방안</h4>
                <p>{project.challenges}</p>
              </div>
            )}
            
            {/* 학습한 점 */}
            {project.learned && (
              <div className="detail-section">
                <h4>배운 점</h4>
                <p>{project.learned}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ProjectModal;