import React from 'react';
import './FeaturesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Design Innovation',
      description: 'Cutting-edge visual design that captures attention and drives engagement through creative excellence.',
      icon: faPalette
    },
    {
      title: 'Tech Solutions',
      description: 'Advanced technological implementations that solve complex problems with scalable, future-proof solutions.',
      icon: faBolt
    },
    {
      title: 'Creative Strategy',
      description: 'Strategic thinking combined with creative execution to deliver impactful results across all platforms.',
      icon: faRocket
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
                <FontAwesomeIcon icon={feature.icon} />
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