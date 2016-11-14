// CSS/Assets
import './App.scss';

// JS
import React, { Component } from 'react';

// Components
import CurrentMatches       from '../CurrentMatches/CurrentMatches';
import Footer               from '../Footer/Footer';

const App = (props) =>
  <div className="App">
    <div id="site-contents">
      { props.children }
    </div>
    <Footer />
  </div>

export default App;
