import React from "react";

export default class Message extends React.Component {
  render() {
    const { message } = this.props;
    return <React.Fragment>{message}</React.Fragment>;
  }
}
