import React from 'react';
import heroImg from '../assets/hero.jpg';
import './Hero.css';

const Hero = () => (
  <div className="hero-section">
    <img src={heroImg} className="hero-img" alt="Hero" />
    <div className="hero-overlay">
      <h1>Welcome to <span className="hero-brand">@Deakin</span></h1>
    </div>
  </div>
);

export default Hero;
