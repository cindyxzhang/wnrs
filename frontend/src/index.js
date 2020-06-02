import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Level1Card from './pages/Level1Card';
import './pages/Level1Card.css';
import Players from './pages/Players';
import './pages/Players.css'
import testcards from './pages/testcards';
ReactDOM.render(
  <React.StrictMode>
    <Level1Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
