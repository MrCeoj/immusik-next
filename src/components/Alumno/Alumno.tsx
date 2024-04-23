import React, { useState } from "react";
import GestionarAlumno from "./GestionarAlumno";

function Alumno({ alumno }: { alumno: any }) {
  const [gestionar, setGestionar] = useState(false);

  const handleGestionar = () => {
    setGestionar(true);
  };

  return (
    <div>
      {gestionar && (
        <GestionarAlumno setGestionar={setGestionar} alumno={alumno} />
      )}
      {alumno.nombre} {alumno.aPaterno}
      <button className="ml-5" onClick={handleGestionar}>
        gestionar
      </button>
    </div>
  );
}

export default Alumno;
