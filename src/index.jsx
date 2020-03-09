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

// TODO 1: use redux-persist
// TODO 2: use reselect
// TODO 3: refactoring using hooks
// TODO 4: pagination of countries using routing and redux (.../countries?page=12)
// TODO 5: use preloader for async actions
// TODO 6: create production webpack config
// TODO 6: create simple Node server
// TODO 7: create login page and auth logic
// TODO 8: add ESLint
// TODO 9: test coverage
// TODO 10: use context - ?
// TODO 11: microservice server side
// TODO 12: Apollo
// TODO 13: GraphQL
