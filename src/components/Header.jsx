import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => (
  <header className="header-bar">
    <div className="header-left">
      <img src={logo} alt="DEV@Deakin" className="header-logo" />
      <span className="header-title">DEV@Deakin</span>
    </div>
    <input type="text" className="header-search" placeholder="Search..." />
    <div className="header-btns">
      <button className="header-post-btn">Post</button>
      <button className="header-login-btn">Login</button>
    </div>
  </header>
);

export default Header;
