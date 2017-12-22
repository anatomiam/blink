import { LEVEL_INDEXERS, RADIUS, VECTORS } from "../data/constants";

// TODO set the children state
export default function reducer(
  state = {
    circles: [],
    nextCircles: {
      data: undefined,
      parent: undefined,
      selected: undefined
    }
  },
  action
) {
  switch (action.type) {
    case "BUILD_CIRCLE": {
      const { data, parent, selected } = action.payload;

      const circle = {
        name: data.name,
        childLeft: data.children[0],
        childRight: data.children[1],
        radius: RADIUS,
        cx: VECTORS[data.level][LEVEL_INDEXERS[data.level]][0],
        cy: VECTORS[data.level][LEVEL_INDEXERS[data.level]][1],
        stroke: selected === data.name ? "red" : "steelblue"
      };
      // console.log("circle=", circle);
      const child = {
        data: data.children[0],
        parent: data.name,
        selected: selected
      };
      // console.log("child=", child);
      return {
        ...state,
        circles: [...state.circles, circle],
        nextCircles: { ...state.nextCircles, ...child }
      };
    }
    default:
      break;
  }

  return state;
}
