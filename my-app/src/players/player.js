import React from 'react';
//import logo from './logo.svg';
import './player.css';
import { useEffect } from 'react';

// var nakaimg = "https://pbs.twimg.com/media/EUX4JgBX0AEeKHc.png"
// var nakades = "Hikaru Nakamura (born 1987), the American grandmaster, exemplifies the typical Barbarian. Constantly seeking complications and fighting to win in every game, the former child prodigy has ranked as high as #3 in the world rankings. Nakamura is a very emotional player, as can be seen just by watching his facial expressions as he plays. He takes losses very hard, but this doesn't prevent him from taking risks to go for the win in any position. A player with lightning-quick calculating ability and a very wide opening repertoire, his previous use of the extremely brash 1.e4 e5 2.Qh5?! solidifies his position as a chess Barbarian."

function Player(props, username) {
    useEffect(() => { console.log(props.playerName); }, []);
    let request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:8000/api/v1/chess_playstyle_classifier/predict?version=0.0.2", true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify({
        'player': props.playerName
    }))

    var img = ''

    request.onreadystatechange = function () {
        console.log(this.response)
        var obj = JSON.parse('{"player":"Vladislav Artemiev","status":"OK","request_id":46}')
        var description = ''
        if (obj.status = "OK") {
            if (obj.player == 'Magnus Carlsen') {
                img = 'https://images.wsj.net/im-39364?width=1280&size=1'
            } else if (obj.player == "Andrew Tang") {
                img = 'https://pbs.twimg.com/profile_images/962502111396216832/Ss5IPnNm_400x400.jpg'
            } else if (obj.player == "Vladislav Artemiev") {
                img = 'https://pbs.twimg.com/media/EUX4JgBX0AEeKHc.png'
            } else if (obj.player == "Alireza Firouzja") {
                img = 'https://kayhanlife.com/wp-content/uploads/2020/01/FIROUZJA6565.jpg'
            } else if (obj.player == "Nihal Sarin") {
                img = 'https://cbin.b-cdn.net/img/NI/Nihal-wrb_C71Y6_960x739.jpeg'
            } else if (obj.player == "Anish Giri") {
                img = 'https://app.fide.com/upload/4756/eed84a5b2543a66b9e05b6149930c548.jpg'
            } else if (obj.player == "Fabiano Caruana") {
                img = 'https://new.uschess.org/sites/default/files/wp-thumbnails/43258896545_acfd1192be_k.jpg'
            } else if (obj.player == "Andrey Esipenko") {
                img = 'https://images.chesscomfiles.com/uploads/v1/news/611364.184d8637.668x375o.cc40ce234363@2x.png'
            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={img} />
                <p id='player_description'></p>
            </header>
        </div>
    );
}

export default Player;
