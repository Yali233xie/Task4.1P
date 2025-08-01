import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-col">
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Stay connected</h3>
        <div className="footer-social">
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div>DEV@Deakin 2022</div>
      <div>
        <span>Privacy Policy</span>
        <span>Terms</span>
        <span>Code of Conduct</span>
      </div>
    </div>
  </footer>
);

export default Footer;
