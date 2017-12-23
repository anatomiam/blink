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
    circles: state.circle.tree
  };
};

class CircleContainer extends React.Component {
  componentWillMount() {
    let circleData = generateTree(morse, morse.name, morse.name);
    this.props.dispatch(setTree(circleData));
  }

  componentWillUpdate(nextProps) {}

  render() {
    return (
      <React.Fragment>
        <svg height={SVG_HEIGHT} width={SVG_WIDTH}>
          {_.map(this.props.circles, circle => (
            <Circle key={Math.random()} circle={circle} />
          ))}
        </svg>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(CircleContainer);
