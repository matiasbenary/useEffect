import { useEffect, useState } from "react";

const Tracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const getPositionEvent = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log("Se mueve el mouse", e.clientX, e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", getPositionEvent);

    return () => {
      console.log("componente desmontado");
      window.removeEventListener("mousemove", getPositionEvent);
    };
  }, []);
  return (
    <h2>
      Tracker
      {"\n"}
      {position.x}px - {position.y}px
    </h2>
  );
};

export default Tracker;
