import React, { Component } from 'react';

class MatchRow extends Component {
  render() {
    let props = this.props;

    return (
      <div className="jumbotron align-center">
        <h4>{ props.data.title }</h4>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">View Match!</a>
        </p>
      </div>
    );
  }
}

export default MatchRow;
