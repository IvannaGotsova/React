import { useState, createContext, useContext } from "react";
import {WordContext} from "./ComponentUseContext";

function ComponentUseContext2() {

    const word = useContext(WordContext);

    return (
      <>
        <p>{`Word is ${word}`}</p>
      </>
    );
}

export default ComponentUseContext2