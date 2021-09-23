import React from 'react';

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import styleSheet
import './Player.css';

const Player = (props) => {

    const {name, basePrice, role, country, age, matches, runs, wickets, strikeRate} = props.player;
    return (
        <div className="player-card">
            <div className="info-holder">
                <h3>{name}</h3>
                <hr/>
                <p>Country: {country}</p>
                <p>Base Price: ₹{basePrice}</p>
                <p>Age: {age}</p>
                <p>Role: {role}</p>
                <p>Matches: {matches}</p>
                <p>Runs: {runs}</p>
                <p>Wickets: {wickets}</p>
                <p>Strike Rate: {strikeRate}</p>
                <button onClick={props.playerAddHandler}> <FontAwesomeIcon icon={faPlus} /> Bid for Player</button>
            </div>
        </div>
    );
};

export default Player;