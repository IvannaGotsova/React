import { useState, useEffect } from 'react';

function UseEffectHook () {

    const [count, setCount] = useState(0); 
    const [newCount, setNewCount] = useState(count); 

    useEffect(() => {
        setNewCount(() => count * 10);
      }, [count]); 
    

    return (
       <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>New Count: {newCount}</p>
       </div>
    )
}

export default UseEffectHook