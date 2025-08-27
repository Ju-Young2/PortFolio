import React from 'react';
import '../../styles/components/About.css';
import profilePhoto from '../../assets/profile.png'

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>소개</h2>
        <div className="about-content">
          <div className="profile-img">
            <img src={profilePhoto} alt="Profile"/>
            <i className="fas fa-user"></i>
          </div>
          <div className="about-text">
            <h3>안녕하세요, 이주영입니다!</h3>
            <p>3년간 웹 개발 경험을 쌓아온 풀스택 개발자입니다. 사용자 중심의 인터페이스 설계와 효율적인 백엔드 시스템 구축에 열정을 갖고 있습니다.</p>
            <p>새로운 기술을 배우고 적용하는 것을 즐기며, 팀워크를 통해 더 나은 결과를 만들어내는 것을 중요하게 생각합니다.</p>
            <p>현재는 React와 Node.js를 주력으로 하여 모던 웹 애플리케이션을 개발하고 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;