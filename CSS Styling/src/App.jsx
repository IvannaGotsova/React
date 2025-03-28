import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 style={{ color: "blue" }}>Hello</h1>
        <h2 style={{ backgroundColor: "purple" }}>Hello</h2>
        <h3 style={{ fontFamily: "serif" }}>Hello</h3>
        <h4 style={{ fontSize: "40px" }}>Hello</h4>
        <h5 style={{ opacity: 1 }}>Hello</h5>
        <h6 style={{ border: "1px solid black" }}>Hello</h6>
    </>
  )
}

export default App
