// CSS/Assets
import './HomepageHeader.scss';
import logo from '../../assets/logo.svg';

// JS
import React, { Component } from 'react';
import { Link }             from 'react-router';

const HomepageHeader = () =>
  <header>
    <div className="HomepageHeader-header section">
      <div className="container">
        <img src={logo} className="HomepageHeader-logo" alt="logo" />
        <h2>Welcome to Leaderboard</h2>
        <Link className="button button-large button-outline" to="new">
          Create Match!
        </Link>
      </div>
    </div>
  </header>

export default HomepageHeader;
