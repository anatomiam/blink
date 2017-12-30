import _ from "lodash";
// timer settings
export const DOT = 1;
export const LINE = 2;
export const SPACE = 3;
export const ADD_LETTER = 4;
export const TIMER_SPEED = 500;

// SVG circle tree building
export const HEIGHT_MARGIN = 35;
export const SVG_HEIGHT = 400;
export const SVG_WIDTH = 1200;
export const RADIUS = 17;

export const ROOT_NODE = "rootNode";

export const NUMBER_OF_LEVELS = 6; // TODO parse # of levels from tree itself
export const LEVELS = _.range(1, NUMBER_OF_LEVELS + 1);

// grabs the height of each level (row) of svg
export const Y_COORDINATE = SVG_HEIGHT / _.last(LEVELS);

// creates all of the x,y values for each circle
export const VECTORS = _.map(LEVELS, level => {
  const y = Y_COORDINATE * level - HEIGHT_MARGIN;
  const numberOfXNodes = 2 ** level;
  const xSpacer = SVG_WIDTH / numberOfXNodes;
  const nodeRange = _.range(1, numberOfXNodes + 1, 2);

  return _.map(nodeRange, node => {
    return [node * xSpacer, y];
  });
});
