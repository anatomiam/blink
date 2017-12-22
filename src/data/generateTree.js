import _ from "lodash";
import { NUMBER_OF_LEVELS, RADIUS, VECTORS } from "../data/constants";

let tree = [];
let levelIndexer = _.range(0, NUMBER_OF_LEVELS, 0);

// generateTree has side effects for both tree and levelIndexer
const generateTree = (data, parent, selected) => {
  //   console.log(data, parent, selected);
  tree = [
    ...tree,
    {
      name: data.name,
      childLeft: data.children ? data.children[0] : "",
      childRight: data.children ? data.children[1] : "",
      radius: RADIUS,
      parent: parent,
      level: data.level,
      cx: VECTORS[data.level][levelIndexer[data.level]][0],
      cy: VECTORS[data.level][levelIndexer[data.level]][1],
      stroke: selected === data.name ? "red" : "steelblue"
    }
  ];
  let levelIndexerCopy = levelIndexer.slice();
  levelIndexerCopy[data.level] = levelIndexerCopy[data.level] + 1;
  levelIndexer = levelIndexerCopy;
  if (data.children) {
    generateTree(data.children[0], data.name, selected);
    generateTree(data.children[1], data.name, selected);
  }
  return tree;
};

export default generateTree;
