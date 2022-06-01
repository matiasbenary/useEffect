import { useEffect } from "react";

const Mensaje = () => {
  useEffect(() => {
    console.log("Mensaje");
    return () => {
      console.log("desmontando Mensaje");
    };
  }, []);

  return <div>Felicitaciones</div>;
};

export default Mensaje;
