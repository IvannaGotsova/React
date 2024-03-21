import React, { useState } from "react";

function OnChangeHandler3 () {

    const [word, setWord] = useState("null");

    function handleWordChange(event) {
        setWord(event.target.value);
    }

    return (
        <>
            <select value={word} onChange={handleWordChange}>
                <option word={"one"}>one</option>
                <option word={"two"}>two</option>
                <option word={"three"}>three</option>
                <option word={"four"}>four</option>
                <option word={"five"}>five</option>
                <option word={"six"}>six</option>
            </select>
            <br />
            <div>The word you choose:- {word}</div>
        </>
    )
  
}
export default OnChangeHandler3