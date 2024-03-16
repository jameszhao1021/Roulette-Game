import React from 'react';

function ZeroAreaBlockL({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const prefix = "zeroArea"
    const zeroAreaBlockClick = (event) => {
        event.preventDefault(); // Prevent the default context menu
        const id = `${prefix}`;
        const odd = 17;
        const selectedNum = ["00", 0]
        const totalChipValue = totalChipValues[id] || 0 + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event); 
    };

   const removeSelectedBlocks = (event) => {
    event.preventDefault(); // Prevent the default context menu
    const id = `${prefix}`;
    const odd = 17;
    const selectedNum = ["00", 0]
    const totalChipValue = totalChipValues[id] || 0;
    updateTotalChipValue(id);
    addCom(selectedNum, id, odd, totalChipValue, event);
    // Toggle chip visibility based on right-click event
    if (event.button === 2 && totalChipValue > 0) {
        const updatedTotalChipValues = { ...totalChipValues }; // Copy the state
        updatedTotalChipValues[id] = 0; // Set chip value to 0
        setTotalChipValues(updatedTotalChipValues); // Update the state
    }
};

    return(
        <div className='zeroAreaBlockLs'>
            <div className='zeroAreaBlock' id='zeroAreaBlock' 
            onClick={(event)=>zeroAreaBlockClick(event)} 
            onContextMenu={(event)=>{removeSelectedBlocks(event)}}
            >
            {totalChipValues[`${prefix}`] > 0 && 
            <div className='chip'>{totalChipValues[`${prefix}`]}</div>}
            </div> 
        </div>
    )
}

export default ZeroAreaBlockL;