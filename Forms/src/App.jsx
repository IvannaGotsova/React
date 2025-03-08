import { useState } from 'react'
import './App.css'
import Forms from './Forms'
import ControlledComponent from './ControlledComponent'
import UncontrolledComponent from './UncontrolledComponent'
import UseReff from './UseReff'

function App() {

  return (
    <>
        <Forms />
        <br />
        <br />
        <ControlledComponent />
        <br />
        <br />
        <UncontrolledComponent />
        <br />
        <br />
        <UseReff />
    </>
  )
}

export default App
