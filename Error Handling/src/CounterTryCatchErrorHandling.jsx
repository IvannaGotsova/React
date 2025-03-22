import { useState, useEffect } from 'react';

function CounterTryCatchErrorHandling () {

    const [count, setCount] = useState(0); 
    const [newCount, setNewCount] = useState(count);

    useEffect(() => {
        try {
            count = count * 0 
            if (count % 2 === 0) {
                setNewCount(() => count * 100);
            }
        } catch (error) {
            throw console.log(error);            
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

export default CounterTryCatchErrorHandling