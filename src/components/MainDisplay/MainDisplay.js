import React, { useState, useEffect } from 'react';
import { playerDataDummy } from '../mockData/mock';

// import styleSheet
import './MainDisplay.css';

// import components
import Player from '../Player/Player';
import TeamSummary from '../TeamSummary/TeamSummary';

const MainDisplay = () => {

    // useState to get the fetched data
    const [playerData, setplayerData] = useState([]);
    
    // fetch data from fake api hosted on mocki.io 
    // useEffect(() => {
    //     fetch('https://api.mocki.io/v1/55c0e90b')
    //         .then(res => res.json())
    //         .then(data => setplayerData(data))
    //         .catch(err => console.log(err));
    // }, []);
    useEffect(() => {
        setplayerData(playerDataDummy)
    }, []);

    // useState to update the player list
    const [playerList, setPlayerList] = useState([]);

    // function to handle the click event
    const playerAddHandler = (newPlayer) => {
        if (playerList.includes(newPlayer) === true) {
            alert('You have already added!');
        } else {
            const newPlayerList = [...playerList, newPlayer];
            setPlayerList(newPlayerList);
        }
    }

    return (
        <div className='main row align-item-center'>
            <div className='player-holder col-8'>
                {
                    playerData.map((player, i) => <Player key={i} playerAddHandler={() => playerAddHandler(player)} player={player}></Player>)
                }
            </div>
            <div className="team-summary col-3">
                <TeamSummary playerList={playerList}></TeamSummary>
            </div>
        </div>
    );
};

export default MainDisplay;