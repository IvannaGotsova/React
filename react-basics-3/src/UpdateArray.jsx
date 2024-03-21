import React, { useState } from 'react';


function UpdateArray() {

    const [numbers, setNumbers] = useState([]);

    const addNumber = () => {
        setNumbers([
            ...numbers,
            {
                id: numbers.length,
                valueOfNumber: numbers.length + 1
            }
        ]);
    };

    const resetNumbers = () => {
        setNumbers([]);
    };

    return (
        <>
            <ul>
                {numbers.map(number => (
                    <li key={number.id}>{number.valueOfNumber}</li>
                ))}
            </ul>
            <button onClick={addNumber}>
                Add Number
            </button>
            <button onClick={resetNumbers}>
                Reset Numbers
            </button>
        </>
    );
}

export default UpdateArray