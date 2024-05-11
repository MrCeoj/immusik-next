import React from "react";
import { toast } from "react-toastify";

function ConfirmarDesasignarClase({
  setConfirmar,
  clases,
  ids,
  alumno,
  cambio,
  setCambio,
}: {
  setConfirmar: any;
  clases: any;
  ids: any;
  alumno: any;
  cambio: any;
  setCambio: any;
}) {
  //Función para cerrar este componente
  const handleCancelar = () => {
    setConfirmar(false);
  };

  //Función de aceptar
  const handleAceptar = () => {
    //Se construye un objeto data con la información a enviar a la petición.
    const data = {
      alumnoId: alumno.id,
      claseId: ids,
    };

    //Se realiza la petición
    fetch("api/AlumnoClaseMultiple", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        //Caso exitoso
        toast.success("Se desasignaron las clases exitosamente.");
        setCambio(!cambio);
        setConfirmar(false);
      } else {
        //Caso fallido
        return response.json().then((data) => {
          toast.error(data.message);
        });
      }
    });
  };

  return (
    <div className="absolute text-black z-20 w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-7 rounded-lg shadow-lg relative flex flex-col items-center justify-center">
        <button onClick={handleCancelar} className="absolute top-3 right-3">
          X
        </button>
        <h1>
          Desasignará a {alumno.nombre} {alumno.aPaterno} de:
        </h1>
        <div className="my-2">
          {clases.map((clase: any) => (
            <p className="text-lg font-normal">{clase}</p>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <button
            onClick={handleCancelar}
            className="bg-zinc-500 text-base font-normal rounded-md text-white py-1 px-5 hover:bg-zinc-600 active:bg-zinc-700"
          >
            Cancelar
          </button>
          <button
            onClick={handleAceptar}
            className="bg-pink-500 text-base font-normal rounded-md text-white py-1 px-5 hover:bg-pink-600 active:bg-pink-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarDesasignarClase;
