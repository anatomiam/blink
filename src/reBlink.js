import React from "react";
import CircleContainer from "./containers/circleContainer";
import Counter from "./components/counterComponent";
import Message from "./components/messageComponent";

export default class ReBlink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
        <CircleContainer />
        <Message />
      </React.Fragment>
    );
  }
}
