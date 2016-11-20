// CSS/Assets
import './Footer.scss';
import logo from '../../assets/logo.svg';

// JS
import React from 'react';

const Footer = () =>
  <footer className="Footer push-top">
    <div className="container">
      <div className="row">
        <div className="column column-60 column-offset-20 text-center">
          <img
            src={logo}
            className="Footer-logo push-bottom"
            target="_blank"
            alt="logo" />
          <div>
            <a target="_blank" href="https://twitter.com/simonfl3tcher">
              Made by Simon Fletcher
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

export default Footer;
