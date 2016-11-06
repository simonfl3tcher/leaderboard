// CSS
import 'milligram'
import './default.scss'

// JS
import React               from 'react';
import ReactDOM            from 'react-dom';
import { browserHistory }  from 'react-router';

// Components
import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
