import _ from "lodash";
import { NUMBER_OF_LEVELS, RADIUS, VECTORS } from "../data/constants";

let circles = [];
let levelIndexer = _.range(0, NUMBER_OF_LEVELS, 0);

// generateTree has side effects for both tree and levelIndexer
export const generateCircles = (data, parent, selected, reset = false) => {
  if (reset) {
    levelIndexer = _.range(0, NUMBER_OF_LEVELS, 0);
    circles = [];
  }
  circles = [
    ...circles,
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
    generateCircles(data.children[0], data.name, selected);
    generateCircles(data.children[1], data.name, selected);
  }
  return circles;
};

export const generateLines = circles => {
  // grabs the x, y values of the parent, left, and right children for each node
  const lines = _.map(circles, circle => {
    const pcx = circle.cx;
    const pcy = circle.cy;

    const leftChild = _.find(circles, { name: circle.childLeft.name });
    const lcx = leftChild ? leftChild.cx : undefined;
    const lcy = leftChild ? leftChild.cy : undefined;

    const rightChild = _.find(circles, { name: circle.childRight.name });
    const rcx = rightChild ? rightChild.cx : undefined;
    const rcy = rightChild ? rightChild.cy : undefined;

    return {
      pcx,
      pcy,
      lcx,
      lcy,
      rcx,
      rcy
    };
  });
  return lines;
};
