import React from 'react';


function LastBottom(props){
    const prefix = "lastBottom"
    const arrayofLastBottom = ['1 to 18', 'Even', 'Red', 'Black', 'Odd', '19 to 36'];

    const lastBottomClick = (index, event) => {
        const id = `${prefix}_${index}`;
        const selectedNum = `${index}` == 0 ? Array.from({ length: 18 }, (_, index) => index + 1)
                           :`${index}` == 1 ? Array.from({ length: 18 }, (_, index) => (index + 1) * 2)
                           :`${index}` == 2 ? [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
                           :`${index}` == 3 ? [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
                           :`${index}` == 4 ? Array.from({ length: 18 }, (_, index) => index * 2 + 1)
                           : Array.from({ length: 18 }, (_, index) => index + 19)
        const odd = 1;
        const totalChipValue = (props.totalChipValues[id] || 0) + props.singleChipValue;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event);
    };

    const removeSelectedBlocks= (index, event) => {
        event.preventDefault(); // Prevent the default context menu
        const id = `${prefix}_${index}`;
        const odd = 1;
        const selectedNum = `${index}` == 0 ? Array.from({ length: 18 }, (_, index) => index + 1)
                           :`${index}` == 1 ? Array.from({ length: 18 }, (_, index) => (index + 1) * 2)
                           :`${index}` == 2 ? [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
                           :`${index}` == 3 ? [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
                           :`${index}` == 4 ? Array.from({ length: 18 }, (_, index) => index * 2 + 1)
                           : Array.from({ length: 18 }, (_, index) => index + 19)
        const totalChipValue = props.totalChipValues[id] || 0;
        props.addCom(selectedNum, id, odd, totalChipValue, event);
        // Toggle chip visibility based on right-click event
        if (event.button === 2 && totalChipValue > 0) {
            const updatedTotalChipValues = { ...props.totalChipValues }; // Copy the state
            updatedTotalChipValues[id] = 0; // Set chip value to 0
            props.setTotalChipValues(updatedTotalChipValues); // Update the state
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
                    {props.totalChipValues[`${prefix}_${index}`] > 0 && 
                    <div className='chip'>{props.totalChipValues[`${prefix}_${index}`]}</div>}
                    </div>
                ))
            }
        </div>
    )
}



export default LastBottom;



// function LastBottom({prop}){
//     const arrayofLastBottom = ['1 to 18', 'Even', 'Red', 'Black', 'Odd', '19 to 36'];
//     const lastBottomElements = [];
//     for (let i = 0; i < arrayofLastBottom.length; i++){
//         lastBottomElements.push(<div key={i} className='lastBottomBlock' id={`lastBottom_${i}`} onClick={(e)=>{lastBottomClick(i, e)}}>
//             <div className='lastBottomBlockCon'>{arrayofLastBottom[i]}</div>
//         </div>)
//     }

//     function lastBottomClick(i, e){
//         const clickedElement = e.currentTarget;
//         var num = (i === 0) ? prop.filter(num => num <= 18).join(',') :
//         (i === 1) ? prop.filter(num => num % 2 === 0).join(',') :
//             (i === 2) ? '1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36' :
//                 (i === 3) ? '2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35' :
//                     (i === 4) ? prop.filter(num => num % 2 !== 0).join(',') :
//                         prop.filter(num => num > 18).join(',');
//             setBet(num, 'oerb', 1, clickedElement)
//     }
//     return(
//         <div className="lastBottom">
//             {lastBottomElements}
//         </div>
//     )
// }



// export default LastBottom;



