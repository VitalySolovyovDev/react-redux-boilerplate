import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Root = props => (
  <Provider store={props.store}>
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/1">Link 1</Link></li>
        <li><Link to="/1/0">Link 2</Link></li>
        <li><Link to="/1/1">Link 3</Link></li>
      </ul>
      <Switch>
        {props.routes.map(
          route => <Route key={route.path || 0} {...route} />
        )}
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Root;