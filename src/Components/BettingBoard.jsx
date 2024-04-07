import React, { useEffect } from 'react';
import NumberBoard from './NumberBoard';
import WinningLines from './WinningLines';
import '../Stylesheets/BettingBoard.css';

function BettingBoard({ singleChipValue, winNumber, selectedCombination, setSelectedCombination, totalChipValues, setTotalChipValues, setCurrentBet, setBalance, balance, enableChip }) {

    function addCombination(num, id, odd, totalValue, event) {
        const newCombination = { num: num, id: id, odd: odd, totalValue: totalValue };
        if (event.button === 0) {
            if (balance >= singleChipValue) {
                if (!selectedCombination.some(item => item.id === id)) {
                    setSelectedCombination(prevCombination => [...prevCombination, newCombination]);
                } else {
                    selectedCombination.filter(item => item.id === id)[0].totalValue += singleChipValue;
                }
                setBalance(prev => prev - singleChipValue)
            } else {
                return
            }

        } else if (event.button === 2) {
            setSelectedCombination(prevCombination => prevCombination.filter(item => item.id !== newCombination.id));
            const deleteBetValue = newCombination.totalValue;
            setBalance(prev => prev + deleteBetValue)
        }
    }

    function updateTotalChipValue(id) {
        if (balance >= singleChipValue) {
            setTotalChipValues(prevState => ({
                ...prevState,
                [id]: (prevState[id] || 0) + singleChipValue
            }));
        } else {
            return
        }
    };

    useEffect(() => {
        setCurrentBet(selectedCombination.reduce((acc, item) => acc + item.totalValue, 0))
    }, [selectedCombination, totalChipValues]); // Run this effect whenever selectedCombination changes

    return (
        <div className="bettingBoard">
            <NumberBoard
                winNumber={winNumber}
                addCom={addCombination}
                totalChipValues={totalChipValues}
                updateTotalChipValue={updateTotalChipValue}
                setTotalChipValues={setTotalChipValues}
                singleChipValue={singleChipValue}
                enableChip={enableChip}
            />
            <WinningLines
                addCom={addCombination}
                totalChipValues={totalChipValues}
                updateTotalChipValue={updateTotalChipValue}
                setTotalChipValues={setTotalChipValues}
                singleChipValue={singleChipValue}
                enableChip={enableChip}
            />
        </div>
    )
}

export default BettingBoard;