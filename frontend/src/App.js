import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenericButton from './components/GenericButton/index.js'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dont Learn React
          Kyle is kool 
          Shannon is Kooler
        </a>
        <GenericButton label='sheep'></GenericButton>
        <GenericButton label='instructions'></GenericButton>
      </header>
    </div>
  );
}

export default App;
