// CSS/Assets
import './ViewMatch.scss';

// JS
import React, { Component } from 'react';
import { connect }          from 'react-redux';

// Components
import Header     from '../Header/Header';
import PageTitle  from '../PageTitle/PageTitle';

const mapStateToProps = ({ matches }, { params: { matchId } }) => ({
  match: matches.filter(match => match.id === parseInt(matchId, 10))[0]
});

export const ViewMatch = ({ match }) =>
  <div>
    <Header />
    <PageTitle>
      <h1 className="ViewMatch-header text-center">
        {match.title}
      </h1>
    </PageTitle>
    <div className="container">
      <div className="row">
        {match.title}
      </div>
    </div>
  </div>

export default connect(mapStateToProps)(ViewMatch);