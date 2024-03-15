import React from 'react';



function HLineTwoMiddleL(props){
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
        const totalChipValue = (props.totalChipValues[id] || 0) + props.singleChipValue;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event);
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

export default HLineTwoMiddleL;


//
// function HLineTwoMiddleL(){
//     const hLineTwoMiddleEl = [];
    
//     for (let i = 0; i < 3; i++) {
//         const subHLineTwoMiddleEl = [];
//         for (let j = 0; j < 12; j++) {
//             subHLineTwoMiddleEl.push(
//                 <div key={j} className='hLineTwoMiddleB' id={`hLineTwoMiddleB_${i}${j}`} onClick={(e) => hLineBlockClick(i, j, e)}></div>
//             );
//         }

//         hLineTwoMiddleEl.push(
//             <div key={i} className='hLineTwoMiddleL' id={`hLineTwoMiddleL_${i}`}>
//                 {subHLineTwoMiddleEl}
//             </div>
//         );
//     }

//     function hLineBlockClick(i, j, e){
//         const clickedElement = e.currentTarget;
//         if (i == 0 || i == 1) {
//             var numBottom = ((2 - i) + (3 * j));
//             var numTop = ((3 - i) + (3 * j));
//             var num = numBottom + ',' + numTop;
//         } else {
//             var numBottom = (1 + (3 * j));
//             var numMiddle = (2 + (3 * j));
//             var numTop = (3 + (3 * j));
//             var num = numBottom + ',' + numMiddle + ',' + numTop;
//         }
//         var objType = (i == 2) ? 'street' : 'split';
//         var odd = (i == 2) ? 11 : 17;
//         setBet(num, objType, odd, clickedElement);
//     }
//     return(
//         <div className='hLineTwoMiddleLs'>
//             {hLineTwoMiddleEl}
//         </div>
//     )
// }



// export default HLineTwoMiddleL;


//  version 2
// function HLineTwoMiddleL(props){
//     const prefix = "hLineTwoMiddleL"
//     var listofNumber = [
//         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//         [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
//         [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
//     ];
    
//     const [selectedBlocks, setSelectedBlocks] = useState({})
//     const singleChipValue = 100;

//     const hLineClick = (rowIndex, colIndex) => {
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
//         <div className='hLineTwoMiddleLs'>
//              {
//              listofNumber.map((row, rowIndex)=>(
//                 <div key={rowIndex} className='hLineTwoMiddleL'id={`hLineTwoMiddleL_${rowIndex}`}>
//                     {
//                         row.map((colIndex)=>(
//                             <div key={colIndex} className='hLineTwoMiddleB' id={`hLineTwoMiddleB_${rowIndex}${colIndex}`} onClick={()=>{hLineClick(rowIndex, colIndex)}} onContextMenu={(e) => { e.preventDefault(); selectedBlocks[`${rowIndex}_${colIndex}`] && removeSelectedBlocksItem(rowIndex, colIndex) }}>
//                                 {props.totalChipValues[`${prefix}_${rowIndex}_${colIndex}`] > 0 && 
//                                 <div className='chip'>{props.totalChipValues[`${prefix}_${rowIndex}_${colIndex}`]}</div>}
//                             </div>
//                         ))
//                     }
//                 </div>
//              ))
//            }
//         </div>
//     )
// }



// export default HLineTwoMiddleL;