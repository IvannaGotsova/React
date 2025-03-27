import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdditionalTextComponent from './AdditionalTextComponent'
import TextComponent from './TextComponent'

const ConstAdditionalTextComponent = AdditionalTextComponent(TextComponent)

function App() {

  return (
    <>
      <ConstAdditionalTextComponent name="Ivan" />;
    </>
  )
}

export default App
