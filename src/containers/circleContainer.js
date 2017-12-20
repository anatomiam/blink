import _ from "lodash";
import React from "react";
import Circles from "../components/circleComponent";
import { connect } from "react-redux";

import { buildCircles } from "../actions/buildActions";

const mapStateToProps = state => {
  return {
    circles: state.build.circles
  };
};

class CircleContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(buildCircles());
  }

  render() {
    const { circles } = this.props;
    return (
      <React.Fragment>
        {_.map(circles, circle => <Circles key={Math.random()}circles={circle} />)}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(CircleContainer);
