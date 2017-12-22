export function buildCircle(data, parent, selected) {
  return {
    type: "BUILD_CIRCLE",
    payload: {
      data,
      parent,
      selected
    }
  };
}
