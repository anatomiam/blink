import React from "react";
import CircleContainer from "./containers/circleContainer";
import CounterContainer from "./containers/counterContainer";
import Message from "./components/messageComponent";

export default class ReBlink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CounterContainer />
        <CircleContainer />
        <Message />
      </React.Fragment>
    );
  }
}
