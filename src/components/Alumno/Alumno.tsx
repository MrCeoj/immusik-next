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
      <div className="grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg font-bold pl-4 gap-5 items-center">
        {gestionar && (
          <GestionarAlumno setGestionar={setGestionar} alumno={alumno} />
        )}
        <div className="col-span-3 text-left">
          {alumno.nombre} {alumno.aPaterno} {alumno.aMaterno}
        </div>
        <div className="col-span-2 text-left">{alumno.tutor}</div>
        <div className="col-span-2 text-left">{alumno.contacto}</div>
        <div className="col-span-1 text-left">{alumno.fechaNac}</div>
        <button className="w-200 ml-28" onClick={handleGestionar}>
          <u>Detalles</u>
        </button>
      </div>
    </div>
  );
}

export default Alumnos;
