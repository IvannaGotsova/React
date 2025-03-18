import { useState, createContext, useContext } from "react";
import ComponentUseContext2 from "./ComponentUseContext2";

export const WordContext = createContext(); 

function ComponentUseContext() {

    const [word, setWord] = useState("in context");

    return (
      <WordContext.Provider value={word}>
        <p>{`Word is ${word}`}</p>
        <ComponentUseContext2/>
      </WordContext.Provider>
    );
}

export default ComponentUseContext


