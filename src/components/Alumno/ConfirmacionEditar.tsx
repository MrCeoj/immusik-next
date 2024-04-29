import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

function ConfirmacionEditar({
  data,
  setEditar,
  nomDisplay,
}: {
  data: any;
  setEditar: any;
  nomDisplay: any;
}) {
  const handleCancelar = () => {
    setEditar(false);
  };

  //Función que se ejecuta cuando se presiona aceptar
  const handleAceptar = () => {
    fetch("api/alumno/alumno", {
      method: "PATCH", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    }).then((response) => {
      //Se obtiene la respuesta
      if (response.ok) {
        return response.json().then((data) => {
          if (
            data.message ===
            "Se modificó la información del alumno exitosamente."
          ) {
            toast.success(data.message);
            setEditar(false);
          } else {
            toast.error(data.message);
            setEditar(false);
          }
        });
      } else {
        toast.error("Hubo un problema al modificar la información del alumno.");
      }
    });
  };

  return (
    <div className="absolute z-20 top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-10 text-black">
        <h1>¿Está seguro que quiere editar la información de {nomDisplay}?</h1>
        <h2>Nueva información:</h2>
        <div className="flex flex-col">
          <p>
            <span className="font-bold">Nombre: </span>
            {data.nombre} {data.aPaterno} {data.aMaterno}
          </p>
          <p>
            <span className="font-bold">Tutor: </span>
            {data.tutor}
          </p>
          <p>
            <span className="font-bold">Teléfono: </span>
            {data.contacto}
          </p>
          <p>
            <span className="font-bold">Fecha de nacimiento: </span>
            {data.fechaNac}
          </p>
          <p>
            <span className="font-bold">CURP: </span>
            {data.curp}
          </p>
        </div>
        <div>
          <button
            onClick={handleCancelar}
            className="bg-gray-500 text-white rounded-md py-1 px-2 hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleAceptar}
            className="bg-pink-500 text-white rounded-md py-1 px-2 hover:bg-pink-600"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmacionEditar;
