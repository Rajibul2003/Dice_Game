import React from 'react'
import TrackScore from './TrackScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { useState } from 'react'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'


const GamePlay = () => {
    const [selectednum, setselectednum] = useState()
    const [currentDice, setcurrentDice] = useState(1);
    const [score, setscore] = useState(0)
    const [error, seterror] = useState("")
    
    const [showRules, setshowRules] = useState(false)

    const generateRendomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectednum){
            seterror("You have not selected any number")

        return;
    }
  
    const randomNumber = generateRendomNumber(1, 7)

    setcurrentDice((prev) => randomNumber);



    if (selectednum === randomNumber) {

        setscore((prev) => prev + randomNumber);
    } else {
        setscore((prev) => prev - 2);
    }

    setselectednum(undefined);

    };
    const resetScore=()=>
    {
      setscore(0);
    }

    return (
        <Maincontainer>
            <div className='top_section'>
                <TrackScore score={score} />
                <NumberSelector
                    error={error}
                    seterror={seterror}
                    selectednum={selectednum}
                    setselectednum={setselectednum} />
            </div>
            <Rolldice currentDice={currentDice}
                roleDice={roleDice} />
                <div className="btns">
                 <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                 <Button
                 onClick={()=>setshowRules((prev) => !prev)} 
                 >{showRules ? "Hide" : "Show"} Rules</Button>
                </div>
               {showRules && <Rules/>}
                </Maincontainer>
    )
}


export default GamePlay


const Maincontainer = styled.main`
 padding-top:70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns {
        margin-top: 40px;
        gap:10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`