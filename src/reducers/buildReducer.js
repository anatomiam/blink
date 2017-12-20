export default function reducer(
  state = {
    circles: ['I am the first circle']
  },
  action
) {
  switch (action.type) {
    case "BUILD_CIRCLES": {
      return { ...state, circles: [...state.circles, action.payload] };
    }
    default:
      break;
  }

  return state;
}
