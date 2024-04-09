import React from "react";

function ConfirmacionRegistrar({
  setConfirmacionRegistrar,
  data,
  cambio,
  setCambio,
  setRegistrarClase,
}) {
  const handleCancelar = () => {
    setConfirmacionRegistrar(false);
  };

  const handleAceptar = () => {
    let nombre = data.nombre;
    let diasDisplay = data.diasDisplay;
    let horario = data.horario;
    let sucursal = data.sucursal;
    let cupo = data.cupo;
    let docente = data.docente;

    fetch("api/clase/clases", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        diasDisplay,
        horario,
        sucursal,
        cupo,
        docente,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se creó la clase.") {
            setConfirmacionRegistrar(false);
            if (cambio) {
              setCambio(false);
            } else {
              setCambio(true);
            }
            setRegistrarClase(false);
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
          ¿Está seguro que desea agregar la clase {data.nombre}?
        </h1>
        {data.docente === "" && (
          <p className="text-red-500">
            (Esta clase se registrará sin docente, se le deberá de asignar un
            docente lo más antes posible.)
          </p>
        )}
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

export default ConfirmacionRegistrar;
