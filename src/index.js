import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blink from './Blink';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blink />, document.getElementById('root'));
registerServiceWorker();
