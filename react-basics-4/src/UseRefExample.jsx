import { useState, useEffect, useRef } from "react";

function UseRefExample () {

   const numberRef = useRef(10);

   const handleClick = () => {
    numberRef.current.focus();;
   };

    return (
        <>
        <button onClick={handleClick}>Click</button>
        <h1>Clicks Count: {numberRef.current}</h1>
        </>
    );
}

export default UseRefExample