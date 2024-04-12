import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmacionEliminarClase({
  clase,
  setEliminar,
  actualizarClases,
  setModalOpen,
}: {
  clase: any;
  setEliminar: any;
  actualizarClases: any;
  setModalOpen: any;
}) {
  const handleCancelar = () => {
    setEliminar(false);
  };

  const handleEliminar = () => {
    let id = clase.id;
    fetch("api/clase/clases", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          // Se actualiza la información de la clase
          actualizarClases();
          // Se cierra el modal
          setEliminar(false);
          setModalOpen(false);
        });
      } else {
        alert("Hubo un problema al eliminar la clase.");
      }
    });
  };

  return (
    <>
      <div className="absolute z-50 h-screen w-screen top-0 left-0 bg-black bg-opacity-70 flex justify-center items-center">
        <div className="text-black bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">
            ¿Está seguro que quiere eliminar la clase {clase.nombre}?
          </h1>
          <p className="my-1">
            Se eliminará la inscripción de los alumnos de esta clase.
          </p>
          <p className="text-red-500">¡Esta acción es permanente!</p>
          <div className="mt-5">
            <button
              className="mr-1 bg-gray-500 py-1 px-5 rounded-md hover:bg-gray-700 text-white"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button
              className="bg-red-500 py-1 px-5 rounded-md ml-1 hover:bg-red-700 text-white"
              onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmacionEliminarClase;
