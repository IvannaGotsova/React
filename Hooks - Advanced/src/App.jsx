import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentUseRef from './ComponentUseRef'
import ComponentUseReducer from './ComponentUseReducer'
import ComponentCustomHook from './ComponentCustomHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentUseRef/>
      <br />
      <ComponentUseReducer/>
      <br />
      <ComponentCustomHook/>

    </>
  )
}

export default App
