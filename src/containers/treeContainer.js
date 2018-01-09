import _ from "lodash";
import React from "react";
import Circle from "../components/circleComponent";
import Line from "../components/lineComponent";
import { connect } from "react-redux";
import { SVG_HEIGHT, SVG_WIDTH } from "../data/constants";
import { generateCircles, generateLines } from "../data/generateTree";

import { setCircles, setLines } from "../actions/circleActions";
import morse from "../data/morse";

const mapStateToProps = state => {
  return {
    circles: state.circle.circles,
    lines: state.circle.lines,
    circleId: state.selection.circleId,
    parentId: state.selection.parentId
  };
};

class TreeContainer extends React.Component {
  componentWillMount() {
    const { dispatch, circleId, parentId } = this.props;
    const circleData = generateCircles(morse, parentId, circleId);
    const lineData = generateLines(circleData);
    dispatch(setCircles(circleData));
    dispatch(setLines(lineData));
  }

  componentWillUpdate(nextProps) {
    if (this.props.circleId !== nextProps.circleId) {
      const { dispatch, circleId, parentId } = nextProps;
      const circleData = generateCircles(morse, parentId, circleId, true);
      // Don't need to update lines yet since the circles don't change size yet
      dispatch(setCircles(circleData));
    }
  }

  render() {
    return (
      <svg height={SVG_HEIGHT} width={SVG_WIDTH}>
        {_.map(this.props.circles, circle => (
          <Circle key={Math.random()} circle={circle} />
        ))}
        {_.map(this.props.lines, line => (
          <Line key={Math.random()} line={line} />
        ))}
      </svg>
    );
  }
}

export default connect(mapStateToProps)(TreeContainer);
