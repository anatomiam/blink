export default function reducer(
  state = {
    circles: [],
    lines: []
  },
  action
) {
  switch (action.type) {
    case "SET_CIRCLES": {
      const { circles } = action.payload;
      return {
        ...state,
        circles
      };
    }
    case "SET_LINES": {
      const { lines } = action.payload;
      return {
        ...state,
        lines
      };
    }
    default:
      break;
  }

  return state;
}
