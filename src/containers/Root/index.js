import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Root = props => (
  <Provider store={props.store}>
    <BrowserRouter history={props.history} routes={props.routes} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Root;