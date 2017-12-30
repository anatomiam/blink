import { ROOT_NODE } from "../data/constants";

export default function reducer(
  state = {
    space: false,
    dot: false,
    line: false,
    addLetter: false,
    circleId: ROOT_NODE,
    parentId: ROOT_NODE,
    childLeftId: "E",
    childRightId: "T"
  },
  action
) {
  switch (action.type) {
    case "SELECT_CIRCLE": {
      const { circleId } = action.payload;
      const selected_element = document.getElementById(circleId);
      if (selected_element !== null) {
        const { childLeft, childRight, parent } = selected_element.dataset;
        return {
          ...state,
          circleId,
          childLeftId: childLeft,
          childRightId: childRight,
          parentId: parent
        };
      } else {
        const root_element = document.getElementById(ROOT_NODE);
        const { childLeft, childRight, parent } = root_element.dataset;
        return {
          ...state,
          circleId: ROOT_NODE,
          childLeftId: childLeft,
          childRightId: childRight,
          parentId: parent
        };
      }
    }
    case "SET_DOT":
      return {
        ...state,
        space: false,
        dot: true,
        line: false,
        addLetter: false
      };
    case "SET_LINE":
      return {
        ...state,
        space: false,
        dot: false,
        line: true,
        addLetter: false
      };
    case "SET_SPACE":
      return {
        ...state,
        space: true,
        dot: false,
        line: false,
        addLetter: false
      };
    case "ADD_LETTER":
      return {
        ...state,
        space: false,
        dot: false,
        line: false,
        addLetter: true
      };
    case "RESET_ACTION":
      return {
        ...state,
        space: false,
        dot: false,
        line: false,
        addLetter: false
      };
    default:
      break;
  }
  return state;
}
