import { useState } from "react";


function UseStateExample2 () {

    const [word, setWord] = useState("First Word");

    const updateWord = () => {
        setWord("Second Word");
    };

    return (

        <>
            <button onClick={updateWord}>Change Word</button>
            <p>The word is: {word}</p>
            <button onClick={updateWord}>Change Word</button>
            <p>The word is: {word}</p>
            <button onClick={updateWord}>Change Word</button>
            <p>The word is: {word}</p>
        </>
    );
} 

export default UseStateExample2