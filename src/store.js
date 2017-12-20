import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";

import reducer from "./reducers";
// import thunk from "redux-thunk"
const middleware = applyMiddleware(logger);

export default createStore(reducer, middleware);
