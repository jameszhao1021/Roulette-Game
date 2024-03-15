import React from 'react';
import ZeroAreaBlockL from './WinningLines/ZeroAreaBlockL';
import HLineTwoMiddleL from './WinningLines/HLineTwoMiddle';
import VLineTwoMiddleL from './WinningLines/VLineTwoMiddle';
import CornerBetL from './WinningLines/CornerBetL';



function WinningLines(props){
    return(
        <div className='winningLines'>
           <ZeroAreaBlockL 
              addCom = {props.addCom} 
              totalChipValues={props.totalChipValues} 
              updateTotalChipValue={props.updateTotalChipValue} 
              setTotalChipValues={props.setTotalChipValues} 
              singleChipValue={props.singleChipValue}          
           />
           <HLineTwoMiddleL
              addCom = {props.addCom} 
              totalChipValues={props.totalChipValues} 
              updateTotalChipValue={props.updateTotalChipValue} 
              setTotalChipValues={props.setTotalChipValues} 
              singleChipValue={props.singleChipValue}
           />
           <VLineTwoMiddleL 
              addCom = {props.addCom} 
              totalChipValues={props.totalChipValues} 
              updateTotalChipValue={props.updateTotalChipValue} 
              setTotalChipValues={props.setTotalChipValues} 
              singleChipValue={props.singleChipValue}
           />
           <CornerBetL
              addCom = {props.addCom} 
              totalChipValues={props.totalChipValues} 
              updateTotalChipValue={props.updateTotalChipValue} 
              setTotalChipValues={props.setTotalChipValues} 
              singleChipValue={props.singleChipValue} 
          />
        </div>
    )


}


export default WinningLines;