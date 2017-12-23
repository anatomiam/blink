import { combineReducers } from "redux";

import circle from "./circleReducer";
import counter from "./counterReducer";
// import message from "./messageReducer";
import select from "./selectReducer";

export default combineReducers({
  circle,
  counter,
  select
});
