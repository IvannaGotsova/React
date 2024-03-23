import { useState, useEffect } from "react";


function UseEffectExample3 () {

    const [number, setNumber] = useState(0);
    const [add, setAdd] = useState(0);

    useEffect(() => {
        setAdd(() => number + 1);
  }, [number])

    return (
        <>
            <button onClick={() => setNumber((n) => n + 10)}>
                Click </button>
            <p>You clicked {number}</p>
            <p>Add {add}</p>
        </>
    )
}

export default UseEffectExample3