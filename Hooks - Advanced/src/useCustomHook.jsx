import { useState } from "react";

function useCustomHook () {
  const [count, setCount] = useState(0);

  const plus = () => setCount((previous) => previous + 2);
  const add = () => setCount((previous) => previous * 2);
  const minus = () => setCount((previous) => previous - 2);
  const divide = () => setCount((previous) => previous / 2);
  const zero = () => setCount(0);

  return { count, plus, add, minus, divide, zero };
}

export default useCustomHook;