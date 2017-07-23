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

let interval = 0

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

    this.addLetter = this
      .addLetter
      .bind(this)
    this.handleKeyPress = this
      .handleKeyPress
      .bind(this)
  }

  handleKeyPress(e) {
    console.log(this.state.sentence)
    if (e.key === 'ArrowDown') {
      // this.handleStop()
      this.addLetter()
      this.handleStart()
    } else if (e.key === 'ArrowUp') {
      console.log('going up...')
    } else if (e.key === 'ArrowLeft') {
      console.log('going left.....')
    } else if (e.key === 'ArrowRight') {
      console.log('going right....')
    } else {
      console.log('else')
    }
  }
  addLetter() {
    const newSentence = this.state.sentence.slice()
    newSentence.push(this.state.letter)

    this.setState({
      sentence: newSentence,
      letter: alphabet[0],
      counter: 0
    })
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
        <button onKeyDown={this.handleKeyPress}>focus</button>
      </div>
    );
  }
}

export default App;
