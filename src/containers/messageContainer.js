import React from "react";
import Message from "../components/messageComponent";
import { connect } from "react-redux";
import { playNote } from "../actions/soundAction";

const mapStateToProps = state => {
  return {
    message: state.message.message
  };
};

const context = new (window.AudioContext || window.webkitAudioContext)();

class MessageContainer extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <Message message={message} />
        <button
          type="button"
          onClick={() => this.props.dispatch(playNote(context, 440))}
        >
          click me for I am a button
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageContainer);
