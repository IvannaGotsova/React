import { useState, useEffect } from "react";

function ComponentUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
    
      return <p>I've counted for {count} seconds</p>
}

export default ComponentUseEffect