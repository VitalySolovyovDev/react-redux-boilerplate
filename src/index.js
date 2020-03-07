import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/Root";
import store from "./store/store";
import routes from "./routes/routes";

ReactDOM.render(
  <Root
    store={store}
    routes={routes}
  />,
  document.getElementById("root")
);