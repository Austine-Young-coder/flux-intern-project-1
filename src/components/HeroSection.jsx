import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Flux Creative Technologies</h1>
          <p>Innovating the future through cutting-edge design and technology solutions that transform businesses and inspire innovation.</p>
          <div className="hero-buttons">
            <button className="primary-button">Explore Solutions</button>
            <button className="secondary-button">View Showcase</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-abstract">
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;