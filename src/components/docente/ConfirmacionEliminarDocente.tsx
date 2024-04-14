import React, { useState } from "react";
import Modal from "react-modal";

function ConfirmacionEliminarClase({
  clase,
  actualizarDocente,
  setModalOpen,
}: {
  clase: any,
  actualizarDocente: any,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}) {
  const [eliminar, setEliminar] = useState(false);

  const handleCancelar = () => {
    setEliminar(false);
  };

  const handleEliminar = () => {
    let id = clase.id;
    fetch(`api/clase/clases`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then(() => {
          // Se actualiza la información de la clase
          // Se cierra el modal
          setEliminar(false);
          setModalOpen(false);
          actualizarDocente(); 
        });
      }
    });
  };

  return (
    <>
      <button
        onClick={() => setEliminar(true)}
        className="bg-red-500 py-2 px-3 mt-3 rounded-md text-white hover:bg-red-700 self-center"
      >
        Eliminar clase
      </button>
      <Modal
        isOpen={eliminar}
        ariaHideApp={false}
        onRequestClose={() => setEliminar(false)}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
        className="relative flex flex-col items-center bg-secciones bg-opacity-95 p-6 w-full max-w-5xl min-h-min rounded-md text-white"
      >
        <h1 className="text-2xl font-bold">
          ¿Está seguro que quiere eliminar la clase?
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
      </Modal>
    </>
  );
}

export default ConfirmacionEliminarClase;
