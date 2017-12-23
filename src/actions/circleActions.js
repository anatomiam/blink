export function setTree(tree) {
  return {
    type: "SET_TREE",
    payload: {
      tree
    }
  };
}

export function selectCircle(circleId, parentId) {
  return {
    type: "SELECT_CIRCLE",
    payload: {
      circleId,
      parentId
    }
  };
}
