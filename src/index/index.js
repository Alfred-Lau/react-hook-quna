import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "../store/store";

import "normalize.css/normalize.css";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
      </Switch>
      <Redirect to="/home"></Redirect>
    </Router>
  </Provider>,
  document.getElementById("root")
);
