
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import ConfirmacionRegistro from "./ConfirmacionRegistro";
import { setEstado } from "@/persistence/DocenteDao";
import FormDocente from "./form-docente";
import { toast } from "react-toastify"; // Importa la función toast


function RegistrarDocente({ 
  setCambio, 
  cambio
  } : { 
    setCambio: React.Dispatch<React.SetStateAction<boolean>>, 
    cambio: boolean,
  }) {

   const [modalOpen, setModalOpen] = useState(false);

   const handleCancelar = () => {
     setModalOpen(false);
   };

   const handleRegistrar = () => {
     setModalOpen(true);
   };

  return (
    <>
      
      <button
        className="bg-primary rounded-md shadow-md text-white text-center px-4 py-1 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)] text-lg font-bold ml-3"
        onClick={handleRegistrar}
      >
        <span>Registrar Docente</span>
      </button>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
        className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-5xl min-h-min rounded-md text-white"
      >
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-4xl">Alta de Docente</h1>
        </div>
        
        <FormDocente cambio={cambio} setCambio={setCambio} setModalOpen={setModalOpen}></FormDocente>
        
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
      </Modal>
    </>
  );
}

export default RegistrarDocente;
