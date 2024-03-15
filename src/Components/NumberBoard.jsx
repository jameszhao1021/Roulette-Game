import React from 'react';
import TopArea from './NumberBoardComponent/TopArea';
import SecondBottom from './NumberBoardComponent/SecondBottom';
import LastBottom from './NumberBoardComponent/LastBottom';

function NumberBoard({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const arrayofNumber = Array.from({ length: 36 }, (_, index) => index + 1);

    return(
        <div className="numberBoard">
            <TopArea 
               winNumber={winNumber}
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
            />
            <SecondBottom  
               prop={arrayofNumber} 
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
            />
            <LastBottom  
               prop={arrayofNumber} 
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
            />
        </div>
    )
}

export default NumberBoard;