import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Yes from './Yes'
import No from './No'
import Clothes from './Clothes'

function App() {

  const isTrueOrFalse = false;
  
  return (
    <>
        <Button />
        {isTrueOrFalse ? <Yes /> : <No />}
        <Clothes />
    </>
  )
}

export default App
