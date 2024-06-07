import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";

function ConfirmarEditarUsuario({
  isOpen,
  onOpen,
  onOpenChange,
  data,
  fetchUsuarios,
  usuario,
  onClose2,
}: {
  isOpen: any;
  onOpen: any;
  onOpenChange: any;
  data: any;
  fetchUsuarios: () => void;
  usuario: any;
  onClose2: () => void;
}) {
  const handleAceptar = (onClose: any) => {
    fetch("/api/usuario/modificar", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        fetchUsuarios(); //se hace fetch a usuarios para que se actualicen en la pagina.
        onClose2();
        onClose();
      } else {
        return response.json().then((data) => {
          toast.error(data.message);
        });
      }
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                ¿Está seguro que desea modificar la información de{" "}
                {usuario.nombre}?
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <p>
                    <span className="font-bold">Nombre de usuario: </span>
                    {data.nombre}
                  </p>
                  <p>
                    <span className="font-bold">Correo: </span>
                    {data.correo}
                  </p>
                  {data.contrasena !== "" ? (
                    <p>
                      <span className="font-bold">Contraseña: </span>
                      {data.contrasena}
                    </p>
                  ) : (
                    <p>Se mantendrá la contraseña anterior.</p>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex flex-row gap-1">
                  <button
                    onClick={onClose}
                    className="bg-zinc-500 text-white py-1 px-3 rounded-md hover:bg-zinc-600"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleAceptar(onClose)}
                    className="bg-primary text-white py-1 px-3 rounded-md hover:bg-pink-800"
                  >
                    Aceptar
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

export default ConfirmarEditarUsuario;
