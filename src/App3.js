import React, { Component } from "react";
import "./App3.css";
import _ from "lodash";
import { alphabet2 } from "./morse";

class App3 extends Component {
  render() {
    return (
      <div className="parent">
        {_.map(alphabet2, letter => {
          return <div key={letter + Math.random()} className={`child ${letter}`}>{letter}</div>;
        })}
      </div>
    );
  }
}

export default App3;
