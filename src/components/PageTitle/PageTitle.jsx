// CSS/Assets
import './PageTitle.scss';

// JS
import React, { Component } from 'react';
import { connect }          from 'react-redux';

export const PageTitle = (props) =>
  <div className="container border-bottom">
    <div className="row">
      <div className="column">
        <div className="section">
          { props.children }
        </div>
      </div>
    </div>
  </div>

export default PageTitle;
