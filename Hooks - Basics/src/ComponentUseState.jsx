import { useState } from "react";

function ComponentUseState() {

    const [count, setCount] = useState(0);

    return (
        <>
          <p>My count is {count}</p>
          <button type="button" onClick={() => setCount(count => count + 1)}>Word</button>
        </>
    )
}

export default ComponentUseState