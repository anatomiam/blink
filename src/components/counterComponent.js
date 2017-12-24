import React from "react";

export default class Counter extends React.Component {
  render() {
    return <div>{this.props.seconds}</div>;
  }
}
