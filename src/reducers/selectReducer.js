import { SPACE, DOT, LINE, ADD_LETTER } from "../data/constants";

export default function reducer(
  state = {
    space: false,
    dot: false,
    line: false,
    addLetter: false
  },
  action
) {
  switch (action.type) {
    case "SET_ACTION":
      switch (action.payload.seconds) {
        case SPACE:
          return {
            ...state,
            space: true,
            dot: false,
            line: false,
            addLetter: false
          };
        case DOT:
          return {
            ...state,
            space: false,
            dot: true,
            line: false,
            addLetter: false
          };
        case LINE:
          return {
            ...state,
            space: false,
            dot: false,
            line: true,
            addLetter: false
          };
        case ADD_LETTER:
          return {
            ...state,
            space: false,
            dot: false,
            line: false,
            addLetter: true
          };
        default:
          break;
      }
      break;
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
