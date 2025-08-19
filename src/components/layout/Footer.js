import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import '../../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>김개발</h3>
            <p>창의적이고 열정적인 웹 개발자</p>
          </div>
          
          <div className="footer-section">
            <h4>연락처</h4>
            <p><i className="fas fa-envelope"></i> {personalInfo.email}</p>
            <p><i className="fas fa-phone"></i> {personalInfo.phone}</p>
            <p><i className="fas fa-map-marker-alt"></i> {personalInfo.location}</p>
          </div>
          
          <div className="footer-section">
            <h4>소셜 미디어</h4>
            <div className="social-links">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={personalInfo.social.blog} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-blog"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;