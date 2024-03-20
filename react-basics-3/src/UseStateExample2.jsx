import { useState } from "react";


function UseStateExample2 () {

    const [word, setWord] = useState("First Word");

    const updateWord = () => {
        setWord("Second Word");
    };
    const updateWord2 = () => {
        setWord("Third Word");
    };
    const updateWord3 = () => {
        setWord("Fourth Word");
    };

    return (

        <>
            <button onClick={updateWord}>Change Word</button>
            <button onClick={updateWord2}>Change Word</button>
            <button onClick={updateWord3}>Change Word</button>
            <p>The word is: {word}</p>
        </>
    );
} 

export default UseStateExample2