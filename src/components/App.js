import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import MatchRow from './MatchRow';
import '../assets/App.css';

class App extends Component {
  render() {
    let props = this.props;

    return (
      <div className="App">
        <header>
          <div className="jumbotron App-header">
            <div className="container">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Leaderboard</h2>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {props.matches.map((match, i) =>
                <MatchRow data={match} key={i} />
              )}
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <img src={logo} className="App-logo push-bottom" target="_blank" alt="logo" />
                <div>
                  <a href="https://twitter.com/simonfl3tcher">
                    Made by Simon Fletcher
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
