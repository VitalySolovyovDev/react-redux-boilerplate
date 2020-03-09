import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Root from "./containers/root/Root";
import store from "./store/store";
import routes from "./routes/routes";

ReactDOM.render(
  <Provider store={store}>
    <Root routes={routes} />
  </Provider>,
  document.getElementById("root")
);