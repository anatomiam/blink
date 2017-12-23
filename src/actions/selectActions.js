export function setAction(seconds) {
  return {
    type: "SET_ACTION",
    payload: {
      seconds
    }
  };
}

export function resetAction() {
  return {
    type: "RESET_ACTION",
  };
}
