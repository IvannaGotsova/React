import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterStandardErrorHandling from './CounterStandardErrorHandling'
import CounterTryCatchErrorHandling from './CounterTryCatchErrorHandling'
import CounterErrorBoundaryErrorHandling from './CounterErrorBoundaryErrorHandling'
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryExample from './ErrorBoundaryExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <p>Counter Standard Error Handling</p>
      <CounterStandardErrorHandling/>
      <p>Counter Try Catch Error Handling</p>
      <CounterTryCatchErrorHandling/>
      <p>Counter Error Boundary Error Handling</p>
      <ErrorBoundary FallbackComponent={ErrorBoundaryExample}>
          <CounterErrorBoundaryErrorHandling />
      </ErrorBoundary>
    </>
  )
}

export default App
