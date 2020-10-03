import React from 'react'
import './App.css';
import Player from './players/player';
import {
    BrowserRouter as Router, Switch,
    Route,
    Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Routes from './Routes';
import { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '@material-ui/core/Input';


function HomePage(props) {
    // useEffect(() => { console.log(playerName); setPlayerName('a') }, [playerName]);
    return (
        <nav>
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        What type of chess player are you? Find out now!
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); props.history.push('/player') }}>
                        <label>
                            Enter your lichess username:
                            <Input style={{ backgroundColor: 'grey', marginLeft: '20px', marginRight: '10px', marginBottom: '30px', marginTop: '-10px' }} type="text" id="input" onChange={(e) => props.setPlayerName(e.target.value)} />
                        </label>
                        <Button type='submit'>Submit</Button>
                    </form>
                </header>
            </div>
        </nav>
    );
}

export default withRouter(HomePage)

// (e) => setPlayerName(e.target.value)