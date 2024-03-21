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
        </>
    );
}

export default UpdateArray