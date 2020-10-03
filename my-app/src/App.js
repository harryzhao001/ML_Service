import React from 'react';
import './App.css';
import Player from './players/player';
import {
  BrowserRouter as Router, Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Routes from './Routes';
import useState from 'react';
import useEffect from 'react';



// LINK TO MAKE REQUEST:

//http://127.0.0.1:8000/api/v1/chess_playstyle_classifier/predict?version=0.0.2

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}



export default App;
