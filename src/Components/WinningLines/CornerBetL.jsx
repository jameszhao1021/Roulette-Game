import React from 'react';



function CornerBetL(props){
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
        const totalChipValue = (props.totalChipValues[id] || 0) + props.singleChipValue;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event);
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


export default CornerBetL;

// function CornerBetL(){
//     const cornerBetEl = [];
//     for (let i = 0; i < 3; i++){
//         const subCornerBetEl = [];
//         for (let j = 0; j < 12; j++){
//             let count = (i == 0) ? j : (i == 1) ? j + 12 : j + 24;
//             subCornerBetEl.push(
//                 <div key={j} className='cornerBetB' id={`cornerBetB_${i}${j}`} onClick={(e)=>{CornerClick(count, e)}}></div>
//             )
//         }
//         cornerBetEl.push(
//             <div key={i} className='cornerBetL' id={`cornerBetL_${i}`}>{subCornerBetEl}</div>
//         )
//     }

//    function CornerClick(count, e){
//     const clickedElement = e.currentTarget;
 
//     if (count === 0) {
//             var numLeft = '00';
//             var numRightTop = 3;
//             var numRightBottom = 2;
//             var num = numLeft + ',' + numRightTop + ',' + numRightBottom;
//             var objType = 'street';
//             var odd = 11;
//         } else if (count === 12) {
//             var numLeft = 0;
//             var numRightTop = 2;
//             var numRightBottom = 1;
//             var num = numLeft + ',' + numRightTop + ',' + numRightBottom;
//             var objType = 'street';
//             var odd = 11;
//         } else if (count === 24) {
//             var numLeftTop = '00';
//             var numLeftBottom = 0;
//             var numRightTop = 3;
//             var numRightMiddle = 2;
//             var numRightBottom = 1;
//             var num = numLeftTop + ',' + numLeftBottom + ',' + numRightTop + ',' + numRightMiddle + ',' + numRightBottom;
//             var objType = '5_line_bet';
//             var odd = 6;
//         } else if (count > 24 && count < 36) {
//             var numLeftBottom = 1;
//             var numLeftMiddle = 2;
//             var numLeftTop = 3;
//             var numRightBottom = 4;
//             var numRightMiddle = 5;
//             var numRightTop = 6;
//             var num = (parseInt(numLeftBottom) + ((count - 25) * 3)) + ',' + (parseInt(numLeftMiddle) + ((count - 25) * 3)) + ',' + (parseInt(numLeftTop) + ((count - 25) * 3)) + ',' + (parseInt(numRightBottom) + ((count - 25) * 3)) + ',' + (parseInt(numRightMiddle) + ((count - 25) * 3)) + ',' + (parseInt(numRightTop) + ((count - 25) * 3))
//             var objType = '6_line_bet';
//             var odd = 5;
//         } else {
//             var numLeftBottom = 2;
//             var numLeftTop = 3;
//             var numRightBottom = 5;
//             var numRightTop = 6;
//             var num = (count >= 1 && count < 12) ? (parseInt(numLeftBottom) + ((count - 1) * 3)) + ',' + (parseInt(numLeftTop) + ((count - 1) * 3)) + ',' + (parseInt(numRightBottom) + ((count - 1) * 3)) + ',' + (parseInt(numRightTop) + ((count - 1) * 3)) : ((parseInt(numLeftBottom) - 1) + ((count - 13) * 3)) + ',' + ((parseInt(numLeftTop) - 1) + ((count - 13) * 3)) + ',' + ((parseInt(numRightBottom) - 1) + ((count - 13) * 3)) + ',' + ((parseInt(numRightTop) - 1) + ((count - 13) * 3));
//             var objType = 'corner_bet';
//             var odd = 8;
//         };
//       setBet(num, objType, odd, clickedElement);
       
//    }



//     return(
//         <div className='cornerBetLs'>
//             {cornerBetEl}
//         </div>
//     )
// }


// export default CornerBetL;

// //version 2

// function CornerBetL(props){
//     var listofNumber = [
//         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//         [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
//         [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
//     ];

  
//     const [selectedBlocks, setSelectedBlocks] = useState({})
//     const singleChipValue = 100;

//     const cornerClick = (count, rowIndex, colIndex) => {
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
//         <div className='cornerBetLs'>
//            {
//              listofNumber.map((row, rowIndex)=>(
//                 <div key={rowIndex} className='cornerBetL'id={`cornerBetL_${rowIndex}`}>
//                     {
//                         row.map((count, colIndex)=>(
//                             <div key={colIndex} className='cornerBetB' id={`cornerBetB_${rowIndex}${colIndex}`} onClick={()=>{cornerClick(count, rowIndex, colIndex)}} onContextMenu={(e) => { e.preventDefault(); selectedBlocks[`${rowIndex}_${colIndex}`] && removeSelectedBlocksItem(rowIndex, colIndex) }}>
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


// export default CornerBetL;