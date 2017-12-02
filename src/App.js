import React, {Component} from 'react';
import './App.css';
import { morse, alphabet } from './data'


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
    // console.log(morse)
  }

  componentDidUpdate() {
    // console.log(this.state.sentence.join(''))
  }

  handleKeyPress = (e) => {
    if (e.key === 'ArrowDown') {
      this.handleStop()
      this.addLetter()
      this.handleStart()
    } else if (e.key === 'ArrowUp') {
      this.handleStop()
      this.handleStart()
    } else if (e.key === 'ArrowLeft') {
      this.stepPrevious()
    } else if (e.key === 'ArrowRight') {
      this.stepNext()
    } else if (e.key === 'q') {
      this.handleStop()
    } else {
      // console.log('else')
    }
  }

  addLetter = () => {
    const newSentence = this
      .state
      .sentence
      .slice()

    if (this.state.letter === 'space') {
      newSentence.push(' ')
    } else if (this.state.letter === 'undo') {
      newSentence.pop()
    } else {
      newSentence.push(this.state.letter)
    }

    this.setState({
      sentence: newSentence, 
      letter: alphabet[0], 
      counter: 0})
    // console.log('added letter')
  }

  nextLetter = () => {
    // console.log((this.state.counter + 1) % alphabet.length)
    this.setState({
      letter: alphabet[this.state.counter],
      counter: (this.state.counter + 1) % alphabet.length
    })
  }

  previousLetter = () => {
    // console.log(this.state.counter)
    this.setState({
      letter: alphabet[this.state.counter - 2],
      counter: (this.state.counter - 1) % alphabet.length
    })
  }

  handleStart = () => {
    interval = setInterval(this.nextLetter, 500)
    // console.log('start')
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
      <div className='app'>
        <div className='children'>
          <h1>{this.state.letter}</h1>
        </div>
        <div className='children'>
          <button autoFocus onKeyDown={this.handleKeyPress}>FOCUS</button>
        </div>
        <div className='children'>
          <h2>{this
              .state
              .sentence
              .join('')}
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
