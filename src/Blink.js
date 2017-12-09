import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";
import "./Blink.css";

const tree = [];
const svgHeight = 350;
const svgWidth = 700;
const radius = 10;

const space = 5;
const dot = 100;
const line = 200;
const addLetter = 300;
const timerSpeed = 5;


const levels = 6;
let indexers = _.range(0, levels, 0);

const levels_arr = _.range(1, levels + 1);
const yCoor = svgHeight / _.last(levels_arr);

const vex = _.map(levels_arr, level => {
  const y = yCoor * level;
  const n = 2 ** level;
  const nChunck = svgWidth / n;
  // console.log(nChunck);

  const nRange = _.range(1, n + 1, 2);
  // console.log(nRange);
  const toReturn = _.map(nRange, node => {
    return [node * nChunck, y];
  });
  return toReturn;
});
console.log(vex);

class Blink extends Component {
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
        tree.push(
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
        tree.push(
          <circle
            id={data.name}
            className={`${data.name} ${data.level}`}
            data-child-left={data.children ? data.children[0].name : ""}
            data-child-right={data.children ? data.children[1].name : ""}
            data-parent={parent}
            key={Math.random()}
            cx={vex[1][indexers[1]][0]}
            cy={vex[1][indexers[1]][1]}
            r={radius}
          />
        );
        const copyIndexers = indexers.slice();
        copyIndexers[1] = copyIndexers[1] + 1;
        indexers = copyIndexers;
        break;
      case "two":
        tree.push(
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
        tree.push(
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
        tree.push(
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
        tree.push(
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
    if (!this.state.timer) {
      const timer = setInterval(this.count, timerSpeed);
      this.setState({
        timer: timer
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
        <svg height={svgHeight} width={svgWidth}>
          {tree}
        </svg>
        <div className="message-container">
          <div className="counter">{this.state.seconds}</div>
          <div className="message">{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default Blink;
