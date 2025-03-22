import { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

function CounterErrorBoundaryErrorHandling () {

    const [count, setCount] = useState(0); 
    const [newCount, setNewCount] = useState(count);

    useEffect(() => {
        if (count === 10) {
            throw new Error("Counter Error Boundary Error Handling");
            
        }
        if (count % 2 === 0) {
            setNewCount(() => count * 100);
        }
      }, [count]); 
    

    return (
       <div>  
            <p>New Count: {newCount}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>OldCount: {count}</p>
       </div>
    )
}

export default CounterErrorBoundaryErrorHandling