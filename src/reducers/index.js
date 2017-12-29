import { combineReducers } from "redux";

import circle from "./circleReducer";
import counter from "./counterReducer";
import message from "./messageReducer";
import selection from "./selectionReducer";
import sound from "./soundReducer";

export default combineReducers({
  circle,
  counter,
  selection,
  message,
  sound
});
