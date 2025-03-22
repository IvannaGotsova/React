import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterStandardErrorHandling from './CounterStandardErrorHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <p>Counter Standard Error Handling</p>
      <CounterStandardErrorHandling/>
    </>
  )
}

export default App
