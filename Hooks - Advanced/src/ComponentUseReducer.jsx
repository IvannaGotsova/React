import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "+ 3":
      return { count: state.count + 3 };
    case "+ 2":
      return { count: state.count + 2 };
    case "+ 1":
      return { count: state.count + 1 };
    case "- 1":
      return { count: state.count - 1 };
    case "- 2":
      return { count: state.count - 2 };
    case "- 3":
      return { count: state.count - 3 };     
    case "= 0":
      return { count: 0 };
    default:
      return state;
  }
}

function ComponentUseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "+ 3" })}>+++</button>
      <button onClick={() => dispatch({ type: "+ 2" })}>++</button>
      <button onClick={() => dispatch({ type: "+ 1" })}>+</button>
      <button onClick={() => dispatch({ type: "= 0" })}>0</button>
      <button onClick={() => dispatch({ type: "- 1" })}>-</button>
      <button onClick={() => dispatch({ type: "- 2" })}>--</button>
      <button onClick={() => dispatch({ type: "- 3" })}>---</button>
    </div>
  );
}

export default ComponentUseReducer;

