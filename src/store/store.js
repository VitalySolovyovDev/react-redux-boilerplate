import {applyMiddleware, createStore} from "redux";
import thunk  from "redux-thunk";
import logger from "../middlewares/logger";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "../reducers/rootReducer"

const middleWares = [logger, thunk];
const composeEnhancers = composeWithDevTools({});

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleWares)
    )
);
