import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Level1Card from './pages/Level1Card';
import './pages/Level1Card.css';
import Players from './pages/Players';
import './pages/Players.css'

ReactDOM.render(
  <React.StrictMode>
    <Players />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
