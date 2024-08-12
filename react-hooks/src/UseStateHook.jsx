import { useState } from 'react';

function UseStateHook () {

    const [count, setCount] = useState(0); 

    return (
       <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
       </div>
    )
}

export default UseStateHook