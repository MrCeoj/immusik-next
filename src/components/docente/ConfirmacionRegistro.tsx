import React from "react";

function ConfirmacionRegistro({
  setConfirmacionRegistrar,
  data,
  cambio,
  setCambio,
  setRegistrarDocente,
}) {
  const handleCancelar = () => {
    setConfirmacionRegistrar(false);
  };

  const handleAceptar = () => {
    let nombre = data.nombre;

    fetch("api/docente/fetchAll", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
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
        alert("Error al registrar la nueva clase.");
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
