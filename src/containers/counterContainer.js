import React from "react";
import Counter from "../components/counterComponent";
import { connect } from "react-redux";
import { setCounterId, stopCounter, count } from "../actions/counterActions";
import { addToMessage } from "../actions/messageActions";
import { setAction, resetAction, selectCircle } from "../actions/selectActions";
import { TIMER_SPEED } from "../data/constants";

const mapStateToProps = state => {
  return {
    counterId: state.counter.counterId,
    seconds: state.counter.seconds,
    space: state.select.space,
    dot: state.select.dot,
    line: state.select.line,
    addLetter: state.select.addLetter,
    circleId: state.select.circleId,
    parentId: state.select.parentId,
    childLeftId: state.select.childLeftId,
    childRightId: state.select.childRightId
  };
};

class CounterContainer extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", () => {
      if (!this.props.counterId) {
        const counterId = setInterval(() => {
          this.props.dispatch(setAction(this.props.seconds));
          this.props.dispatch(count());
        }, TIMER_SPEED);
        this.props.dispatch(setCounterId(counterId));
      }
    });
    window.addEventListener("keyup", () => {
      if (this.props.counterId) {
        clearInterval(this.props.counterId);
        if (this.props.space) {
          // add space to message, reset
          this.props.dispatch(addToMessage(" "));
          this.props.dispatch(selectCircle());
        } else if (this.props.dot) {
          // moves left
          this.props.dispatch(selectCircle(this.props.childLeftId));
        } else if (this.props.line) {
          // moves right
          this.props.dispatch(selectCircle(this.props.childRightId));
        } else if (this.props.addLetter) {
          //  add selected letter to message, reset
          this.props.dispatch(addToMessage(this.props.circleId));
          this.props.dispatch(selectCircle());
        }
        this.props.dispatch(resetAction());
        this.props.dispatch(stopCounter());
      }
    });
  }
  render() {
    return <Counter seconds={this.props.seconds} />;
  }
}

export default connect(mapStateToProps)(CounterContainer);
