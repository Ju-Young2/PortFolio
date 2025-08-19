import React from 'react';
import { personalInfo } from '../data/personalInfo';

const AboutPage = () => {
  return (
    <div className="page about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">소개</h1>
          <div className="about-content">
            <div className="profile-section">
              <div className="profile-img">
                <i className="fas fa-user"></i>
              </div>
              <div className="profile-info">
                <h2>{personalInfo.name}</h2>
                <p className="title">{personalInfo.title}</p>
              </div>
            </div>
            
            <div className="about-text">
              <h3>{personalInfo.about.intro}</h3>
              {personalInfo.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="experience-section">
              <h3>경험 & 목표</h3>
              <div className="experience-grid">
                <div className="experience-item">
                  <h4>개발 경험</h4>
                  <p>3년간의 웹 개발 경험을 통해 다양한 프로젝트를 성공적으로 완성했습니다.</p>
                </div>
                <div className="experience-item">
                  <h4>기술 스택</h4>
                  <p>React, Node.js를 중심으로 한 모던 웹 기술 스택을 활용합니다.</p>
                </div>
                <div className="experience-item">
                  <h4>협업</h4>
                  <p>팀워크를 중시하며 효율적인 커뮤니케이션을 통해 프로젝트를 진행합니다.</p>
                </div>
                <div className="experience-item">
                  <h4>학습</h4>
                  <p>새로운 기술을 지속적으로 학습하고 프로젝트에 적용하는 것을 즐깁니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;