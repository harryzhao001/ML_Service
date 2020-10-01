import React from 'react';
//import logo from './logo.svg';
import './Nakamura.css';

function Nakamura() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="https://pbs.twimg.com/media/EUX4JgBX0AEeKHc.png" className="App-logo" alt="logo" />
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
            </header>
        </div>
    );
}

export default Nakamura;
