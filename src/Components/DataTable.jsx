import React from 'react';

function DataTable({currentBet, balance, win, lost, netGain, totalWin, totalLost}){
   
    
    return(
        <div className="dataTable">
           <h1>BALANCE: <span id="balance">{balance}</span></h1>
           <h2>CURRENT BET: <span id="currentBet">{currentBet}</span></h2>
           <h2>WIN: <span id="winData">{win}</span></h2>
           <h2>LOST: <span id="lostData">{lost}</span></h2>
           <h2>NET GAIN: <span id="netGain">{netGain}</span></h2>
           <h2>TOTAL WIN: <span id="totalWinData">{totalWin}</span></h2>
           <h2>TOTAL LOST: <span id="totalLostData">{totalLost}</span></h2>
        </div>
    )
}

export default DataTable;