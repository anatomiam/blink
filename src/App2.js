import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";

// const TREE = [];
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

  buildTree = (data, parent, TREE = []) => {
    console.log(data, parent);
      TREE.push(
        <div
          className={data.name}
          data-child1={data.children ? data.children[0].name : ''}
          data-child2={data.children ? data.children[1].name : ''}
          data-parent={parent}
          key={Math.random()}
        >
          {data.name}
        </div>
      );
    if (data.children) {
      this.buildTree(data.children[0], data.name, TREE);
      this.buildTree(data.children[1], data.name, TREE);
    }
    return TREE
  };

  render() {
    // this.buildTree(morse, "FOCUS");
    return <div className="body">{this.buildTree(morse, "FOCUS")}</div>;
  }
}

export default App2;
