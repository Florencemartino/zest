import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0);


  fetch('/time')
      .then(res => {

        if (res.status === 200) {
          return res.json()
        } else {
          throw res.status
        }
      })

      .then(data => {
        setCurrentTime(data.time);
      });


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
          Learn React
        </a>

        <p>The current time is {currentTime}.</p>

      </header>
    </div>
  );
}

export default App;
