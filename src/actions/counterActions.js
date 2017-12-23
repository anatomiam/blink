export function setCounterId(counterId) {
  return {
    type: "SET_COUNTER_ID",
    payload: {
      counterId
    }
  };
}

export function stopCounter() {
  return {
    type: "STOP_COUNTER"
  };
}

export function count() {
  return {
    type: "COUNT",
  };
}
