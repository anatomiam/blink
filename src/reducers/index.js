import { combineReducers } from "redux";

import circle from "./circleReducer";
import counter from "./counterReducer";
import message from "./messageReducer";
import selection from "./selectionReducer";

export default combineReducers({
  circle,
  counter,
  selection,
  message
});
