import React from 'react';



function CornerBetL({addCom,totalChipValues,updateTotalChipValue,setTotalChipValues,singleChipValue, winNumber}){
    const prefix = "cornerBlock"
    var listofNumber = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    ];



    const cornerClick = (count, rowIndex, colIndex, event) => {
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let selectedNum;
        let odd;
        if (count === 0) {
            const numLeft = '00';
            const numRightTop = 3;
            const numRightBottom = 2;
            selectedNum = [numLeft, numRightTop, numRightBottom];
            odd = 11;
        } else if (count === 12) {
            const numLeft = 0;
            const numRightTop = 2;
            const numRightBottom = 1;
            selectedNum= [numLeft, numRightTop, numRightBottom];
            odd = 11;
        } else if (count === 24) {
            const numLeftTop = '00';
            const numLeftBottom = 0;
            const numRightTop = 3;
            const numRightMiddle = 2;
            const numRightBottom = 1;
            selectedNum = [numLeftTop, numLeftBottom, numRightTop, numRightMiddle, numRightBottom];
            odd = 6;
        } else if (count > 24 && count < 36) {
            const numLeftBottom = 1;
            const numLeftMiddle = 2;
            const numLeftTop = 3;
            const numRightBottom = 4;
            const numRightMiddle = 5;
            const numRightTop = 6;
            selectedNum = [(parseInt(numLeftBottom) + ((count - 25) * 3)), (parseInt(numLeftMiddle) + ((count - 25) * 3)), (parseInt(numLeftTop) + ((count - 25) * 3)), (parseInt(numRightBottom) + ((count - 25) * 3)), (parseInt(numRightMiddle) + ((count - 25) * 3)), (parseInt(numRightTop) + ((count - 25) * 3))]
            odd = 5;
        } else {
            const numLeftBottom = 2;
            const numLeftTop = 3;
            const numRightBottom = 5;
            const numRightTop = 6;
            selectedNum = (count >= 1 && count < 12) ? [(parseInt(numLeftBottom) + ((count - 1) * 3)) , (parseInt(numLeftTop) + ((count - 1) * 3)), (parseInt(numRightBottom) + ((count - 1) * 3)) , (parseInt(numRightTop) + ((count - 1) * 3))] : [((parseInt(numLeftBottom) - 1) + ((count - 13) * 3)), ((parseInt(numLeftTop) - 1) + ((count - 13) * 3)), ((parseInt(numRightBottom) - 1) + ((count - 13) * 3)), ((parseInt(numRightTop) - 1) + ((count - 13) * 3))];
            odd = 8;
        };
        const totalChipValue = (totalChipValues[id] || 0) + singleChipValue;
        updateTotalChipValue(id);
        addCom(selectedNum, id, odd, totalChipValue, event);
    };


    const removeSelectedBlocksItem = (count, rowIndex, colIndex, event) => {
        event.preventDefault();
        const id = `${prefix}_${rowIndex}_${colIndex}`;
        let selectedNum;
        let odd;
        if (count === 0) {
            const numLeft = '00';
            const numRightTop = 3;
            const numRightBottom = 2;
            selectedNum = [numLeft, numRightTop, numRightBottom];
            odd = 11;
        } else if (count === 12) {
            const numLeft = 0;
            const numRightTop = 2;
            const numRightBottom = 1;
            selectedNum= [numLeft, numRightTop, numRightBottom];
            odd = 11;
        } else if (count === 24) {
            const numLeftTop = '00';
            const numLeftBottom = 0;
            const numRightTop = 3;
            const numRightMiddle = 2;
            const numRightBottom = 1;
            selectedNum = [numLeftTop, numLeftBottom, numRightTop, numRightMiddle, numRightBottom];
            odd = 6;
        } else if (count > 24 && count < 36) {
            const numLeftBottom = 1;
            const numLeftMiddle = 2;
            const numLeftTop = 3;
            const numRightBottom = 4;
            const numRightMiddle = 5;
            const numRightTop = 6;
            selectedNum = [(parseInt(numLeftBottom) + ((count - 25) * 3)), (parseInt(numLeftMiddle) + ((count - 25) * 3)), (parseInt(numLeftTop) + ((count - 25) * 3)), (parseInt(numRightBottom) + ((count - 25) * 3)), (parseInt(numRightMiddle) + ((count - 25) * 3)), (parseInt(numRightTop) + ((count - 25) * 3))]
            odd = 5;
        } else {
            const numLeftBottom = 2;
            const numLeftTop = 3;
            const numRightBottom = 5;
            const numRightTop = 6;
            selectedNum = (count >= 1 && count < 12) ? [(parseInt(numLeftBottom) + ((count - 1) * 3)) , (parseInt(numLeftTop) + ((count - 1) * 3)), (parseInt(numRightBottom) + ((count - 1) * 3)) , (parseInt(numRightTop) + ((count - 1) * 3))] : [((parseInt(numLeftBottom) - 1) + ((count - 13) * 3)), ((parseInt(numLeftTop) - 1) + ((count - 13) * 3)), ((parseInt(numRightBottom) - 1) + ((count - 13) * 3)), ((parseInt(numRightTop) - 1) + ((count - 13) * 3))];
            odd = 8;
        };
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
        <div className='cornerBetLs'>
           {
             listofNumber.map((row, rowIndex)=>(
                <div key={rowIndex} className='cornerBetL'id={`cornerBetL_${rowIndex}`}>
                    {
                        row.map((count, colIndex)=>(
                            <div key={colIndex} className='cornerBetB' id={`cornerBetB_${rowIndex}_${colIndex}`} 
                            onClick={(event) => cornerClick(count, rowIndex, colIndex, event)} 
                            onContextMenu={(event) => removeSelectedBlocksItem(count, rowIndex, colIndex, event)}
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


export default CornerBetL;