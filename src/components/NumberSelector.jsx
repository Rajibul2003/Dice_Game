import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const NumberSelector = ({ seterror,error,selectednum, setselectednum}) => {
    const numarr = [1,2,3,4,5,6]


    const numberSelectorHandler = (value) => {
        setselectednum(value)
        seterror("")
    }
  
  return (
    <Numbercontainer>
        <p className='error'>{error}</p>
        <div className='flex'>    
         {numarr.map((value,i)=>(
      <Box 
      isSelected ={value === selectednum}
      key={i} onClick={()=>numberSelectorHandler(value)}>{value}
      </Box>
         ))}
         </div>
     <p>Select Number</p>
    </Numbercontainer>
  )
}

export default NumberSelector
const Numbercontainer=styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
    .flex{
     display: flex;
     gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
  .error{
    color: red;
  }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-content: center;
    font-size: 24px;
    font-weight: 700;
    background: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>props.isSelected?"white":"black"};
`