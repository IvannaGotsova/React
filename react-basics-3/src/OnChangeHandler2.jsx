import React, { useState } from "react";

function OnChangeHandler2 () {

    const [number, setNumber] = useState(0);

    function handleNumberChange(event) {
        setNumber(event.target.value);
    }

    return (
        <>
            <select value={number} onChange={handleNumberChange}>
                <option number={1}>1</option>
                <option number={2}>2</option>
                <option number={3}>3</option>
                <option number={4}>4</option>
                <option number={5}>5</option>
                <option number={6}>6</option>
            </select>
            <br />
            <div>The number you choose:- {number}</div>
        </>
    )
  
}
export default OnChangeHandler2