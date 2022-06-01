import { useEffect, useState } from "react";
import ComponenteB from "./Componets/ComponentB";
import ComponenteC from "./Componets/ComponentC";
import ComponentD from "./Componets/ComponentD";
import Contador from "./Componets/Contador";
import Info from "./Componets/Info";
import Lista from "./Componets/Lista";

// 1- se modifica el componente de arriba
// 2- se cambian las props
// 3- se actualizan el state

// useEffect
// primer parametro arrowFuntion
// segundo son las dependencias
// si no coloco nada se ejucuta siempre
// [] -> sola vez
// dependencia [props,state]
function App() {
  const [test, setTest] = useState(10);
  const [test1, setTest1] = useState(0);
  console.log("primero");

  useEffect(() => {
    console.log("hola");
    setTest1(test + 1);
  }, [test]);

  console.log("ultimo");
  return (
    <div>
      <button onClick={() => setTest(test + 1)}>{test}</button>
      <button onClick={() => setTest1(test1 + 1)}>{test1}</button>
      {/* <ComponenteB></ComponenteB> */}
      {/* <ComponentD contador={test}></ComponentD>
      <Contador></Contador>

      <Lista></Lista> */}
      <Info></Info>
    </div>
  );
}

export default App;
