// JS
import React                          from 'react';
import ReactDOM                       from 'react-dom';
import { Router, Route, IndexRoute }  from 'react-router';

// Components
import App            from './components/App/App';
import CurrentMatches from './components/CurrentMatches/CurrentMatches';
import NewMatch       from './components/NewMatch/NewMatch';
import NotFound       from './components/NotFound/NotFound';

const matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" },
  { title: "Newmarket vs Purdis Heath", date: "12-12-2015", time: "11:00" },
  { title: "Fynn Valley vs Diss", date: "12-12-2015", time: "11:00" },
];

var CurrentMatchesWrapper = React.createClass({
  render: function () {
    return (
      <CurrentMatches matches={matches} />
    );
  }
});

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={CurrentMatchesWrapper} />

      <Route path="/new"  component={NewMatch} />
      <Route path="*"     component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
