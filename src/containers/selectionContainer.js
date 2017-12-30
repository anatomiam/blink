import React from "react";
import Selection from "../components/selectionComponent";
import { connect } from "react-redux";
import { setCounterId, stopCounter, count } from "../actions/counterActions";
import { addToMessage } from "../actions/messageActions";
import {
  selectCircle,
  setDot,
  setLine,
  setSpace,
  addLetter
} from "../actions/selectionActions";
import { playNote } from "../actions/soundAction";
import { SPACE, DOT, LINE, ADD_LETTER, TIMER_SPEED } from "../data/constants";

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

const context = new (window.AudioContext || window.webkitAudioContext)();

class SelectionContainer extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", () => {
      if (!this.props.counterId) {
        const counterId = setInterval(() => {
          // may need to refactor setAction and pull the switch statement into container so that we can dispatch multiple actions instead of the one
          this.props.dispatch(count());
          switch (this.props.seconds) {
            case DOT:
              this.props.dispatch(playNote(context, 349.23));
              this.props.dispatch(setDot());
              break;
            case LINE:
              this.props.dispatch(playNote(context, 392.0));
              this.props.dispatch(setLine());
              break;
            case SPACE:
              this.props.dispatch(playNote(context, 440));
              this.props.dispatch(setSpace());
              break;
            case ADD_LETTER:
              this.props.dispatch(playNote(context, 523.25));
              this.props.dispatch(addLetter());
              break;
            default:
              break;
          }
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
        this.props.dispatch(stopCounter());
      }
    });
  }
  render() {
    return <Selection seconds={this.props.seconds} />;
  }
}

export default connect(mapStateToProps)(SelectionContainer);
