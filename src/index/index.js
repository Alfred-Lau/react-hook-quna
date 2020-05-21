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
import Demo from './Demo';
import store from './store';

import 'normalize.css/normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Link to="/path">home</Link>
      <Link to="/demo">demo</Link>

      <Switch>
        <Route path="/path">
          <App />
        </Route>
        <Route path="/demo" component={Demo}></Route>
        <Redirect to="/hahssa"></Redirect>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
