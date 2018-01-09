export function setCircles(circles) {
  return {
    type: "SET_CIRCLES",
    payload: {
      circles
    }
  };
}

export function setLines(lines) {
  return {
    type: "SET_LINES",
    payload: {
      lines
    }
  };
}
