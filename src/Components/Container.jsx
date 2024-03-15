import React, { useState } from 'react';
import WheelandTable from "./WheelandTable";
import ButtonArea from './ButtonArea';
import BettingBoard from './BettingBoard';
import '../Stylesheets/Container.css';


function Container(){
    const [myChart, setMyChart] = useState(null); 
    const [singleChipValue, setSingleChipValue] = useState(100);
    const [winNumber, setWinNumber] = useState('');
    const [selectedCombination, setSelectedCombination] = useState([]);
    const [totalChipValues, setTotalChipValues] = useState({});
    const [currentBet, setCurrentBet] = useState(0);
    const [balance, setBalance] = useState(10000);
    const [win, setWin] = useState(0);
    const [lost, setLost] = useState(0);
    const [netGain, setNetGain] = useState(0);
    const [totalWin, setTotalWin] = useState(0);
    const [totalLost, setTotalLost] = useState(0);
    
    return(  
        <div className='outerContainer justify-content-center'>
            <div className='row justify-content-center '>      
               <div className='col-xl-8 col-lg-10 col-md-12'>  
                    <WheelandTable setMyChart={setMyChart} currentBet={currentBet} balance={balance} win={win} lost={lost} netGain={netGain} setNetGain={setNetGain} totalWin={totalWin} totalLost={totalLost}/>
                    <ButtonArea myChart={myChart} setSingleChipValue={setSingleChipValue} setWinNumber={setWinNumber} setSelectedCombination={setSelectedCombination} setTotalChipValues={setTotalChipValues} balance={balance} setBalance={setBalance} win={win} setWin={setWin} selectedCombination={selectedCombination} currentBet={currentBet} lost={lost} setLost={setLost} netGain={netGain} setNetGain={setNetGain} totalWin={totalWin} setTotalWin={setTotalWin} totalLost={totalLost} setTotalLost={setTotalLost}/>
                    <BettingBoard singleChipValue={singleChipValue} winNumber={winNumber} selectedCombination={selectedCombination} setSelectedCombination={setSelectedCombination} totalChipValues={totalChipValues} setTotalChipValues={setTotalChipValues} setCurrentBet={setCurrentBet} setBalance={setBalance} currentBet={currentBet} balance={balance} setWin={setWin} /> 
               </div>     
           </div>
        </div>
    )
}


export default Container;