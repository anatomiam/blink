import React, { Component } from "react";
import { morse } from "./morse";
import "./App2.css";

const zero = [];
const one = [];
const two = [];
const three = [];
const four = [];
const five = [];

class App2 extends Component {
  buildTree = (data, parent) => {
    switch (data.level) {
      case "zero":
        zero.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      case "one":
        one.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      case "two":
        two.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      case "three":
        three.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      case "four":
        four.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      case "five":
        five.push(
          <div
            className={`${data.name} ${data.level}`}
            data-child1={data.children ? data.children[0].name : ""}
            data-child2={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
          >
            {data.name}
          </div>
        );
        break;
      default:
        break;
    }
    if (data.children) {
      this.buildTree(data.children[0], data.name);
      this.buildTree(data.children[1], data.name);
    }
  };

  render() {
    this.buildTree(morse, "FOCUS");
    return (
      <div className="body">
        <div className="zero-container">{zero}</div>
        <div className="one-container">{one}</div>
        <div className="two-container">{two}</div>
        <div className="three-container">{three}</div>
        <div className="four-container">{four}</div>
        <div className="five-container">{five}</div>
      </div>
    );
  }
}

export default App2;
