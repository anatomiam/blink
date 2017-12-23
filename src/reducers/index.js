import { combineReducers } from "redux";

import circle from "./circleReducer";
import counter from "./counterReducer";
// import message from "./messageReducer";
// import step from "./stepReducer";

export default combineReducers({
  circle,
  counter
});
