import React, { Component } from "react";
import _ from "lodash";
import { morse } from "./morse";
import "./Blink.css";

const buttons = [];
const circles = [];
const heightMargin = 35;
const svgHeight = 350;
const svgWidth = 700;
const radius = 10;

const space = 5;
const dot = 100;
const line = 200;
const addLetter = 300;
const timerSpeed = 5;

const numberOfLevels = 6;
const levelIndexers = _.range(0, numberOfLevels, 0); // mutates

const levels = _.range(1, numberOfLevels + 1);
const yCoordinate = svgHeight / _.last(levels);

const vectors = _.map(levels, level => {
  const y = yCoordinate * level - heightMargin;
  const node = 2 ** level;
  const xSpacer = svgWidth / node;
  const nodeRange = _.range(1, node + 1, 2);

  return _.map(nodeRange, node => {
    return [node * xSpacer, y];
  });
});

console.log(vectors);

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
    this.buildCircles(morse, "FOCUS");
  }

  componentDidMount = () => {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    // this.select("FOCUS");
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
  }

  buildCircles = (data, parent) => {
    circles.push(
      <g key={Math.random()}>
        <circle
          id={data.name}
          className={`${data.name}`}
          data-child-left={data.children ? data.children[0].name : ""}
          data-child-right={data.children ? data.children[1].name : ""}
          data-parent={parent}
          data-level={data.level}
          cx={vectors[data.level][levelIndexers[data.level]][0]}
          cy={vectors[data.level][levelIndexers[data.level]][1]}
          r={radius}
          stroke="steelblue"
          strokeWidth="1"
          fill="none"
        />
        <text
          x={vectors[data.level][levelIndexers[data.level]][0]}
          y={vectors[data.level][levelIndexers[data.level]][1]}
          textAnchor='middle' 
          alignmentBaseline="central"
        >
          {data.name}
        </text>
      </g>
    );
    levelIndexers[data.level] = levelIndexers[data.level] + 1;
    if (data.children) {
      this.buildCircles(data.children[0], data.name);
      this.buildCircles(data.children[1], data.name);
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
    console.log(selected_element);
    if (selected_element !== null) {
      // selected_element.classList.add("selected");
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
        {buttons}
        <svg height={svgHeight} width={svgWidth}>
          {circles}
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
