import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/flux-logo.svg" alt="Flux Creative Technologies" className="footer-logo" />
            <p>Innovating the future through creative technology solutions that transform businesses and inspire innovation.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nweze-augustine-22a78335a?utm_source=share&utm_campaign=share_via&utm_conte9nt=profile&utm_medium=android_app" className="social-link">LinkedIn</a>
              <a href="https://x.com/_austineyoung" className="social-link">Twitter</a>
              <a href="https://github.com/austine-young-coder" className="social-link">GitHub</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#web-design">Web Design</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
                <li><a href="#branding">Branding</a></li>
                <li><a href="#consulting">Consulting</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Technology</h4>
              <ul>
                <li><a href="#react">React</a></li>
                <li><a href="#node">Node.js</a></li>
                <li><a href="#cloud">Cloud Services</a></li>
                <li><a href="#ai">AI Integration</a></li>
              </ul>6
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@fluxcreativetech.com">hello@fluxcreativetech.com</a></li>
                <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li>Lagos, NG</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest insights on design and technology trends.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Flux Creative Technologies. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
