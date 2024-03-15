import React from 'react';

function ZeroAreaBlockL(props){
    const prefix = "zeroArea"
    const zeroAreaBlockClick = (event) => {
        event.preventDefault(); // Prevent the default context menu
        const id = `${prefix}`;
        const odd = 17;
        const selectedNum = ["00", 0]
        const totalChipValue = props.totalChipValues[id] || 0;
        props.updateTotalChipValue(id);
        props.addCom(selectedNum, id, odd, totalChipValue, event); 
    };

   const removeSelectedBlocks = (event) => {
    event.preventDefault(); // Prevent the default context menu
    const id = `${prefix}`;
    const odd = 17;
    const selectedNum = ["00", 0]
    const totalChipValue = props.totalChipValues[id] || 0;
    props.updateTotalChipValue(id);
    props.addCom(selectedNum, id, odd, totalChipValue, event);
    // Toggle chip visibility based on right-click event
    if (event.button === 2 && totalChipValue > 0) {
        const updatedTotalChipValues = { ...props.totalChipValues }; // Copy the state
        updatedTotalChipValues[id] = 0; // Set chip value to 0
        props.setTotalChipValues(updatedTotalChipValues); // Update the state
    }
};

    return(
        <div className='zeroAreaBlockLs'>
            <div className='zeroAreaBlock' id='zeroAreaBlock' 
            onClick={(event)=>zeroAreaBlockClick(event)} 
            onContextMenu={(event)=>{removeSelectedBlocks(event)}}
            >
            {props.totalChipValues[`${prefix}`] > 0 && 
            <div className='chip'>{props.totalChipValues[`${prefix}`]}</div>}
            </div> 
        </div>
    )
}

export default ZeroAreaBlockL;


//
// function ZeroAreaBlockL(){
//     const zeroAreaBlockEl =[];
//     zeroAreaBlockEl.push(<div key={0} className='zeroAreaBlock' id='zeroAreaBlock' onClick={(e)=>{zeroAreaBlockClick(e)}}></div>)
    
//     function zeroAreaBlockClick(e){
//         const clickedElement = e.currentTarget;
//         var num = '00' + ',' + '0';
//         var objType = 'split';
//         var odd = 17;
//         setBet(num, objType, odd, clickedElement);
//     }
 
//      return(
//          <div className='zeroAreaBlockLs'>
//              {zeroAreaBlockEl}
//          </div>
//      )
//  }
 
//  export default ZeroAreaBlockL;
 
//version 2
// function ZeroAreaBlockL(props){
//     const [selectedBlocks, setSelectedBlocks] = useState({})
//     const singleChipValue = 100;
  
//     function zeroAreaBlockClick(){
//         setSelectedBlocks(preState=>{
//               const newTotalChipValue = (preState[0]||0) + singleChipValue;
//              return {...preState, [0]:newTotalChipValue}
//         })
//     }

//    function removeSelectedBlocks(){
//        setSelectedBlocks(preState=>{
//         const newBlocks = {...preState};
//         delete newBlocks[0];
//          return newBlocks
//        }
//        )  
//    }

//     return(
//         <div className='zeroAreaBlockLs'>
//             <div className='zeroAreaBlock' id='zeroAreaBlock' onClick={()=>zeroAreaBlockClick()} onContextMenu={(e)=>{e.preventDefault(); selectedBlocks && removeSelectedBlocks()}}>                  
//                      {selectedBlocks[0] && <div className='chip'>{selectedBlocks[0]}</div>}
//                     </div> 
//         </div>
//     )
// }

// export default ZeroAreaBlockL;
