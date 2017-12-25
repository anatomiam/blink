import React from "react";
import CircleContainer from "./containers/circleContainer";
import CounterContainer from "./containers/counterContainer";
import MessageContainer from "./containers/messageContainer";

export default class Blink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CounterContainer />
        <CircleContainer />
        <MessageContainer />
      </React.Fragment>
    );
  }
}
