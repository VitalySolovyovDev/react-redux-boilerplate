import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const RouterWithSubRoutes = route => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )} />
);

const Root = props => (
  <Provider store={props.store}>
    <Router>
      <Switch>
        {props.routes.map(
          route => <RouterWithSubRoutes key={route.path} {...route} />
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