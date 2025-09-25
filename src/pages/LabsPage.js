import React, { useState } from 'react';
import LabCard from '../components/ui/LabCard';
import ProjectModal from '../components/modals/ProjectModal'; // 모달 import
import { labsData } from '../data/labs';

const LabsPage = () => {
  // 모달 상태 추가
  const [selectedLab, setSelectedLab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 실험실 클릭 시 모달 열기
  const handleLabClick = (lab) => {
    setSelectedLab(lab);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLab(null);
  };

  return (
    <div className="page projects-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">실험실</h1>
          
          <div className="projects-grid">
            {labsData.map((lab, index) => (
              <LabCard
                key={lab.id}
                lab={lab}
                delay={index * 0.1}
                onClick={() => handleLabClick(lab)} // 클릭 이벤트 추가
              />
            ))}
          </div>


        </div>
      </section>

      {/* 프로젝트 모달 */}
      {selectedLab && (
        <ProjectModal
          project={selectedLab}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LabsPage;