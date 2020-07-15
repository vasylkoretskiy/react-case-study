import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import movieApp from './reducers';
import './index.css';
import { MovieContainer} from './containers';

const routeMiddleware = routerMiddleware(hashHistory);
let store = createStore(movieApp, composeWithDevTools(
  applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path="/search/:keyword" component={MovieContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
