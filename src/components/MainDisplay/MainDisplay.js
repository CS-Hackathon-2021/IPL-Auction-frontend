import React, { useState, useEffect } from "react";
import { playerDataDummy } from "../mockData/mock";

// import styleSheet
import "./MainDisplay.css";
import { Button } from "react-bootstrap";
// import components
import Player from "../Player/Player";
import TeamSummary from "../TeamSummary/TeamSummary";

const MainDisplay = () => {
  // useState to get the fetched data
  const [playerData, setplayerData] = useState([]);
  
  const updateData=(current)=>{
      let newPlayerData=JSON.parse(JSON.stringify(playerData));
      newPlayerData[0].currentBid=current;
      (async () => {
        const rawResponse = await fetch('http://18.116.170.33:8080/player', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPlayerData[0])
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
      setplayerData(newPlayerData)
  }
  
  let current=0
  const playerAddHandler = (newPlayer) => {
    return (
      <div>
        <label htmlFor="formGroupExampleInput">Enter Bidding Value in Lacs</label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e)=>{current=e.target.value}}
        />
        <Button onClick={()=>{if(current<(newPlayer.basePrice/100000) || current<(newPlayer.currentBid/100000))alert("Enter Value greater than current Bid or BasePrice")
        else{updateData(current*100000)}}}>Make a Bid</Button>
      </div>
    );
  };

  // fetch data from fake api hosted on mocki.io
   useEffect(() => {
       fetch('http://18.116.170.33:8080/biddingSession?id=1')
           .then(res => res.json())
           .then(data => {let dataList=[]
            dataList.push(data.currentPlayer)
            setplayerData(dataList)})
          .catch(err => console.log(err));
          
   }, []);
//   useEffect(() => {
//     setplayerData(playerDataDummy);
//   }, []);

  
  // useState to update the player list
  const [playerList, setPlayerList] = useState([]);
  // function to handle the click event

  return (
    <div>
    <div className="main row align-item-center">
      <div className="player-holder col-8">
        {playerData.map((player, i) => (
          <Player
            key={i}
            player={player}
          ></Player>
        ))}
      </div>
      <div className="team-summary col-3">
        <TeamSummary playerList={playerList}></TeamSummary>
      </div>
    </div>
    <div className="make-bid">
        {playerAddHandler(playerData[0])}
    </div>
</div>
  );
};

export default MainDisplay;
