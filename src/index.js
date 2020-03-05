import React from "react";
import ReactDOM from "react-dom";
import Root from "src/containers/Root";
import store from "reducers/rootReducer";

//history, routes

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);