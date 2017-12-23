export default function reducer(
  state = {
    seconds: 0,
    counterId: undefined
  },
  action
) {
  switch (action.type) {
    case "SET_COUNTER_ID": {
      return {
        ...state,
        counterId: action.payload.counterId
      };
    }
    case "STOP_COUNTER": {
      return {
        ...state,
        counterId: undefined,
        seconds: 0
      };
    }
    case "COUNT": {
      return {
        ...state,
        seconds: state.seconds + 1
      };
    }
    default:
      break;
  }

  return state;
}
