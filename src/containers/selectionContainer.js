import React from "react";
import Selection from "../components/selectionComponent";
import { connect } from "react-redux";
import { setCounterId, stopCounter, count } from "../actions/counterActions";
import { addToMessage } from "../actions/messageActions";
import { setAction, resetAction, selectCircle } from "../actions/selectionActions";
import { TIMER_SPEED } from "../data/constants";

const mapStateToProps = state => {
  return {
    counterId: state.counter.counterId,
    seconds: state.counter.seconds,
    space: state.selection.space,
    dot: state.selection.dot,
    line: state.selection.line,
    addLetter: state.selection.addLetter,
    circleId: state.selection.circleId,
    parentId: state.selection.parentId,
    childLeftId: state.selection.childLeftId,
    childRightId: state.selection.childRightId
  };
};

class SelectionContainer extends React.Component {
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
    return <Selection seconds={this.props.seconds} />;
  }
}

export default connect(mapStateToProps)(SelectionContainer);
