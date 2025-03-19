import { useState, useEffect, useRef } from "react";

function ComponentUseRef () {
    const [count, setCount] = useState(0);
    const previousCount = useRef(null); 
    const lastFiveCounts = useRef([]); 

    useEffect(() => {
      previousCount.current = count; 
    }, [count]); 

    useEffect(() => {
        lastFiveCounts.current = [count, ...lastFiveCounts.current].slice(0, 5); 
    }, [count]); 

    return (
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {previousCount.current}</p>
        <p>Last Five Counts: {lastFiveCounts.current.join(" ")}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
}

export default ComponentUseRef