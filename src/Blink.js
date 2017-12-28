import React from "react";
import CircleContainer from "./containers/circleContainer";
import SelectionContainer from "./containers/selectionContainer";
import MessageContainer from "./containers/messageContainer";

export default class Blink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SelectionContainer />
        <CircleContainer />
        <MessageContainer />
      </React.Fragment>
    );
  }
}
