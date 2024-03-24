import { useState, createContext } from "react";
import Second from "./Second"

export const WordContext = createContext();

function First() {

    const [word, setWord] = useState("This is through useContext()");

    return (
      
        <div className="example">
        <p>This is First</p>
        <p>{`${word}`}</p>
        <WordContext.Provider value={word}>
            <Second word={word}/>
        </WordContext.Provider>
      </div>
    );
  }
  
export default First