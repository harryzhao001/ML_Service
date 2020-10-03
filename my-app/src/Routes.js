import React from 'react'
import {
    BrowserRouter as Router, Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from './HomePage'
import Player from './players/player.js'
import { useState } from 'react';

export default function Routes() {
    const [playerName, setPlayerName] = useState('');
    return (
        <Router>
            <Switch>
                <Route path="/player">
                    <Player playerName={playerName} />
                </Route>
                <Route path="/">
                    <HomePage setPlayerName={setPlayerName} user='test' />
                </Route>
            </Switch>
        </Router>

    )
}
