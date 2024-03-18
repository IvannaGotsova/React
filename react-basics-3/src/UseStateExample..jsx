import { useState } from "react";

function UseStateExample() {

    const [number, setNumber] = useState(1);

    return (
        <>
            <h1>My number is {number}!</h1>
        </>
    )
}

export default UseStateExample