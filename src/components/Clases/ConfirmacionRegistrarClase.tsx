import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";

function ConfirmacionRegistrarClase({
  onOpen,
  isOpen,
  onOpenChange,
  data,
  cambio,
  setCambio,
  setModalOpen,
}: {
  onOpen: any;
  isOpen: any;
  onOpenChange: any;
  data: any;
  cambio: any;
  setCambio: any;
  setModalOpen: any;
}) {
  const confirmarRegistro = (onClose: any) => {
    fetch("api/clase/clases", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se creó la clase.") {
            //Si es un registro exitoso se le informa al usuario y se cierra el componente
            toast.success("Se registró la clase exitosamente.");
            onClose();
            //Se indica que hay un cambio en las clases.
            if (cambio) {
              setCambio(false);
            } else {
              setCambio(true);
            }
            setModalOpen(false);
          } else {
            //Si hay un error se le indica al usuario.
            toast.error(data.message);
          }
        });
      } else {
        toast.error("Error al registrar la nueva clase.");
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
                ¿Seguro que quiere registrar la clase {data.nombre}?
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <p>
                    <span>Nombre: </span>
                    {data.nombre}
                  </p>
                  <p>
                    <span>Días: </span>
                    {data.dias}
                  </p>
                  <p>
                    <span>Horario: </span>
                    {data.hora}
                  </p>
                  <p>
                    <span>Cupo: </span>
                    {data.cupoMax}
                  </p>
                </div>
                {data.idDocente === "" && (
                  <p className="font-bold">
                    La clase se registrará sin docente.
                  </p>
                )}
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
                    onClick={() => confirmarRegistro(onClose)}
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

export default ConfirmacionRegistrarClase;
