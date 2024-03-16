import React from 'react';




function ZeroArea({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const prefix = "zeroArea";
    const listofZero = ['00', '0'];


    const zeroBlockClick = (index, event) => {
        const id = `${prefix}_${index}`;
        const selectedNum = `${index}` == 0 ? ["00"]:[0];
        const odd = 35;
        const totalChipValue = (totalChipValues[id] || 0) + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
    };

   function removeSelectedBlocks(index, event){
    event.preventDefault(); // Prevent the default context menu
    const id = `${prefix}_${index}`;
    const odd = 35;
    const selectedNum = `${index}` == 0 ? ["00"]:[0];
    const totalChipValue = totalChipValues[id] || 0;
    addCom(selectedNum, id, odd, totalChipValue, event);
    // Toggle chip visibility based on right-click event
    if (event.button === 2 && totalChipValue > 0) {
        const updatedTotalChipValues = { ...totalChipValues }; // Copy the state
        updatedTotalChipValues[id] = 0; // Set chip value to 0
        setTotalChipValues(updatedTotalChipValues); // Update the state
    }
   }

    return(
        <div className="zeroArea">
            {
                 listofZero.map((num, index)=>(
                    <div key={index} className='zeroBlock' id={`zeroBlock_${index}`} 
                    onClick={(event)=>zeroBlockClick(index, event)} 
                    onContextMenu={(event)=>{removeSelectedBlocks(index, event)}}
                    >
                     <div className={`zeroBlockNum ${num == winNumber? "winningNumber":""} `}> {num}</div>
                     {totalChipValues[`${prefix}_${index}`] > 0  &&
                    <div className='chip'>{totalChipValues[`${prefix}_${index}`]}</div>}
                    </div> 
                ))
            }
        </div>
    )

}

export default ZeroArea;