export default function reducer(
  state = {
    message: ""
  },
  action
) {
  switch (action.type) {
    case "ADD_TO_MESSAGE": {
      return { ...state, message: state.message.concat(action.payload.letter) };
    }
    default:
      break;
  }

  return state;
}
