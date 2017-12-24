export default function reducer(
  state = {
    tree: [],
  },
  action
) {
  switch (action.type) {
    case "SET_TREE": {
      const { tree } = action.payload;
      return {
        ...state,
        tree
      };
    }
    default:
      break;
  }

  return state;
}
