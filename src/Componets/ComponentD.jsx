import { useEffect, useState } from "react";

const ComponentD = ({ contador }) => {
  const [count, setCount] = useState(contador);
  useEffect(() => {
    setCount(1 + count);
  }, [contador]);
  return (
    <h1>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </h1>
  );
};
export default ComponentD;
