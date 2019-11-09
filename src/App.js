import React from 'react';
import plus_symbol from './white-plus-png.png';
import react_logo from './react_logo.svg';
import heroku_logo from './heroku-icon.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
         <Navigation />
      <header className="App-header">
        <div className="container">
          <img src={react_logo} className="App-logo" alt="logo" />
          <img src={plus_symbol} className="App-logo" alt="logo" />

          <img src={heroku_logo} className="App-logo" alt="logo" />
        </div>
        <p>
          React on Heroku.
        </p>
        <a
          className="App-link"
          href="https://github.com/zenkbaries"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://twitter.com/kbaries"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
