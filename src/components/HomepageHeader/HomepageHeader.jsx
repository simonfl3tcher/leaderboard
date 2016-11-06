// CSS/Assets
import './HomepageHeader.scss';
import logo from '../../assets/logo.svg';

// JS
import React, { Component } from 'react';

const HomepageHeader = () =>
  <header>
    <div className="HomepageHeader-header section">
      <div className="container">
        <img src={logo} className="HomepageHeader-logo" alt="logo" />
        <h2>Welcome to Leaderboard</h2>
      </div>
    </div>
  </header>

export default HomepageHeader;
