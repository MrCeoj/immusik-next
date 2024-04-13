import router from "next/router";
import React from "react";
import { toast } from "react-toastify";

function ConfirmacionRegistro({
  setConfirmacionRegistrar,
  data,
  cambio,
  setCambio,
  setRegistrarDocente,
}: {
  setConfirmacionRegistrar: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  cambio: boolean;
  setCambio: React.Dispatch<React.SetStateAction<boolean>>;
  setRegistrarDocente: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleCancelar = () => {
    setConfirmacionRegistrar(false);
  };

  const handleAceptar = () => {
    let nombre = data.nombre;
    let aPaterno = data.aPaterno;
    let aMaterno = data.aMaterno;
    let telefono = data.telefono;
    let curp = data.curp;
    let estado = "INACTIVO";

    fetch("api/docente/registerDocente", { //aqui me da error con status 500
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docente: { 
          nombre: data.nombre,
          aPaterno: data.aPaterno,
          aMaterno: data.aMaterno,
          telefono: data.telefono,
          curp: data.curp,
          estado: "INACTIVO",
        },
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se creó el docente.") {
            setConfirmacionRegistrar(false);
            if (cambio) {
              setCambio(false);
            } else {
              setCambio(true);
            }
            setRegistrarDocente(false);
          } else {
            alert(data.message);
            setConfirmacionRegistrar(false);
          }
        });
      } else {
        alert("Error al registrar al Docente.");
      }
    });
  };

  return (
    <div className="absolute z-30 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-2">
          ¿Está seguro que desea agregar al docente {data.nombre}?
        </h1>
        <div className="flex mt-2">
          <button
            className="bg-gray-500 py-1 px-3 ml-2 rounded-md text-white hover:bg-gray-700"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
          <button
            className="bg-pink-500 py-1 px-3 ml-2 rounded-md text-white hover:bg-pink-700"
            onClick={handleAceptar}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmacionRegistro;

