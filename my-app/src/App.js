import React from 'react';
import './App.css';
import Button from '@material-ui/core/button';
import Nakamura from './players/Nakamura';
import {
  BrowserRouter as Router, Switch,
  Route,
  Link
} from "react-router-dom";

function Player() {
  return Nakamura();
}

function HomeScreen() {
  return (
    <Router>
      <nav>
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
              <Link to="/player">Submit</Link>
            </form>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              See list of playstyle types
            </a> */}
          </header>
        </div>
      </nav>
      <Switch>
        <Route path="/player">
          <Player />
        </Route>
      </Switch>
    </Router>

  );
}

function App() {
  return (
    HomeScreen()
  );
}



export default App;
