import React from 'react';



function HLineTwoMiddleL({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const prefix = "hLineTwoMiddleB"
    var listofNumber = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    ];

    const hLineClick = (rowIndex, colIndex, event) => {
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let  selectedNum
        if (rowIndex == 0 || rowIndex == 1) {
            const numBottom = ((2 - rowIndex) + (3 * colIndex));
            const numTop = ((3 - rowIndex) + (3 * colIndex));
            selectedNum = [numBottom, numTop];
        } else {
            const numBottom = (1 + (3 * colIndex));
            const numMiddle = (2 + (3 * colIndex));
            const numTop = (3 + (3 * colIndex));
            selectedNum = [numBottom, numMiddle, numTop];
        }
        const odd = (rowIndex == 2) ? 11 : 17;
        const totalChipValue = (totalChipValues[id] || 0) + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
    };

    const removeSelectedBlocksItem = (rowIndex, colIndex, event) => {
        event.preventDefault();
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let  selectedNum
        if (rowIndex == 0 || rowIndex == 1) {
            const numBottom = ((2 - rowIndex) + (3 * colIndex));
            const numTop = ((3 - rowIndex) + (3 * colIndex));
            selectedNum = [numBottom, numTop];
        } else {
            const numBottom = (1 + (3 * colIndex));
            const numMiddle = (2 + (3 * colIndex));
            const numTop = (3 + (3 * colIndex));
            selectedNum = [numBottom, numMiddle, numTop];
        }
        const odd = (rowIndex == 2) ? 11 : 17;
        const totalChipValue = (totalChipValues[id] || 0);
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
        if (event.button === 2 && totalChipValue > 0) {
            const updatedTotalChipValues = { ...totalChipValues }; // Copy the state
            updatedTotalChipValues[id] = 0; // Set chip value to 0
            setTotalChipValues(updatedTotalChipValues); // Update the state
        }
    };

    return(
        <div className='hLineTwoMiddleLs'>
             {
             listofNumber.map((row, rowIndex)=>(
                <div key={rowIndex} className="hLineTwoMiddleL" id={`hLineTwoMiddleL_${rowIndex}`}>
                    {
                        row.map((content, colIndex)=>(
                            <div key={colIndex} className='hLineTwoMiddleB' id={`${prefix}_${rowIndex}_${colIndex}`} 
                            onClick={(event) => hLineClick(rowIndex, colIndex, event)} 
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

export default HLineTwoMiddleL;