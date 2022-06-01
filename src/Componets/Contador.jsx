import { useState } from "react";
import ComponenteA from "./ComponentA";
import ComponenteB from "./ComponentB";
import Mensaje from "./Mensaje";

const Contador = () => {
  console.log("Contador");
  const [count, setCount] = useState(0);
  return (
    <div>
      <ComponenteA count={count}></ComponenteA>
      <button onClick={() => setCount(count + 1)}>sumar</button>
      <ComponenteB></ComponenteB>
      {count === 3 && <Mensaje />}
    </div>
  );
};

export default Contador;
