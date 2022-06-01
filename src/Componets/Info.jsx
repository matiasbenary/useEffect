import { useState } from "react";
import Tracker from "./Tracker";

const Info = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1 onClick={() => setShow(!show)}>{show ? "ver" : "ocultar"}</h1>
      {show && <Tracker></Tracker>}
    </div>
  );
};

export default Info;
