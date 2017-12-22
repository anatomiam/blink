import _ from "lodash";
import React from "react";
import Circle from "../components/circleComponent";
import { connect } from "react-redux";

import { buildCircle } from "../actions/buildActions";
import morse from "../data/morse";
// TODO import the morse data to pass to build action

const mapStateToProps = state => {
  return {
    circles: state.build.circles,
    nextCircles: state.build.nextCircles
  };
};

class CircleContainer extends React.Component {
  constructor(props) {
    super(props);
    // todo while there are children, update children and pass them into buildCircl
    console.log('before', this.props.nextCircles)
    this.props.dispatch(buildCircle(morse, morse.name, morse.name));
    console.log('after', this.props.nextCircles)
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("after", this.props, nextProps);
    if (
      nextProps.nextCircles.id !== this.props.nextCircles.id &&
      !(this.props.nextCircles.id === "rootNode" && nextProps.nextCircles.id === "rootNode")
    ) {
      this.props.dispatch(buildCircle(nextProps.nextCircles.data, this.props.nextCircles.parent, nextProps.nextCircles.data.name));
    }
  }

  render() {
    // console.log(this.props);
    const { circles } = this.props;
    return (
      <React.Fragment>
        {_.map(circles, circle => (
          <Circle key={Math.random()} circles={circle} />
        ))}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(CircleContainer);
