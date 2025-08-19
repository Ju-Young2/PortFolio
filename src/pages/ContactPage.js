import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 프로젝트에서는 여기에 이메일 전송 로직을 추가
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // 3초 후 폼 리셋
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="page contact-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">연락처</h1>
          
          <div className="contact-content">
            <div className="contact-info-grid">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <h3>이메일</h3>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <h3>전화번호</h3>
                <a href={`tel:${personalInfo.phone}`}>
                  {personalInfo.phone}
                </a>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <h3>위치</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>메시지 보내기</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>메시지가 성공적으로 전송되었습니다!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">이름</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">이메일</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">제목</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">메시지</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="cta-button primary">
                    메시지 전송
                  </button>
                </form>
              )}
            </div>

            <div className="social-section">
              <h2>소셜 미디어</h2>
              <div className="social-links">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                {/* <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a> */}
                <a href={personalInfo.social.blog} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-blog"></i>
                  <span>Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;