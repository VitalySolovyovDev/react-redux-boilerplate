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

// TODO 2: use reselect
// TODO 6: refactoring using hooks
// TODO 3: use preloader for async actions
// TODO 4: create simple Node server
// TODO 5: create login page and auth logic
// TODO 7: add ESLint
// TODO 8: test coverage
// TODO 9: use context - ?
// TODO 10: microservice server side
// TODO 11: Apollo
// TODO 12: GraphQL
