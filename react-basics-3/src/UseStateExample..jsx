import { useState } from "react";

function UseStateExample() {

    const [number, setNumber] = useState(1);

    return (
        <>
            <h1>My number is {number}!</h1>
            <button
                type="button"
                onClick={() => setNumber(number + 1)}>Add 1
            </button>
            <button
                type="button"
                onClick={() => setNumber(number - 1)}>Substract 1
            </button>
        </>
    )
}

export default UseStateExample