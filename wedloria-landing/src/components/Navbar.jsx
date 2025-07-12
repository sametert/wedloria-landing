import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Wedloria Logo" className="navbar-logo-img" />
          </Link>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a 
                href="#hero" 
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
              >
                Ana Sayfa
              </a>
            </li>
            <li className="navbar-item">
              <a 
                href="#hakkimizda" 
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hakkimizda');
                }}
              >
                Hakkımızda
              </a>
            </li>
            <li className="navbar-item">
              <a 
                href="#sss" 
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('sss');
                }}
              >
                S.S.S
              </a>
            </li>
            <li className="navbar-item">
              <a 
                href="#iletisim" 
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('iletisim');
                }}
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 