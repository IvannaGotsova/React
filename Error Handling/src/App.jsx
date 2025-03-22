import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterStandardErrorHandling from './CounterStandardErrorHandling'
import CounterTryCatchErrorHandling from './CounterTryCatchErrorHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <p>Counter Standard Error Handling</p>
      <CounterStandardErrorHandling/>
      <p>Counter Try Catch Error Handling</p>
      <CounterTryCatchErrorHandling/>
    </>
  )
}

export default App
