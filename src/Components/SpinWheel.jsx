import React, { useRef, useEffect, useState } from "react";
import rotationValues from "./RotationValues";

function SpinWheel({myChart, setWinNumber, selectedCombination, setSelectedCombination, setTotalChipValues, balance, setBalance, win, setWin, lost, setLost, currentBet, setNetGain, totalWin, setTotalWin, totalLost, setTotalLost, isDisabled, setIsDisabled, audioRef, setShowAlert}) {
    const initialBalance = 10000;
    const btn = useRef(null)
    
    function toggleDisabled(){
        setIsDisabled(prev=>!prev)
    }

    const startSpin = () => {
        if(currentBet!==0){
         audioRef.current.play();

        toggleDisabled();    
        
        const startAngle = 0;
        const endAngle = parseFloat((Math.random() * (4000 - 3000) + 3000).toFixed(3));
        const startTime = performance.now();
        const duration = 10000;
        let resultAgnle = endAngle % 360;

        const animate = () => {
            const elapsedTime = performance.now() - startTime;
            let progress = Math.min(elapsedTime / duration, 1);
            progress = 1 - Math.pow(1 - progress, 3);
            const currentAngle = startAngle + (endAngle - startAngle) * progress;
            myChart.options.rotation = currentAngle;
            myChart.update();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }  
        };
        
        animate();
        
        setTimeout(() => {
            showResult(rotationValues, resultAgnle);
            balance <= 0 && setShowAlert(true)
            setSelectedCombination([]);
            setTimeout(() => {
                setTotalChipValues({});
                toggleDisabled();
                setWinNumber('')
            }, 3000); // Timeout duration after showResult
        }, 10000);
      }else{
          return
    }
    };

    function showResult(dataArray, resultAgnle) {
        dataArray.forEach(row => {
            if (resultAgnle > row.miniDegree && resultAgnle < row.maxDegree) {
               console.log(row.value)
               setWinNumber(row.value)
               const winningCombination = selectedCombination.filter(selected=>selected.num.find(singleNum=>singleNum == row.value));
               const winValue = winningCombination.reduce((acc,item)=>acc + item.odd * item.totalValue, 0);
               setWin(winValue);
               setLost(currentBet);
               setTotalWin(prev=>prev + winValue);
               setTotalLost(prev=>prev + currentBet);
            }
        }
        )
    }

    useEffect(()=>{ 
        setNetGain(win-lost);
       
    })
    useEffect(()=>{ 
        setBalance(initialBalance + totalWin-totalLost)
    },[totalWin, totalLost])
    
    return (
        <button className='button' onClick={startSpin} ref={btn} disabled={isDisabled}>Spin</button>
    );
}

export default SpinWheel;