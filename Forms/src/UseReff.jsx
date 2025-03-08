import { useState, useRef } from "react";

function UseReff () {
    const [countState, setCountState] = useState(0);
    const countReff = useRef(0);

    const clickChangeHandler = () => {
        if ((countReff.current + 1) % 2 == 0) {
            setCountState(countState => countState + 1)
        }
        countReff.current = countReff.current + 1
    }
  return (
    <>
      <button type="button" onClick={clickChangeHandler}>Click</button>
      <h2>State Value: {countState}</h2>
      <h2>Reff Value: {countReff.current}</h2>
    </>
  );
}

export default UseReff