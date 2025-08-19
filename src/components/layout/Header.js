import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '소개' },
    { path: '/skills', label: '기술' },
    { path: '/projects', label: '프로젝트' },
    { path: '/contact', label: '연락처' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <Link to="/" className="logo">포트폴리오</Link>
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