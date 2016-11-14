// CSS/Assets
import 'milligram'
import './default.scss'

// JS
import React                                    from 'react';
import ReactDOM                                 from 'react-dom';
import { createStore, combineReducers }         from 'redux';
import { Provider }                             from 'react-redux';
import { browserHistory }                       from 'react-router';
import { syncHistoryWithStore, routerReducer }  from 'react-router-redux';
import *  as reducers                           from './reducers/reducers';
import *  as localStore                         from './localStore';

reducers.routing = routerReducer;

// Components
import Routes from './routes';

const store   = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);

const run = () => {
  let state = store.getState();
  localStore.set(state, ['matches'])
  ReactDOM.render(
    (<Provider store={store}>
      <Routes history={history} />
    </Provider>), document.getElementById('root')
  );
}

run();
store.subscribe(run);
