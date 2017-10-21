import React, {Component} from 'react';
import './App.css';

const alphabet = [
  'space',
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
  }

  componentDidUpdate() {
    console.log(this.state.sentence)
  }

  handleKeyPress = (e) => {
    if (e.key === 'ArrowDown') {
      this.handleStop()
      this.addLetter()
      this.handleStart()
    } else if (e.key === 'ArrowUp') {
      this.handleStart()
    } else if (e.key === 'ArrowLeft') {
      this.stepPrevious()
    } else if (e.key === 'ArrowRight') {
      this.stepNext()
    } else {
      console.log('else')
    }
  }
  addLetter = () => {
    const newSentence = this
      .state
      .sentence
      .slice()
    
    newSentence.push(this.state.letter)

    this.setState({sentence: newSentence, letter: alphabet[0], counter: 0})
    console.log('added letter')
  }

  nextLetter = () => {
    this.setState({
      letter: alphabet[this.state.counter],
      counter: this.state.counter + 1 % alphabet.length
    })
  }

  previousLetter = () => {
    console.log(this.state.counter)
    this.setState({
      letter: alphabet[this.state.counter],
      counter: this.state.counter - 1 % alphabet.length
    })
  }

  handleStart = () => {
    interval = setInterval(this.nextLetter, 500)
    console.log('start')
  }

  handleStop = () => {
    if (interval) {
      clearInterval(interval)
    }
  }

  stepNext = () => {
    this.handleStop()
    this.nextLetter()
  }

  stepPrevious = () => {
    this.handleStop()
    this.previousLetter()
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.letter}</h1>
        <button autoFocus onKeyDown={this.handleKeyPress}>FOCUS</button>
        <h2>{this.state.sentence.map((letter) => letter === 'space' ? '_' : letter).join('')}</h2>
      </div>
    );
  }
}

export default App;
