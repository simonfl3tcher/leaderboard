// JS
import React                          from 'react';
import ReactDOM                       from 'react-dom';
import { Router, Route, IndexRoute }  from 'react-router';

// Components
import App            from './components/App/App';
import Home           from './components/Home/Home';
import NewMatch       from './components/NewMatch/NewMatch';
import NotFound       from './components/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/new"  component={NewMatch} />
      <Route path="*"     component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
