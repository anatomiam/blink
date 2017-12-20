import React from "react";
import Circles from "../components/circleComponent";
import { connect } from "react-redux";

import { buildCircles } from "../actions/buildActions";

// @connect(store => {
//   return {
//     circles: store.circles
//   };
// })
export default class CircleContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(buildCircles());
  }

  render() {
    return (
      <React.Fragment>
        <Circles circles={circles} />
      </React.Fragment>
    );
  }
}

connect(store => {
  return {
    circles: store.circles
  };
})(CircleContainer);
