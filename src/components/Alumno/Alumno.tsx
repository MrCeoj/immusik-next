import React, { useState } from "react";
import GestionarAlumno from "./GestionarAlumno";
import { Alumno } from "@/entities/edge";

function Alumnos({
  alumno,
  fetchAlumnos,
  cambio,
  setCambio
}: {
  alumno: Alumno;
  fetchAlumnos: () => void;
  cambio: any;
  setCambio: any;
}) {
  const [gestionar, setGestionar] = useState(false);

  const handleGestionar = () => {
    setGestionar(true);
  };

  return (
    <div>
      <div className="px-4 py-2 grid grid-cols-10 my-4 text-lg bg-gray-100 bg-opacity-50 rounded-lg font-bold items-center">
        {gestionar && (
          <GestionarAlumno
            setGestionar={setGestionar}
            alumno={alumno}
            fetchAlumnos={fetchAlumnos}
            cambio={cambio}
            setCambio={setCambio}
          />
        )}
        <div className="col-span-3">
          {alumno.nombre} {alumno.aPaterno} {alumno.aMaterno}
        </div>
        <div className="col-span-2">{alumno.tutor}</div>
        <div className="col-span-2">{alumno.contacto}</div>
        <div className="col-span-2">
          {alumno.activo.toString() === "true" ? (
            <div className="max-w-28 min-w-20 justify-center bg-active-fill rounded-xl border-4 border-active-stroke text-center text-active-stroke">
              ACTIVO
            </div>
          ) : (
            <div className="max-w-28 min-w-20 justify-center bg-inactive-fill rounded-xl border-4 border-inactive-stroke text-center text-inactive-stroke">
              INACTIVO
            </div>
          )}
        </div>
        <div className="col-span-1">
          <button onClick={handleGestionar}>
            <u>Ver detalles</u>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alumnos;
