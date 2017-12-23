import React from "react";
import Counter from "../components/counterComponent";
import { connect } from "react-redux";
import { setCounterId, stopCounter, count } from "../actions/counterActions";
import { TIMER_SPEED } from "../data/constants";

const mapStateToProps = state => {
  return {
    counterId: state.counter.counterId,
    seconds: state.counter.seconds
  };
};

class CounterContainer extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", () => {
      if (!this.props.counterId) {
        const counterId = setInterval(
          () => this.props.dispatch(count()),
          TIMER_SPEED
        );
        this.props.dispatch(setCounterId(counterId));
        console.log("add", this.props.counterId);
      }
    });
    window.addEventListener("keyup", () => {
      if (this.props.counterId) {
        console.log("remove", this.props.counterId);
        clearInterval(this.props.counterId);
        this.props.dispatch(stopCounter());
      }
    });
  }
  render() {
    return <Counter seconds={this.props.seconds} />;
  }
}

export default connect(mapStateToProps)(CounterContainer);
