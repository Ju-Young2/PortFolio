import React from 'react';
import '../../styles/components/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>연락처</h2>
        <div className="contact-content">
          <p>새로운 기회나 협업에 관심이 있으시면 언제든지 연락해 주세요!</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>이메일</h3>
              <a href="mailto:kim.developer@email.com">leecy7968@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h3>전화번호</h3>
              <a href="tel:+821012345678">010-2236-3242</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>위치</h3>
              <p>파주, 대한민국</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;