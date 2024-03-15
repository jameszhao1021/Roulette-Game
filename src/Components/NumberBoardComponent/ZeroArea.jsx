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


// function ZeroArea(){
//     const listofZero = ['00', '0'];
//     const zeroAreaElements = []
//     for(let i = 0; i < listofZero.length; i++){
//         zeroAreaElements.push(
//             <div key={i} className='zeroBlock'id={`zeroBlock_${i}`} onClick={(e)=>{zeroBlockClick(i,e)}}>
//                 <div className="zeroBlockNum">{listofZero[i]}</div>
//             </div>
//         )
//     }

//     function zeroBlockClick(i, e){
//         const clickedElement = e.currentTarget;
//         var num = listofZero[i];
//         var odd = 35;
//         var objType = 'straight';
//         setBet(num, objType, odd, clickedElement);
//     }

//     return(
//         <div className="zeroArea">
//            {zeroAreaElements}
//         </div>
//     )

// }



// export default ZeroArea;
