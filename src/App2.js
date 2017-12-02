import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";

class App2 extends Component {
  buildTree = data => {
    // console.log("buildTree");
    return _.forIn(data, (value, key) => {
    //   console.log("key=", key, "value=", value);
      if (key === "name") {
        return <div key={value}>{value}</div>;
      } else if (key === "children") {
        return this.buildTree2(value);
      }
    });
  };
  buildTree2 = data => {
    // console.log("buildTree22222data=", data);
    return _.map(data, datum => {
      console.log("datum =", datum);
      return this.buildTree(datum);
    });
  };

  render() {
    this.buildTree(morse);
    // this.buildTree2(morse);
    // console.log(morse);
    return <div className="body" />;
  }
}

export default App2;
