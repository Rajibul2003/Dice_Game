import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import Startgame from './components/Startgame'
import GamePlay from './components/GamePlay'


function App() {
  const [IsgameStarted, setIsgameStarted] = useState(false)

  const toggleGameplay = () =>
  {
    setIsgameStarted((prev)=>!prev);
  };

  return (
    <>
    
    {IsgameStarted?<GamePlay/>:<Startgame toggle={toggleGameplay}/>}
    
    </>
  );
}

  
export default App
