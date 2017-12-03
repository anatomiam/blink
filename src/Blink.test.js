import React from 'react';
import ReactDOM from 'react-dom';
import Blink from './Blink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blink />, div);
});
