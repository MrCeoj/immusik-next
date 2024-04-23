import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmarRegistrarAlumno({
  setConfirmacionRegistrarAlumno,
  data,
  setRegistrar,
}: {
  setConfirmacionRegistrarAlumno: any;
  data: any;
  setRegistrar: any;
}) {
  //Cierra este modal
  const handleCancelar = () => {
    setConfirmacionRegistrarAlumno(false);
  };

  //Procede con el registro
  const handleAceptar = () => {
    //petición fetch post

    fetch("api/alumno/alumno", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data, //se envian los datos de el alumno
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            if (data.message === "Alumno registrado correctamente.") {
              toast.success(data.message);
              setConfirmacionRegistrarAlumno(false);
              setRegistrar(false);
            } else {
              toast.error(data.message);
              setConfirmacionRegistrarAlumno(false);
            }
          });
        } else {
          toast.error("Error al registrar al alumno.");
          setConfirmacionRegistrarAlumno(false);
        }
      })
      .catch((e) => {
        toast.error(
          "Hubo un error al realizar la operación, revise su conexión."
        );
      });
  };

  return (
    <div className="absolute z-20 top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-lg">
        <h1 className="font-bold text-2xl mb-3">
          ¿Está seguro que quiere registrar al alumno?
        </h1>
        <p>
          <span className="font-bold">Nombre: </span>
          {data.nombre} {data.aPaterno} {data.aMaterno}
        </p>
        <p>
          <span className="font-bold">Tutor: </span>
          {data.tutor}
        </p>
        <p>
          <span className="font-bold">Contacto: </span>
          {data.contacto}
        </p>
        <p>
          <span className="font-bold">Fecha de Nacimiento: </span>
          {data.fechaNac}
        </p>
        <p className="mb-3">
          <span className="font-bold">CURP: </span>
          {data.curp}
        </p>
        {data.clase !== "" && (
          <p className="mb-3">(El alumno se inscribirá a la clase indicada.)</p>
        )}
        <div className="flex w-full items-center justify-center gap-3">
          <button
            onClick={handleCancelar}
            className="bg-zinc-500 text-white py-1 px-5 text-lg rounded-md hover:bg-zinc-600 active:bg-zinc-700"
          >
            Cancelar
          </button>
          <button
            onClick={handleAceptar}
            className="bg-pink-600 text-white py-1 px-5 text-lg rounded-md hover:bg-pink-700 active:bg-pink-800"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmarRegistrarAlumno;
