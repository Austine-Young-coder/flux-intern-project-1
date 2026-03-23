import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Design Innovation',
      description: 'Cutting-edge visual design that captures attention and drives engagement through creative excellence.',
      icon: '🎨'
    },
    {
      title: 'Tech Solutions',
      description: 'Advanced technological implementations that solve complex problems with scalable, future-proof solutions.',
      icon: '⚡'
    },
    {
      title: 'Creative Strategy',
      description: 'Strategic thinking combined with creative execution to deliver impactful results across all platforms.',
      icon: '🚀'
    }
  ];

  return (
    <section className="features-section" id="solutions">
      <div className="features-container">
        <div className="features-header">
          <h2>Core Spectrum</h2>
          <p>Our comprehensive suite of creative and technological services</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span className="icon-text">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;