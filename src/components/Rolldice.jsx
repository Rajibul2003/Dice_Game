import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Rolldice = ({roleDice,currentDice}) => {
    

 

  return (
    <Dicecontainer>
        <div className= "dice" onClick={roleDice}>
   <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
   </div>
   <p>Click on the dice to roll</p>
    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer = styled.div`
  display: flex;
flex-direction: column;
align-items: center;
  
  p{
    font-size: 24px;
  }
`;
