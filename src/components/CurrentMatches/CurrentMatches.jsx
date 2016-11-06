// CSS/Assets
import './CurrentMatches.scss';

// JS
import React, { Component } from 'react';

// Components
import MatchRow             from '../MatchRow/MatchRow';

class CurrentMatches extends Component {
  renderListOrNoListMessage() {
    if (this.props.matches.length > 0) {
      return (
        (
          this.props.matches.map((match, i) =>
            <MatchRow data={match} key={i} />
          )
        )
      );
    } else {
      return (
        <h2>There are no matches happening right now :(</h2>
      );
    }
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="column column-60 column-offset-20 text-center push-top">
            { this.renderListOrNoListMessage() }
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentMatches;