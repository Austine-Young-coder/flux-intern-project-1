import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/flux-logo.img" alt="Flux Creative Technologies Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#showcase">Showcase</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
