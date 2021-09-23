import React from 'react';

// import styleSheet
import './TeamSummary.css'

const TeamSummary = (props) => {
    // get the total amount of auction
    const auctionTotal = props.playerList.reduce((total, player) => {
        return total + player.auction_rate;
    }, 0)

    return (
        <div className='summary-holder'>
            <h2>Team Summary</h2>
            <h3>Players: <em><span className='italic'>Selected({props.playerList.length})</span></em></h3>
            {
                props.playerList.map(player => {
                    return (
                        <div className='name-auction'>
                            <div className='name'>
                                <p className='name-holder'>{player.name}</p>
                            </div>
                            <div className='auction'>
                                <p>₹{player.basePrice}</p>
                            </div>
                        </div>
                    )
                })
            }
            <hr/>
            <div className='auction-total'>
                <div className="auction-text">
                    <p>Auction total</p>
                </div>
                <div className="auction-amount">
                    <p>₹{auctionTotal}</p>
                </div>
            </div>

        </div >
    );
};

export default TeamSummary;