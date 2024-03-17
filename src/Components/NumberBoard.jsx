import React from 'react';
import TopArea from './NumberBoardComponent/TopArea';
import SecondBottom from './NumberBoardComponent/SecondBottom';
import LastBottom from './NumberBoardComponent/LastBottom';

function NumberBoard({addCom, totalChipValues, updateTotalChipValue, setTotalChipValues, singleChipValue, winNumber, enableChip}){

    return(
        <div className="numberBoard">
            <TopArea 
               winNumber={winNumber}
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
               enableChip={enableChip}
            />
            <SecondBottom  
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
               enableChip={enableChip}
            />
            <LastBottom  
               addCom={addCom} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
               enableChip={enableChip}
            />
        </div>
    )
}

export default NumberBoard;