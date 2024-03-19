import React, { useState } from "react";

function OnChangeHandler () {

    const [number, setNumber] = useState(0);

    function handleNumberChange(event) {
        setNumber(event.target.value);
    }

    return (
        <>
            <br />
            <input value={number} onChange={handleNumberChange} />
            <div>Input:- {number}</div>
        </>
    )
}

export default OnChangeHandler