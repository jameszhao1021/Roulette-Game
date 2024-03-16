import React, { useState, useRef } from 'react';
import SpinWheel from './SpinWheel';
import '../Stylesheets/ButtonArea.css';
import rouletteSound from '../Assets/rouletteSound.mp3';
import Alert from './Alert';

function ButtonArea({myChart, setSingleChipValue, setWinNumber,selectedCombination, setSelectedCombination, setTotalChipValues, balance, setBalance, currentBet, win, setWin, lost, setLost, netGain, setNetGain, totalWin, setTotalWin, totalLost, setTotalLost}){
    const initialBalance = 10000;
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };

    const [showAlert, setShowAlert] = useState (false)
      
    // Reference to the audio element
    const audioRef = useRef(null);
     
    const [isDisabled, setIsDisabled] = useState(false)

    const [classArray, setClassArray] = useState([ 
        { id: 0, additionalClass: '' },
        { id: 1, additionalClass: 'selectedChip' },
        { id: 2, additionalClass: '' },
        { id: 3, additionalClass: '' },
        { id: 4, additionalClass: '' }
    ]);
   
    //set single chip value by clicking chip icons
    function changeChipValue(e){
        setSingleChipValue(parseInt(e.target.innerText))
        
        const updatedClassArray = classArray.map(item => {
            if (item.id == e.target.id) {
                return { ...item, additionalClass: 'selectedChip' };
            } else {
                return { ...item, additionalClass: '' };
            }
        });
        setClassArray(updatedClassArray);
        console.log(classArray[0].additionalClass)
    }
  
    // Function to handle mute/unmute toggle
    const toggleMute = () => {
        if (isChecked) {
        // Unmute the audio by setting volume to 0
        audioRef.current.volume = 0;
        } else {
        // Mute the audio by setting volume to 1
        audioRef.current.volume = 1;
        }
        // Toggle the mute state
       
    };
    
    //Restart the game
    function restart(){
        setShowAlert(false);
        setWinNumber('')
        setBalance(initialBalance);
        setWin(0);
        setLost(0);
        setNetGain(0);
        setTotalWin(0);
        setTotalLost(0);
        setSelectedCombination([]); 
        setTotalChipValues({});
        classArray.forEach(item => (item.additionalClass = ''));
        classArray[1].additionalClass = 'selectedChip';
    }
    //Delete all Chips on the betting area and reset the current bet
    function deleteAll(){
        setBalance(prev=>prev + currentBet);
        setSelectedCombination([]); 
        setTotalChipValues({});
    }

    return(
        <>
        <Alert restart={restart} showAlert={showAlert}/>
        <div className='buttonArea'>
             <audio src={rouletteSound} className="roulleteSound" ref={audioRef}></audio>
             <div className='chipsArea d-flex'>
           <div id='0' className={`chipforDemo ${classArray[0].additionalClass}`} onClick={(e)=>changeChipValue(e)}>50</div>
           <div id='1' className={`chipforDemo ${classArray[1].additionalClass}`} onClick={(e)=>changeChipValue(e)}>100</div>
           <div id='2' className={`chipforDemo ${classArray[2].additionalClass}`} onClick={(e)=>changeChipValue(e)}>250</div>
           <div id='3' className={`chipforDemo ${classArray[3].additionalClass}`} onClick={(e)=>changeChipValue(e)}>500</div>
           <div id='4' className={`chipforDemo ${classArray[4].additionalClass}`} onClick={(e)=>changeChipValue(e)}>1000</div>
           </div>
           <div className='buttonsArea d-flex'>
           <button className="button soundEffect" onClick={()=>{handleCheckboxChange(); toggleMute()}}>
                <input
                        type="checkbox"
                        id="myCheckbox"
                        checked={isChecked}  
                    />
                Enable Sound
           </button>
           <button className="button" id="restart" onClick={restart} disabled={isDisabled}>Restart</button>
           <button className="button" id="deleteAll" onClick={deleteAll} disabled={isDisabled}>Delete All</button>
           <SpinWheel myChart={myChart}  setWinNumber={setWinNumber} selectedCombination={selectedCombination} setSelectedCombination={setSelectedCombination} setTotalChipValues={setTotalChipValues} balance={balance} setBalance={setBalance} win={win} setWin={setWin} lost={lost} setLost={setLost} currentBet={currentBet} netGain={netGain} setNetGain={setNetGain} totalWin={totalWin} setTotalWin={setTotalWin} totalLost={totalLost} setTotalLost={setTotalLost} isDisabled={isDisabled} setIsDisabled={setIsDisabled} audioRef={audioRef} setShowAlert={setShowAlert}/>
           </div>
        </div>
     </>
    )
}

export default  ButtonArea;

