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
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      classes: [],
      childLeft: "",
      childRight: "",
      parent: "",
      message: ""
    };
  }
  componentWillMount() {
    this.buildTree(morse, "FOCUS");
  }

  componentDidMount = () => {
    this.select("FOCUS");
  };

  buildTree = (data, parent) => {
    switch (data.level) {
      case "zero":
        zero.push(
          <button
            autoFocus
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
            data-parent={parent}
            onKeyDown={this.handleKeyPress}
            key={Math.random()}
          >
            {data.name}
          </button>
        );
        break;
      case "one":
        one.push(
          <div
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
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
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
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
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
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
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
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
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
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

  handleKeyPress = e => {
  onKeyDown = e => {
    if (e.key === "ArrowUp") {
      console.log("pressed the up key");
    } else if (e.key === "ArrowRight") {
      console.log("pressed the right key");
    } else if (e.key === "ArrowLeft") {
      console.log("pressed the left key");
    } else if (e.key === "ArrowDown") {
      console.log("pressed the down key");
    } else if (e.key === " ") {
      console.log("pressed the space key");
    } else {
      console.log("else");
    }
  };
  onKeyUp = e => {
    console.log("state = ", this.state.time, )
    if (e.key === "ArrowUp") {
      console.log("lifted the up key");
      this.moveUp();
    } else if (e.key === "ArrowRight") {
      console.log("lifted the right key");
      this.moveRight();
    } else if (e.key === "ArrowLeft") {
      console.log("lifted the left key");
      this.moveLeft();
    } else if (e.key === "ArrowDown") {
      console.log("lifted the down key");
      this.restart();
    } else if (e.key === " ") {
      console.log("lifted the spacebar key");
      this.addSpace();
    } else {
      console.log("else");
    }
  };

  addSpace = e => {
    console.log("adding a space");

    this.setState({
      message: this.state.message + " "
    });
  };

  moveLeft = () => {
    const newId = this.state.childLeft;
    this.deselect();
    this.select(newId);
    if (this.state.childLeft) {
      const newId = this.state.childLeft;
      this.deselect();
      this.select(newId);
    }
  };

  moveRight = () => {
    const newId = this.state.childRight;
    this.deselect();
    this.select(newId);
    if (this.state.childRight) {
      const newId = this.state.childRight;
      this.deselect();
      this.select(newId);
    }
  };

  moveUp = () => {
    const newId = this.state.parent;
    this.deselect();
    this.select(newId);
  };

  restart = () => {
    this.deselect();
    this.setState({
      message: this.state.message + this.state.id
    });
    this.select("FOCUS");
  };

  deselect = () => {
    const selected_element = document.querySelector(".selected");
    selected_element.classList.remove("selected");
    // console.log(selected_element.className);
  };

  select = id => {
    const selected_element = document.getElementById(id);
    if (selected_element !== null) {
      selected_element.classList.add("selected");
      const { childLeft, childRight, parent } = selected_element.dataset;
      this.setState({
        id: id,
        classes: selected_element.classList,
        childLeft: childLeft,
        childRight: childRight,
        parent: parent
      });
    }
  };

  render() {
    return (
      <div className="body">
        <div className="zero-container">{zero}</div>
        <div className="one-container">{one}</div>
        <div className="two-container">{two}</div>
        <div className="three-container">{three}</div>
        <div className="four-container">{four}</div>
        <div className="five-container">{five}</div>
        <div className="message-container">
          <div className="message">{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default App2;

// TODO add listener that determines whether a keypress is a line or dot
// update keyboard nav

// add space/ punctuation on FOCUS..?

// TODO REFACTOR
