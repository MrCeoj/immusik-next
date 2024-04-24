import React, { useState } from "react";
import GestionarAlumno from "./GestionarAlumno";
import { Alumno } from "@/entities/edge";

function Alumnos({ alumno }: { alumno: Alumno }) {
  const [gestionar, setGestionar] = useState(false);

  const handleGestionar = () => {
    setGestionar(true);
  };

  return (
    <div>
      {gestionar && (
        <GestionarAlumno setGestionar={setGestionar} alumno={alumno} />
      )}
      {alumno.nombre} {alumno.aPaterno} {alumno.activo.toString()}
      <button className="ml-5" onClick={handleGestionar}>
        gestionar
      </button>
    </div>
  );
}

export default Alumnos;
