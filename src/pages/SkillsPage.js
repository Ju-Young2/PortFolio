import React from 'react';
import Skills from '../components/sections/Skills';

const SkillsPage = () => {
  return (
    <div className="page skills-page">
      <Skills />
      <section className="section">
        <div className="container">
          <h2 className="section-title">기술 상세 설명</h2>
          <div className="tech-details">
            <div className="tech-category">
              <h3>프론트엔드 개발</h3>
              <p>사용자 인터페이스 개발에 중점을 두고 있으며, React를 주력으로 사용합니다. 
                 반응형 웹 디자인과 접근성을 고려한 UI/UX 구현에 경험이 있습니다.</p>
              <ul>
                <li>컴포넌트 기반 개발</li>
                <li>상태 관리 (Redux, Context API)</li>
                <li>반응형 웹 디자인</li>
                <li>웹 접근성 (WCAG 가이드라인)</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h3>백엔드 개발</h3>
              <p>Node.js와 Python을 활용한 서버 개발 경험이 있으며, 
                 RESTful API 설계와 데이터베이스 관리에 능숙합니다.</p>
              <ul>
                <li>RESTful API 설계 및 구현</li>
                <li>데이터베이스 설계 (SQL/NoSQL)</li>
                <li>서버 배포 및 관리</li>
                <li>보안 및 인증 시스템 구축</li>
              </ul>
            </div>

            <div className="tech-category">
              <h3>개발 도구 & 협업</h3>
              <p>효율적인 개발 워크플로우를 위한 도구 사용과 팀 협업 경험이 있습니다.</p>
              <ul>
                <li>Git을 통한 버전 관리</li>
                <li>Docker를 활용한 컨테이너화</li>
                <li>AWS 클라우드 서비스 활용</li>
                <li>애자일 방법론 적용</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;