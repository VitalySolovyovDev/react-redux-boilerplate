import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "../middlewares/logger";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
  todo: todoReducer
});

const middleWares = [logger];
const composeEnhancers = composeWithDevTools({});

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleWares)
  )
);
