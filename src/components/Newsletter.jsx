import React from 'react';
import './Newsletter.css';

const Newsletter = () => (
  <section className="newsletter-section">
    <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
      <label htmlFor="email" className="newsletter-label">
        SIGN UP FOR OUR DAILY INSIDER
      </label>
      <input id="email" type="email" className="newsletter-input" placeholder="Enter your email" required />
      <button className="newsletter-btn">Subscribe</button>
    </form>
  </section>
);

export default Newsletter;
