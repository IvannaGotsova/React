import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoHeader from './ToDoHeader'
import ToDoBody from './ToDoBody'
import ToDoFooter from './ToDoFooter'

function App() {
  
  return (
    <>
        <ToDoHeader />
        <ToDoBody />
        <ToDoFooter />
    </>
  )
}

export default App
