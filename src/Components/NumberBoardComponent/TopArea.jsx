import React from 'react';
import ZeroArea from './ZeroArea';
import OtherNumber from './OtherNumber'; 


function TopArea({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    return(
        <div className="topArea">
              <ZeroArea 
                 winNumber = {winNumber}
                 addCom = {addCom} 
                 totalChipValues={totalChipValues} 
                 updateTotalChipValue={updateTotalChipValue} 
                 setTotalChipValues={setTotalChipValues} 
                 singleChipValue={singleChipValue}
              />
              <OtherNumber 
                 winNumber = {winNumber}
                 addCom = {addCom} 
                 totalChipValues={totalChipValues} 
                 updateTotalChipValue={updateTotalChipValue} 
                 setTotalChipValues={setTotalChipValues} 
                 singleChipValue={singleChipValue}
              />
        </div>
    )
}

export default TopArea;