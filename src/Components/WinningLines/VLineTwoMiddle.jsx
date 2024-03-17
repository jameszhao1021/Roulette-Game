import React from 'react';



function VLineTwoMiddleL({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const prefix = "vLineTwoMiddleB"
    var listofNumber = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11],
        [12, 13, 14], [15, 16, 17], [18, 19, 20], [21, 22, 23],
        [24, 25, 26], [27, 28, 29], [30, 31, 32], [33, 34, 35]
    ];

    const vLineClick = (rowIndex, colIndex, event) => {
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let  selectedNum
        if (colIndex === 0 && rowIndex === 0) {
            const numLeft = '00';
            const  numRight = 3;
            selectedNum = [numLeft, numRight];
        } else if (colIndex === 0 && rowIndex === 1) {
            const numLeftTop = '00';
            const numLeftBottom = 0;
            const numRight = 2;
            selectedNum = [numLeftTop, numLeftBottom, numRight];
        } else if (colIndex === 0 && rowIndex === 2) {
            const numLeft = 0;
            const numRight = 1;
            selectedNum = [numLeft, numRight];
        } else {
            const numLeft = ((3 * colIndex)) - (rowIndex);
            const numRight = (3 + (3 * colIndex)) - (rowIndex);
            selectedNum = [numLeft, numRight];
        }
        const odd = (colIndex == 0 && rowIndex == 1) ? 11 : 17;
        const totalChipValue = (totalChipValues[id] || 0) + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
        }
        
    const removeSelectedBlocksItem = (rowIndex, colIndex, event) => {
        event.preventDefault();
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let  selectedNum
        if (colIndex === 0 && rowIndex === 0) {
            const numLeft = '00';
            const  numRight = 3;
            selectedNum = [numLeft, numRight];
        } else if (colIndex === 0 && rowIndex === 1) {
            const numLeftTop = '00';
            const numLeftBottom = 0;
            const numRight = 2;
            selectedNum = [numLeftTop, numLeftBottom, numRight];
        } else if (colIndex === 0 && rowIndex === 2) {
            const numLeft = 0;
            const numRight = 1;
            selectedNum = [numLeft, numRight];
        } else {
            const numLeft = ((3 * colIndex)) - (rowIndex);
            const numRight = (3 + (3 * colIndex)) - (rowIndex);
            selectedNum = [numLeft, numRight];
        }
        const odd = (colIndex == 0 && rowIndex == 1) ? 11 : 17;
        const totalChipValue = (totalChipValues[id] || 0) ;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
        if (event.button === 2 && totalChipValue > 0) {
            const updatedTotalChipValues = { ...totalChipValues }; // Copy the state
            updatedTotalChipValues[id] = 0; // Set chip value to 0
            setTotalChipValues(updatedTotalChipValues); // Update the state
        }
    };

    return(
        <div className='vLineTwoMiddleLs'>
            {
             listofNumber.map((col, colIndex)=>(
                <div key={colIndex} className='vLineTwoMiddleL'id={`vLineTwoMiddleL_${colIndex}`}>
                    {
                        col.map((content, rowIndex)=>(
                            <div key={rowIndex} className='vLineTwoMiddleB' id={`vLineTwoMiddleB_${rowIndex}_${colIndex}`} 
                            onClick={(event) => vLineClick(rowIndex, colIndex, event)} 
                            onContextMenu={(event) => removeSelectedBlocksItem(rowIndex, colIndex, event)}
                            >
                            {totalChipValues[`${prefix}_${rowIndex}_${colIndex}`] > 0 && 
                            <div className='chip'>{totalChipValues[`${prefix}_${rowIndex}_${colIndex}`]}</div>}
                            </div>
                        ))
                    }
                </div>
             ))
           }
        </div>
    )
}

export default VLineTwoMiddleL;