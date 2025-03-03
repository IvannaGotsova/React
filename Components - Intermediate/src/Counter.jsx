import { useState, useEffect } from 'react';

function Counter () {

    const [count, setCount] = useState(0); 
    const [newCount, setNewCount] = useState(count);

    useEffect(() => {
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

export default Counter