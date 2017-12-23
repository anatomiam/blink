import {ROOT_NODE} from '../data/constants'

export default function reducer(
  state = {
    tree: [],
    circleId: ROOT_NODE,
    parentId: ROOT_NODE,
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
    case "SELECT_CIRCLE": {
      const { circleId, parentId } = action.payload;
      return {
        ...state,
        circleId,
        parentId
      };
    }
    default:
      break;
  }

  return state;
}
