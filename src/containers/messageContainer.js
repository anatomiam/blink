import React from "react";
import Message from "../components/messageComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    message: state.message.message
  };
};

class MessageContainer extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <Message message={message} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MessageContainer);
