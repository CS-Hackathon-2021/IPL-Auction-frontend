import React from 'react';

// import fontawesome
// import styleSheet
import './Player.css';

const Player = (props) => {
    const {id, name, basePrice, category, country, age, imageUrl, noOfMatches, runsScored, noOfWickets, isSold, currentBid} = props.player;
    let convert=basePrice/100000;
    let convertCurrent=currentBid/100000;
    return (
        <div className="player-card">
            <div className="info-holder">
                <h3>{name}</h3>
                <hr/>
                <p>Country: {country}</p>
                <p>Base Price: ₹{convert} Lacs</p>
                <p>Age: {age}</p>
                <p>Role: {category}</p>
                <p>Matches: {noOfMatches}</p>
                <p>Runs: {runsScored}</p>
                <p>Wickets: {noOfWickets}</p>
                {isSold?<p>Sold at ₹: {currentBid}</p>:<p>current Bid ₹:{convertCurrent} Lacs </p>}
            </div>
            <div className="image-holder">
                <div className="image">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Player;