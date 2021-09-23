import React from 'react';

// import fontawesome
// import styleSheet
import './Player.css';

const Player = (props) => {
    const {id, name, basePrice, category, country, age, noOfMatches, runsScored, noOfWickets, isSold, currentBid} = props.player;
    return (
        <div className="player-card">
            <div className="info-holder">
                <h3>{name}</h3>
                <hr/>
                <p>Country: {country}</p>
                <p>Base Price: ₹{basePrice}</p>
                <p>Age: {age}</p>
                <p>Role: {category}</p>
                <p>Matches: {noOfMatches}</p>
                <p>Runs: {runsScored}</p>
                <p>Wickets: {noOfWickets}</p>
                {isSold?<p>Sold at ₹: {currentBid}</p>:<p>current Bid ₹:{currentBid} </p>}
            </div>
        </div>
    );
};

export default Player;