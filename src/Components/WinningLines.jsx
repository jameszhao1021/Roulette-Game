import React from 'react';
import ZeroAreaBlockL from './WinningLines/ZeroAreaBlockL';
import HLineTwoMiddleL from './WinningLines/HLineTwoMiddle';
import VLineTwoMiddleL from './WinningLines/VLineTwoMiddle';
import CornerBetL from './WinningLines/CornerBetL';

function WinningLines({addCom, totalChipValues, updateTotalChipValue, setTotalChipValues, singleChipValue, enableChip}){
    return(
        <div className='winningLines'>
           <ZeroAreaBlockL 
              addCom = {addCom} 
              totalChipValues={totalChipValues} 
              updateTotalChipValue={updateTotalChipValue} 
              setTotalChipValues={setTotalChipValues} 
              singleChipValue={singleChipValue}     
              enableChip={enableChip}
           />
           <HLineTwoMiddleL
              addCom = {addCom} 
              totalChipValues={totalChipValues} 
              updateTotalChipValue={updateTotalChipValue} 
              setTotalChipValues={setTotalChipValues} 
              singleChipValue={singleChipValue}
              enableChip={enableChip}
           />
           <VLineTwoMiddleL 
              addCom = {addCom} 
              totalChipValues={totalChipValues} 
              updateTotalChipValue={updateTotalChipValue} 
              setTotalChipValues={setTotalChipValues} 
              singleChipValue={singleChipValue}
              enableChip={enableChip}
           />
           <CornerBetL
              addCom = {addCom} 
              totalChipValues={totalChipValues} 
              updateTotalChipValue={updateTotalChipValue} 
              setTotalChipValues={setTotalChipValues} 
              singleChipValue={singleChipValue} 
              enableChip={enableChip}
          />
        </div>
    )
}

export default WinningLines;