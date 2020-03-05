import React from "react";
import ReactDOM from "react-dom";

import Root from "src/containers/Root";
import store from "reducers/rootReducer";

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);