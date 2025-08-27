import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/components/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    
    // 이미 홈페이지에 있다면 맨 위로 스크롤
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // 다른 페이지에 있다면 홈으로 이동
      navigate('/');
    }
  };

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/skills', label: '자격증' },
    { path: '/lab', label: '실험실' }, // 실험실 or 연습장
    { path: '/projects', label: '프로젝트' },
    { path: '/contact', label: '연락처' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <a 
          href="/" 
          className="logo"
          onClick={handleLogoClick}
        >
          포트폴리오
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;