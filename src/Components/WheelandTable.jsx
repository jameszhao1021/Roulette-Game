import React from "react";
import RouletteWheel from "./RouletteWheel";
import DataTable from "./DataTable";
import '../Stylesheets/WheelandTable.css';
import arrow from '../Assets/arrow.png';

function WheelandTable({setMyChart, setWinNumber, currentBet, balance, win, lost, netGain, totalWin, totalLost}){
    return(
        <div className='wheelandTable'>
            <div className="wrapper">
                <img className='arrow' src={arrow} alt="arrow" />
                <RouletteWheel setMyChart={setMyChart} setWinNumber={setWinNumber}/>  
            </div>
            <DataTable currentBet={currentBet} balance={balance} win={win} lost={lost} netGain={netGain} totalWin={totalWin} totalLost={totalLost}/>
        </div>
    )
}

export default  WheelandTable;