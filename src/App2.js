import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";
import './App2.css'

const zero = []
const one = []
const two = []
const three = []
const four = []
const five = []
class App2 extends Component {
  buildTree = (data, parent, TREE = []) => {
    console.log(TREE);
      TREE.push(
        <div
          className={`${data.name} ${data.level}`}
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
    return <div className="body">{this.buildTree(morse, "FOCUS")}</div>;
  }
}

export default App2;
