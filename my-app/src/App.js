import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          What type of chess player are you? Find out now!
        </p>
        <form>
          <label>
            Enter your lichess username:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          See list of playstyle types
        </a>
      </header>
    </div>
  );
}

export default App;
