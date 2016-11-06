// CSS/Assets
import './App.scss';

// JS
import React, { Component } from 'react';

// Components
import HomepageHeader       from '../HomepageHeader/HomepageHeader';
import CurrentMatches       from '../CurrentMatches/CurrentMatches';
import Footer               from '../Footer/Footer';


const App = (props) =>
  <div className="App">
    <HomepageHeader />
    <div className="container">
      <div className="row">
        { props.children }
      </div>
    </div>
    <Footer />
  </div>

export default App;
