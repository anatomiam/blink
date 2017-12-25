import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";

import reducer from "./reducers";

const middleware = applyMiddleware(logger);

export default createStore(
  reducer,
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
