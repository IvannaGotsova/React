import { useState } from 'react'
import './App.css'
import Numbers from './Numbers'
import Counter from './Counter'
import Styles from './Styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Numbers/>
      <Counter/>
      <Styles/>
    </>
  )
}

export default App
