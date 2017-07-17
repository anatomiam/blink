// import _ from 'lodash'
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sentence: [],
      loop: true,
    }

    this.handleFlip = this.handleFlip.bind(this)
  }

  handleFlip() {
    this.setState({
      loop: !this.state.loop
    })
  }
  
  render() {
    console.log(this.state.loop)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <h2>{this.state.loop ? alphabet : null}</h2>
        <button onClick={this.handleFlip}>flip</button>
      </div>
    );
  }
}

export default App;
