import { useState, useEffect } from "react";


function UseEffectExample () {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        document.title = `Times you clicked ${number}`;
    });

    return (
        <>
            <button onClick={() => setNumber((n) => n + 1)}>
                Click </button>
            <p>You clicked {number}</p>
        </>
    )
}

export default UseEffectExample