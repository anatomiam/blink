import React, { Component } from "react";
import { morse } from "./morse";
import "./App2.css";

const zero = [];
const one = [];
const two = [];
const three = [];
const four = [];
const five = [];
const space = 5;
const dot = 100;
const line = 200;
const addLetter = 300;
const timerSpeed = 5;

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      classes: [],
      childLeft: "",
      childRight: "",
      parent: "",
      message: "",
      timer: null,
      seconds: 0,
      dot: false,
      line: false
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
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
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

  onKeyDown = e => {
    // on keydown set a timeout for 1 and 4 seconds
    // keydown state set to true
    // after first timeout set state dot = true and line = false if keydown still true
    // after second timeout set state dot = false and line = true if keydown still true
    // on keyup set keydown state to false check dot and line state and move left or right accordingly
    if (!this.state.timer) {
      const timer = setInterval(this.count, timerSpeed);
      this.setState({
        timer: timer,
      });
    }
  };

  onKeyUp = e => {
    this.clearTimer();
    if (this.state.space) this.addSpace();
    if (this.state.dot) this.moveLeft();
    if (this.state.line) this.moveRight();
    if (this.state.addLetter) this.addLetter();
    this.setState({
      space: false,
      dot: false,
      line: false,
      addLetter: false
    });
  };

  addSpace = e => {
    console.log("adding a space");
    this.setState({
      message: this.state.message + " "
    });
  };

  moveLeft = () => {
    if (this.state.childLeft) {
      const newId = this.state.childLeft;
      this.deselect();
      this.select(newId);
    }
  };

  moveRight = () => {
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

  addLetter = () => {
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

  setAction = time => {
    switch (time) {
      case space:
        this.setState({
          space: true,
          dot: false,
          line: false,
          addLetter: false
        });
        break;
      case dot:
        this.setState({
          space: false,
          dot: true,
          line: false,
          addLetter: false
        });
        break;
      case line:
        this.setState({
          space: false,
          dot: false,
          line: true,
          addLetter: false
        });
        break;
      case addLetter:
        this.setState({
          space: false,
          dot: false,
          line: false,
          addLetter: true
        });
        break;
      default:
        break;
    }
  };

  count = () => {
    const currentTime = this.state.seconds + 1;
    this.setAction(currentTime);
    this.setState({
      seconds: currentTime
    });
  };

  clearTimer = () => {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      seconds: 0
    });
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
          <div className="counter">{this.state.seconds}</div>
          <div className="message">{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default App2;

// TODO add listener that determines whether a keypress is a line or dot
// update keyboard nav

// add space on FOCUS..?

// add icons on empty slots for various functions i.e. switch keyboards, punctuation, save notes,
// new notes, browse notes, set timers - general and select actions,

// autocomplete, suggestions, different languages

// TODO REFACTOR
