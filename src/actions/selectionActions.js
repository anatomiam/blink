export function setDot() {
  return {
    type: "SET_DOT",
  };
}

export function setLine() {
  return {
    type: "SET_LINE",
  };
}

export function setSpace() {
  return {
    type: "SET_SPACE",
  };
}

export function addLetter() {
  return {
    type: "ADD_LETTER",
  };
}

export function resetAction() {     
  return {
    type: "RESET_ACTION"
  };
}

export function selectCircle(circleId) {
  return {
    type: "SELECT_CIRCLE",
    payload: {
      circleId
    }
  };
}
