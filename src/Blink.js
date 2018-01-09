import React from "react";
import TreeContainer from "./containers/treeContainer";
import SelectionContainer from "./containers/selectionContainer";
import MessageContainer from "./containers/messageContainer";

export default class Blink extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SelectionContainer />
        <TreeContainer />
        <MessageContainer />
      </React.Fragment>
    );
  }
}
