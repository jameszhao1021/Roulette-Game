import React from 'react';

function LastBottom({addCom, totalChipValues, updateTotalChipValue, setTotalChipValues, singleChipValue, enableChip}){
    const prefix = "lastBottom"
    const arrayofLastBottom = ['1 to 18', 'Even', 'Red', 'Black', 'Odd', '19 to 36'];

    const lastBottomClick = (index, event) => {
        if(enableChip === true){
        const id = `${prefix}_${index}`;
        const selectedNum = `${index}` == 0 ? Array.from({ length: 18 }, (_, index) => index + 1)
                           :`${index}` == 1 ? Array.from({ length: 18 }, (_, index) => (index + 1) * 2)
                           :`${index}` == 2 ? [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
                           :`${index}` == 3 ? [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
                           :`${index}` == 4 ? Array.from({ length: 18 }, (_, index) => index * 2 + 1)
                           : Array.from({ length: 18 }, (_, index) => index + 19)
        const odd = 1;
        const totalChipValue = (totalChipValues[id] || 0) + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
        }else{
           return;
        }
   };

    const removeSelectedBlocks= (index, event) => {
        event.preventDefault(); // Prevent the default context menu
        if(enableChip === true){
        const id = `${prefix}_${index}`;
        const odd = 1;
        const selectedNum = `${index}` == 0 ? Array.from({ length: 18 }, (_, index) => index + 1)
                           :`${index}` == 1 ? Array.from({ length: 18 }, (_, index) => (index + 1) * 2)
                           :`${index}` == 2 ? [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
                           :`${index}` == 3 ? [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
                           :`${index}` == 4 ? Array.from({ length: 18 }, (_, index) => index * 2 + 1)
                           : Array.from({ length: 18 }, (_, index) => index + 19)
        const totalChipValue = totalChipValues[id] || 0;
        addCom(selectedNum, id, odd, totalChipValue, event);
        // Toggle chip visibility based on right-click event
        if (event.button === 2 && totalChipValue > 0) {
            const updatedTotalChipValues = { ...totalChipValues }; // Copy the state
            updatedTotalChipValues[id] = 0; // Set chip value to 0
            setTotalChipValues(updatedTotalChipValues); // Update the state
        }
        }else{
           return;
        }
    };

    return(
        <div className="lastBottom">
            {
                arrayofLastBottom.map((num,index)=>(
                    <div key={index} className='lastBottomBlock' id={`${prefix}_${index}`} 
                    onClick={(event)=>lastBottomClick(index, event)} 
                    onContextMenu={(event)=>{removeSelectedBlocks(index, event)}}
                    >
                    <div className='lastBottomBlockCon'>{num}</div>
                    {totalChipValues[`${prefix}_${index}`] > 0 && 
                    <div className='chip'>{totalChipValues[`${prefix}_${index}`]}</div>}
                    </div>
                ))
            }
        </div>
    )
}

export default LastBottom;



