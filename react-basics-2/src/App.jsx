import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Yes from './Yes'
import No from './No'

function App() {

  const isTrueOrFalse = false;
  
  return (
    <>
        <Button />
        {isTrueOrFalse ? <Yes /> : <No />}
    </>
  )
}

export default App
