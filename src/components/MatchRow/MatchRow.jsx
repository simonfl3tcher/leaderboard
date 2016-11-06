// CSS/Assets
import './MatchRow.scss';

// JS
import React, { Component } from 'react';

const MatchRow = (props) =>
  <div className="section align-center section-grey push-top">
    <h4>{ props.data.title }</h4>
    <p className="lead">
      <a className="button button-large button-outline" href="#" role="button">
        View Match!
      </a>
    </p>
  </div>

export default MatchRow;
