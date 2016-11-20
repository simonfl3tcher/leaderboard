// JS
import React                          from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

// Components
import App            from './components/App/App';
import Home           from './components/Home/Home';
import NewMatch       from './components/NewMatch/NewMatch';
import ViewMatch      from './components/ViewMatch/ViewMatch';
import NotFound       from './components/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/match/new"      component={NewMatch} />
      <Route path="/match/:matchId" component={ViewMatch} />
      <Route path="*"               component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
