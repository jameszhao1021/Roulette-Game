import React, { useState } from 'react';



function VLineTwoMiddleL(props){
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
        const totalChipValue = (props.totalChipValues[id] || 0) + props.singleChipValue;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event);
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
        const totalChipValue = (props.totalChipValues[id] || 0) + props.singleChipValue;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event);
        if (event.button === 2 && totalChipValue > 0) {
            const updatedTotalChipValues = { ...props.totalChipValues }; // Copy the state
            updatedTotalChipValues[id] = 0; // Set chip value to 0
            props.setTotalChipValues(updatedTotalChipValues); // Update the state
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
                            {props.totalChipValues[`${prefix}_${rowIndex}_${colIndex}`] > 0 && 
                            <div className='chip'>{props.totalChipValues[`${prefix}_${rowIndex}_${colIndex}`]}</div>}
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

//

// function VLineTwoMiddleL(){
//     const vLineTwoMiddleEl = [];
 


//     for(let i = 0; i < 12; i++){
//         const subvLineTwoMiddleEl = [];
//         for (let j = 0; j < 3; j++){
//             subvLineTwoMiddleEl.push(
//                 <div key={j} className='vLineTwoMiddleB' id={`vLineTwoMiddleB_${i}${j}`} onClick={(e)=>{VLineTwoMiddleClick(i, j, e)}}></div>
//             )
//         }
//         vLineTwoMiddleEl.push(
//             <div key={i} className='vLineTwoMiddleL' id={`vLineTwoMiddleL_${i}`} >{subvLineTwoMiddleEl}</div>
//         )
//     }

//     function VLineTwoMiddleClick(i, j, e){
//         const clickedElement = e.currentTarget;
//         var numLeftTop, numLeftBottom, numLeft, numRight, num, objType, odd;
//         if (i === 0 && j === 0) {
//                 numLeft = '00';
//                 numRight = 3;
//                 num = numLeft + ',' + numRight;
//             } else if (i === 0 && j === 1) {
//                 numLeftTop = '00';
//                 numLeftBottom = 0;
//                 numRight = 2;
//                 num = numLeftTop + ',' + numLeftBottom + ',' + numRight;
//             } else if (i === 0 && j === 2) {
//                 numLeft = 0;
//                 numRight = 1;
//                 num = numLeft + ',' + numRight;
//             } else {
//                 numLeft = ((3 * i)) - (j);
//                 numRight = (3 + (3 * i)) - (j);
//                 num = numLeft + ',' + numRight;
//             }
//             objType = (i == 0 && j == 1) ? 'street' : 'split';
//             odd = (i == 0 && j == 1) ? 11 : 17;
//             setBet(num, objType, odd, clickedElement);
//     }


//     return(
//         <div className='vLineTwoMiddleLs'>
//             {vLineTwoMiddleEl}
//         </div>
//     )
// }

// export default VLineTwoMiddleL;

//version 2
// function VLineTwoMiddleL(props){
//     var listofNumber = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11],
//         [12, 13, 14], [15, 16, 17], [18, 19, 20], [21, 22, 23],
//         [24, 25, 26], [27, 28, 29], [30, 31, 32], [33, 34, 35]
//     ];

//     const [selectedBlocks, setSelectedBlocks] = useState({})
//     const singleChipValue = 100;

//     const vLineClick = (rowIndex, colIndex) => {
//         setSelectedBlocks(prevState => {
//             const newTotalChipValue = (prevState[`${rowIndex}_${colIndex}`] || 0) + singleChipValue;
//             return {...prevState, [`${rowIndex}_${colIndex}`]: newTotalChipValue};
//         });
//     };

//     const removeSelectedBlocksItem = (rowIndex, colIndex) => {
//         setSelectedBlocks(prevState => 
//             {
//             const newState = {...prevState};
//             delete newState[`${rowIndex}_${colIndex}`];
//             return newState;
//         });
//     };

//     return(
//         <div className='vLineTwoMiddleLs'>
//             {
//              listofNumber.map((row, rowIndex)=>(
//                 <div key={rowIndex} className='vLineTwoMiddleL'id={`vLineTwoMiddleL_${rowIndex}`}>
//                     {
//                         row.map((colIndex)=>(
//                             <div key={colIndex} className='vLineTwoMiddleB' id={`vLineTwoMiddleB_${rowIndex}${colIndex}`} onClick={()=>{vLineClick(rowIndex, colIndex)}} onContextMenu={(e) => { e.preventDefault(); selectedBlocks[`${rowIndex}_${colIndex}`] && removeSelectedBlocksItem(rowIndex, colIndex) }}>
//                             {selectedBlocks[`${rowIndex}_${colIndex}`] && <div className='chip'>{selectedBlocks[`${rowIndex}_${colIndex}`]}</div>}
//                             </div>
//                         ))
//                     }
//                 </div>
//              ))
//            }
//         </div>
//     )
// }


// export default VLineTwoMiddleL;