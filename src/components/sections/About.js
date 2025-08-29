import React, { useState, useEffect } from 'react';
import '../../styles/components/About.css';
import profilePhoto from '../../assets/profile.png'

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const experiences = [
    {
      title: "개발 경험",
      description: "웹 개발 경험을 통해 다양한 프로젝트를 성공적으로 완성했습니다."
    },
    {
      title: "기술 스택",
      description: "React, Node.js를 중심으로 한 모던 웹 기술 스택을 활용합니다."
    },
    {
      title: "협업",
      description: "팀워크를 중시하며 효율적인 커뮤니케이션을 통해 프로젝트를 진행합니다."
    },
    {
      title: "학습",
      description: "새로운 기술을 지속적으로 학습하고 프로젝트에 적용하는 것을 즐깁니다."
    }
  ];

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % experiences.length
      );
    }, 5000); // 5초마다 변경

    return () => clearInterval(interval);
  }, [experiences.length]);

  // 수동 네비게이션
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % experiences.length
    );
  };

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
            <p>웹 애플리케이션의 구조를 설계하고 구현하는 풀스택 개발자이자, 데이터의 수집부터 활용까지의 과정을 다루는 데이터 엔지니어입니다.</p>
            <p>하루하루 더 나은 사용자 경험이 되도록, 지속적으로 학습하고 도전하며 성장하고 있습니다.</p>
            <p>새로운 기술을 배우고 적용하는 것을 즐기며, 팀워크를 통해 더 나은 결과를 만들어내는 것을 중요하게 생각합니다.</p>
          </div>
          
          <div className="experience-section">
            <h3>경험 & 목표</h3>
            <div className="experience-carousel">
              <div className="carousel-container">
                <div className="experience-item carousel-item active">
                  <h4>{experiences[currentIndex].title}</h4>
                  <p>{experiences[currentIndex].description}</p>
                </div>
              </div>
              
              {/* 네비게이션 버튼 */}
              <div className="carousel-nav">
                <button className="nav-btn prev-btn" onClick={goToPrev}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nav-btn next-btn" onClick={goToNext}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              
              {/* 인디케이터 */}
              <div className="carousel-indicators">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;