import React, {Component} from 'react';
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

let interval

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      letter: '',
      sentence: [],
      loop: true,
      counter: 0
    }

    this.handleStart = this
      .handleStart
      .bind(this)

    this.handleStop = this
      .handleStop
      .bind(this)
      
    this.nextLetter = this
      .nextLetter
      .bind(this)
  }

  nextLetter() {
    this.setState({
      letter: alphabet[this.state.counter % alphabet.length],
      counter: this.state.counter + 1
    })
  }

  handleStart() {
    interval = setInterval(this.nextLetter, 500)
  }

  handleStop() {
    clearInterval(interval)
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.letter}</h2>
        <button onClick={this.handleStart}>start</button>
        <button onClick={this.handleStop}>stop</button>
      </div>
    );
  }
}

export default App;
