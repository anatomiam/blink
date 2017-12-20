import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import ReBlink from "./reBlink";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ReBlink />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
