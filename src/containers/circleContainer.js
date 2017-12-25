import _ from "lodash";
import React from "react";
import Circle from "../components/circleComponent";
import { connect } from "react-redux";
import { SVG_HEIGHT, SVG_WIDTH } from "../data/constants";
import generateTree from "../data/generateTree";

import { setTree } from "../actions/circleActions";
import morse from "../data/morse";

const mapStateToProps = state => {
  return {
    circles: state.circle.tree,
    circleId: state.select.circleId,
    parentId: state.select.parentId
  };
};

class CircleContainer extends React.Component {
  componentWillMount() {
    const { dispatch, circleId, parentId } = this.props;
    const circleData = generateTree(morse, parentId, circleId);
    dispatch(setTree(circleData));
  }

  componentWillUpdate(nextProps) {
    if (this.props.circleId !== nextProps.circleId) {
      const { dispatch, circleId, parentId } = nextProps;
      const circleData = generateTree(morse, parentId, circleId, true);
      dispatch(setTree(circleData));
    }
  }

  render() {
    return (
      <svg height={SVG_HEIGHT} width={SVG_WIDTH}>
        {_.map(this.props.circles, circle => (
          <Circle key={Math.random()} circle={circle} />
        ))}
      </svg>
    );
  }
}

export default connect(mapStateToProps)(CircleContainer);
