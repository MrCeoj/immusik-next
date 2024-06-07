import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  user,
} from "@nextui-org/react";
import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmarEditarUsuario from "./confirmarEditarUsuario";

function EditarModal({
  isOpen,
  onOpenChange,
  usuario,
  fetchUsuarios,
}: {
  isOpen: any;
  onOpenChange: any;
  usuario: any;
  fetchUsuarios: () => void;
}) {
  //useStates para guardar la información a editar.
  const [nombre, setNombre] = useState(usuario.nombre);
  const [clave, setClave] = useState("");
  const [correo, setCorreo] = useState(usuario.correo);

  //Enviado verifica si ya se presionó el botón e enviar
  const [enviado, setEnviado] = useState(false);

  //Mensajes de error para los inputs
  const [mensajeDeErrorNombre, setMensajeDeErrorNombre] = useState("");
  const [mensajeDeErrorClave, setMensajeDeErrorClave] = useState("");
  const [mensajeDeErrorCorreo, setMensajeDeErrorCorreo] = useState("");

  const {
    isOpen: isConfirmarOpen,
    onOpen: onConfirmarOpen,
    onOpenChange: onConfirmarOpenChange,
  } = useDisclosure();

  //Cuando se abre este modal se establece la información a la que ya tiene el usuario.
  useEffect(() => {
    setNombre(usuario.nombre);
    setCorreo(usuario.correo);
    setClave("");
    setEnviado(false);
  }, [isOpen, onOpenChange]);

  //Validaciones de usuario
  const checkUser = () => {
    //Si el nombre de usuario es de menos de 6 caracteres se regresa true, o sea hay error
    if (nombre.length < 6) return true;
    return false; //Si no hay error regresa false
  };

  //Clave revisa:
  const checkClave = () => {
    if (clave.length === 0) return false; //Si no hay clave no hay error, porque si no hay clave se dejará la antigua
    if (clave.length > 0 && clave.length < 8) return true; //Si es menor a 8 caracteres
    if (!/[A-Z]/.test(clave)) return true; //Si tiene una mayuscula
    if (!/[a-z]/.test(clave)) return true; //Si tiene una minúscula
    if (!/\d/.test(clave)) return true; //Si tiene un número
    return false;
  };

  //Correo revisa:
  const checkCorreo = () => {
    if (correo === "") return true; //Si está vacio
    if (!correo.includes("@")) return true; //Si tiene @
    if (!correo.includes(".")) return true; //Si tiene .
    return false;
  };

  const [data, setData] = useState();

  //Al momento de presionar editar
  const editar = (onClose: any) => {
    setEnviado(true); //se establece enviado a true

    let error = false;

    //validacion de nombre
    if (nombre === "") {
      //campo vacio
      setMensajeDeErrorNombre("Ingrese un nombre.");
      error = true;
    }

    //validacion de correo campo vacio
    if (correo === "") {
      setMensajeDeErrorCorreo("Ingrese un correo.");
      error = true;
    }

    //Si nombre tiene menos de 6 caracteres marca error
    if (nombre.length < 6) {
      setMensajeDeErrorNombre(
        "El nombre de usuario debe de contener mínimo 6 caracteres."
      );
      error = true;
    }

    //Si correo no tiene @ marca error
    if (!correo.includes("@")) {
      setMensajeDeErrorCorreo("El correo debe contener '@'");
      error = true;
    }

    //Si correo no tiene . marca error
    if (!correo.includes(".")) {
      setMensajeDeErrorCorreo("El correo debe contener '.'");
      error = true;
    }

    /*Si la longitud de la clave es diferente a 0 se hacen validaciones
    si es 0 no hay necesidad de validar nada porque se dejará la misma clave */
    if (clave.length !== 0) {
      //validación de longitud
      if (clave.length < 8) {
        setMensajeDeErrorClave(
          "La contraseña debe ser igual o mayor a 8 caracteres."
        );
        error = true;
      }
      //Validacion de mayusculas
      if (!/[A-Z]/.test(clave)) {
        setMensajeDeErrorClave(
          "La contraseña debe contener una letra mayúscula."
        );
        error = true;
      }
      //Validacion de minusculas
      if (!/[a-z]/.test(clave)) {
        setMensajeDeErrorClave(
          "La contraseña debe contener una letra minúscula."
        );
        error = true;
      }

      //Validacion de numeros
      if (!/\d/.test(clave)) {
        setMensajeDeErrorClave("La clave debe contener al menos un número.");
        error = true;
      }
    }

    //Si no hay errores se hace fetch para modificar al usuario.
    if (!error) {
      const dataTemp = {
        id: usuario.id,
        nombre: nombre,
        contrasena: clave,
        correo: correo,
      };

      setData(dataTemp);
      onConfirmarOpen();
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ConfirmarEditarUsuario
              isOpen={isConfirmarOpen}
              onOpen={onConfirmarOpen}
              onOpenChange={onConfirmarOpenChange}
              data={data}
              fetchUsuarios={fetchUsuarios}
              usuario={usuario}
              onClose2={onClose}
            />
            <ModalHeader>Editar información de {usuario.nombre}</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-3">
                <Input
                  label="Nombre"
                  isRequired
                  placeholder="Nombre"
                  labelPlacement={"outside"}
                  value={nombre}
                  isInvalid={enviado && checkUser()}
                  onValueChange={setNombre}
                  errorMessage={mensajeDeErrorNombre}
                />
                <Input
                  isRequired
                  label="Correo"
                  labelPlacement="outside"
                  value={correo}
                  isInvalid={enviado && checkCorreo()}
                  placeholder="Correo"
                  onValueChange={setCorreo}
                  errorMessage={mensajeDeErrorCorreo}
                />
                <Input
                  label="Contraseña"
                  labelPlacement="outside"
                  isInvalid={enviado && checkClave()}
                  type="password"
                  value={clave}
                  onValueChange={setClave}
                  placeholder="Contraseña"
                  errorMessage={mensajeDeErrorClave}
                />
              </div>
              <p>Si mantiene la contraseña vacía, se convervará la actual.</p>
            </ModalBody>
            <ModalFooter>
              <div className="flex flex-row w-full gap-3 items-center justify-center text-white">
                <button
                  onClick={onClose}
                  className="bg-zinc-400 py-1 px-3 rounded-md flex items-center justify-center hover:bg-zinc-500"
                >
                  Cancelar
                </button>

                <button
                  onClick={() => editar(onClose)}
                  className="bg-primary py-1 px-3 rounded-md flex items-center justify-center hover:bg-pink-700"
                >
                  Editar
                </button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default EditarModal;
