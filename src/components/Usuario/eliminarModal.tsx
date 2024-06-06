import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EliminarModal({
  isOpen,
  onOpenChange,
  usuario,
  fetchUsuarios,
}: {
  isOpen: any;
  onOpenChange: any;
  usuario: any;
  fetchUsuarios: () => void;
}): React.JSX.Element {
  //eliminar se encarga de eliminar el usuario
  const eliminar = (onClose: any, id: any) => {
    const data = {
      id: id, //id del usuario a eliminar
    };
    fetch("/api/usuario/eliminar", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        fetchUsuarios();
        onClose();
      } else {
        toast.error("Error al eliminar al usuario.");
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                ¿Seguro que quiere eliminar a {usuario?.nombre}?
              </ModalHeader>
              <ModalBody>¡Esta acción es permanente!</ModalBody>
              <ModalFooter>
                <div className="text-white flex flex-row gap-2">
                  <button
                    onClick={onClose}
                    className="bg-zinc-400 py-1 px-3 rounded-md flex items-center justify-center hover:bg-zinc-500"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => eliminar(onClose, usuario.id)}
                    className="bg-red-500 py-1 px-3 rounded-md flex items-center justify-center hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default EliminarModal;
