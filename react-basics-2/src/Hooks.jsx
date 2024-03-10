import { useState } from "react";

function Hooks() {

   const [number, setNumber] = useState("");
   const [option, setOption] = useState("");
   const [word, setWord] = useState("");
   let sentence = `The number you choose is ${number}, the option you choose is ${option}, the word you choose is ${word}!`;

  return (
    <>
      <h3>Choose number:</h3>
      <button
        type="button"
        onClick={() => setNumber("one")}
      >One</button>
      <button
        type="button"
        onClick={() => setNumber("two")}
      >Two</button>
      <button
        type="button"
        onClick={() => setNumber("three")}
      >Three</button>
      <button
        type="button"
        onClick={() => setNumber("four")}
      >Four</button>
      <button
        type="button"
        onClick={() => setNumber("five")}
      >Five</button>
      <button
        type="button"
        onClick={() => setNumber("six")}
      >Six</button>
      <button
        type="button"
        onClick={() => setNumber("seven")}
      >Seven</button>
      <button
        type="button"
        onClick={() => setNumber("eight")}
      >Eight</button>
      <button
        type="button"
        onClick={() => setNumber("nine")}
      >Nine</button>
      <button
        type="button"
        onClick={() => setNumber("ten")}
      >Ten</button>
      <h3>The number is: {number}</h3>

      <h3>Choose option:</h3>
      <button
        type="button"
        onClick={() => setOption("yes")}
      >Yes</button>
      <button
        type="button"
        onClick={() => setOption("no")}
      >No</button>
      <h3>The option is: {option}</h3>

      <h3>Choose word:</h3>
      <button
        type="button"
        onClick={() => setWord("abc")}
      >abc</button>
      <button
        type="button"
        onClick={() => setWord("bca")}
      >bca</button>
      <button
        type="button"
        onClick={() => setWord("cab")}
      >cab</button>
      <h3>The word is: {word}</h3>
      <h2>{sentence}</h2>
    </>
  );
}

export default Hooks