import React from "react";
import useCustomHook from "./useCustomHook";

function ComponentCustomHook() {
  const { count, plus, add, minus, divide, zero } = useCustomHook(2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={divide}>/</button>
      <button onClick={minus}>-</button>
      <button onClick={zero}>0</button>
      <button onClick={plus}>+</button>
      <button onClick={add}>*</button>
    </div>
  );
}

export default ComponentCustomHook