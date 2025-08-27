import React from 'react';
import { certificatesData } from '../../data/skills';
import '../../styles/components/Skills.css';

const Skills = ({ certificatesData: propCertificatesData }) => {
  // props로 전달된 데이터가 있으면 사용, 없으면 기본 데이터 사용
  const certificatesDataToUse = propCertificatesData || certificatesData || [];
  // certificatesData가 없거나 비어있을 경우 처리
  if (!certificatesDataToUse || certificatesDataToUse.length === 0) {
    return (
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">자격증</h2>
          <div className="no-certificates">
            <p>등록된 자격증이 없습니다.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">자격증</h2>
        <div className="certificates-grid">
          {certificatesDataToUse.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image">
                <img 
                  src={certificate.image} 
                  alt={certificate.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  <i className={certificate.icon || 'fas fa-certificate'}></i>
                  <span>자격증 이미지</span>
                </div>
              </div>
              <div className="certificate-info">
                <h3 className="certificate-name">{certificate.name}</h3>
                <div className="certificate-details">
                  <div className="detail-item">
                    <span className="detail-label">취득년월:</span>
                    <span className="detail-value">{certificate.obtainedDate}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">발급처:</span>
                    <span className="detail-value">{certificate.issuer}</span>
                  </div>
                  {certificate.validUntil && (
                    <div className="detail-item">
                      <span className="detail-label">유효기간:</span>
                      <span className="detail-value">{certificate.validUntil}</span>
                    </div>
                  )}
                  {certificate.score && (
                    <div className="detail-item">
                      <span className="detail-label">점수:</span>
                      <span className="detail-value">{certificate.score}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;