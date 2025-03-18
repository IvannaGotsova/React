import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentUseState from './ComponentUseState'
import ComponentUseEffect from './ComponentUseEffect'
import ComponentUseContext from './ComponentUseContext'

function App() {

  return (
    <>
      <ComponentUseState/>
      <br />
      <ComponentUseEffect/>
      <br />
      <ComponentUseContext/>
    </>
  )
}

export default App
