import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a href="#home" className="logo">RUNER</a>
          
          <nav>
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-contact">
            <span><i className="fas fa-phone"></i> +1 (555) 123-4567</span>
            <span><i className="fas fa-envelope"></i> info@runer.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
