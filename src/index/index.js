import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';
import App from './App';
import store from './store';

import 'normalize.css/normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Link to='/path'>home</Link>

      <Switch>
        <Route path='/path'>
          <App />
        </Route>
        <Redirect to='/haha'></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
