import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";

const it = [];
class App2 extends Component {
  // buildTree = data => {
  //   return _.map(data, (value, key) => {
  //     console.log("key = ", key, "value = ", value);
  //     if (key === "name") {
  //       it.push(<div key={value + Math.random()}>{value}</div>);
  //     } else if (key === "children") {
  //       return this.buildTree2(value);
  //     }
  //   });
  // };

  // buildTree2 = data => {
  //   return _.map(data, datum => {
  //     console.log("datum =", datum);
  //     return this.buildTree(datum);
  //   });
  // };

  buildTree = (data, parent) => {
    console.log(data, parent);
    if (data.children) {
      this.buildTree(data.children[0], data.name);
      this.buildTree(data.children[1], data.name);
    }
  };

  render() {
    const x = this.buildTree(morse, "FOCUS");
    return <div className="body">{x}</div>;
  }
}

export default App2;
