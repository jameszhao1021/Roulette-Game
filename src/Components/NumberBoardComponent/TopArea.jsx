import React from 'react';
import ZeroArea from './ZeroArea';
import OtherNumber from './OtherNumber'; 

function TopArea({addCom, totalChipValues, updateTotalChipValue, setTotalChipValues, singleChipValue, winNumber, enableChip}){
    return(
        <div className="topArea">
              <ZeroArea 
                 winNumber = {winNumber}
                 addCom = {addCom} 
                 totalChipValues={totalChipValues} 
                 updateTotalChipValue={updateTotalChipValue} 
                 setTotalChipValues={setTotalChipValues} 
                 singleChipValue={singleChipValue}
                 enableChip={enableChip}
              />
              <OtherNumber 
                 winNumber = {winNumber}
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

export default TopArea;