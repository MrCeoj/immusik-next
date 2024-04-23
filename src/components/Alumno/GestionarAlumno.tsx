import { toTitleCase } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditarInformacion from "./EditarInformacion";

function GestionarAlumno({
  setGestionar,
  alumno,
}: {
  setGestionar: any;
  alumno: any;
}) {
  const handleCancelar = () => {
    setGestionar(false);
  };

  return (
    <>
      <div className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
          <h1>
            Detalles de {toTitleCase(alumno.nombre)}{" "}
            {toTitleCase(alumno.aPaterno)}
          </h1>
          <div className="flex flex-row">
            <div className="w-1/2">
              <EditarInformacion alumno={alumno} />
            </div>
            <div className="w-1/2">
              <h1>Clases</h1>
              <p className="font-bold">NOTA: esto lo va a hacer Marcelo</p>
            </div>
          </div>
          <button
            onClick={handleCancelar}
            className="bg-zinc-400 py-1 px-5 rounded-md text-white hover:bg-zinc-500 active:bg-zinc-600"
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}

export default GestionarAlumno;
