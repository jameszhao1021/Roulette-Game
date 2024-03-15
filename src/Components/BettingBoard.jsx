import React, {useEffect} from 'react';
import NumberBoard from './NumberBoard';
import WinningLines from './WinningLines';
import '../Stylesheets/BettingBoard.css';

function BettingBoard({singleChipValue,winNumber, selectedCombination, setSelectedCombination, totalChipValues, setTotalChipValues, setCurrentBet, setBalance, balance}){
    
   
    

   
    function addCombination(num, id, odd, totalValue, event){
        const newCombination = {num:num, id:id, odd:odd, totalValue:totalValue};
        if(event.button === 0){
            if(balance>=singleChipValue){
            if(!selectedCombination.some(item=>item.id==id)){
                setSelectedCombination(prevCombination=>[...prevCombination, newCombination]);
            }else{
                selectedCombination.filter(item=>item.id===id)[0].totalValue += singleChipValue;
            }
            setBalance(prev=>prev-singleChipValue)
        }else{
            return
         }

        }else if (event.button === 2){
            
            setSelectedCombination(prevCombination=> prevCombination.filter(item=>item.id!==newCombination.id));
            const deleteBetValue = newCombination.totalValue;
            setBalance(prev=>prev+deleteBetValue)
        }
    }

   function updateTotalChipValue(id){
    if(balance>=singleChipValue){
        setTotalChipValues(prevState => ({
            ...prevState,
            [id]: (prevState[id] || 0) + singleChipValue
        }));
    }else{
        return
     }

    };

    useEffect(() => {
        if (selectedCombination.length >=0 ) {
            console.log('Latest selected combination:', selectedCombination);
        }
        setCurrentBet(selectedCombination.reduce((acc, item)=>acc + item.totalValue, 0))
       

    }, [selectedCombination, totalChipValues]); // Run this effect whenever selectedCombination changes

    return(
        <div className="bettingBoard">
            <NumberBoard 
               winNumber={winNumber}
               addCom={addCombination} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
               
            />
            <WinningLines 
               addCom={addCombination} 
               totalChipValues={totalChipValues} 
               updateTotalChipValue={updateTotalChipValue}  
               setTotalChipValues={setTotalChipValues} 
               singleChipValue={singleChipValue}
              
            />
        </div>
    )
}

export default BettingBoard;



// original



// function BettingBoard(){
//     const singleChipValue = 100;
//     const [selectedCombination, setSelectedCombination] = useState([]);
//     const [elementChipValues, setElementChipValues] = useState({});

//     function addCombination(newCombination){
      
//         setSelectedCombination([...selectedCombination, newCombination]);
//     }

//     const updateTotalChipValue = (id) => {
//         setElementChipValues(prevState => ({
//             ...prevState,
//             [id]: (prevState[id] || 0) + singleChipValue
//         }));
//     };




//     useEffect(() => {
//         if (selectedCombination.length > 0) {
//             console.log('Latest selected combination:', selectedCombination);
//         }
//     }, [selectedCombination]); // Run this effect whenever selectedCombination changes

//     return(
//         <div className="bettingBoard">
//             <NumberBoard addCom={addCombination}/>
//             <WinningLines addCom={addCombination}/>
//         </div>
//     )
// }


// export default BettingBoard;