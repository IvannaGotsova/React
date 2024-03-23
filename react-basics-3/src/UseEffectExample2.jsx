import { useState, useEffect } from "react";


function UseEffectExample2 () {

    const [number, setNumber] = useState(10);

    useEffect(() => {
        document.title = `Times you clicked ${number}`;
    }, []);

    return (
        <>
            <button onClick={() => setNumber((n) => n + 10)}>
                Click </button>
            <p>You clicked {number}</p>
        </>
    )
}

export default UseEffectExample2