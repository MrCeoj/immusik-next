import { toTitleCase } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  cn,
  useDisclosure,
} from "@nextui-org/react";
import Label from "../form/Label";
import Input from "../form/Input";
import { useForm } from "react-hook-form";
import { Alumno } from "@/entities";
import { toast } from "react-toastify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

function EditarInformacion({
  alumno,
  fetchAlumnos,
}: {
  alumno: Alumno;
  fetchAlumnos: () => void;
}) {
  // useForm para manejar los inputs del formulario

  const [informacion, setInformacion] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fechaActual = new Date();

  const router = useRouter();

  // useState para guardar si el formulario ha sido modificado
  const [isModified, setIsModified] = useState(false);

  //Arreglo de meses para la selección de meses
  let mesesStr = "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic";
  let meses = mesesStr.split(",");

  //Se crea un nombreDisplay que será el que se presente en el mensaje de confirmación
  const nomDisplay =
    toTitleCase(alumno.nombre) + " " + toTitleCase(alumno.aPaterno);

  //useState para abrir y cerrar el modal para confirmar la edición
  const [editar, setEditar] = useState(false);

  //useState para los datos que se enviarán
  const [data, setData] = useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //Función para saber si tiene Números
  const tieneNum = (str: string) => {
    const regex = /\d/;
    return regex.test(str);
  };

  // Verificar si el formulario ha sido modificado
  useEffect(() => {
    const initialFormState = {
      nombre: alumno.nombre,
      aPaterno: alumno.aPaterno,
      aMaterno: alumno.aMaterno,
      tutor: alumno.tutor,
      contacto: alumno.contacto,
      fechaNac: alumno.fechaNac,
      curp: alumno.curp,
    };

    watch((value) => {
      setIsModified(JSON.stringify(value) !== JSON.stringify(initialFormState));
    });
  }, [watch]);

  const editarConfirmar = (onClose: any) => {
    const info = {
      id: alumno.id,
      nombre: data.nombre,
      aPaterno: data.aPaterno,
      aMaterno: data.aMaterno,
      tutor: data.tutor,
      contacto: data.contacto,
      fechaNac: data.fechaNac,
      curp: data.curp,
    };

    console.log(info);

    fetch("api/alumno/alumno", {
      method: "PATCH", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((response) => {
      //Se obtiene la respuesta
      if (response.ok) {
        return response.json().then((data) => {
          if (
            data.message ===
            "Se modificó la información del alumno exitosamente."
          ) {
            toast.success(data.message);
            fetchAlumnos();
            onClose();
            setEditar(false);
          } else {
            toast.error(data.message);
            onClose();
            setEditar(false);
          }
        });
      } else {
        toast.error("Hubo un problema al modificar la información del alumno.");
      }
    });
  };

  //Se ejecuta cuando se presiona editar
  const handleEditar = handleSubmit((data) => {
    //se asigna a data los datos
    setData(data);
    onOpen();
    //Se realiza la petición fetch de tipo PATCH
  });

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                ¿Está seguro que desea modificar la información de{" "}
                {alumno.nombre} {alumno.aPaterno}?
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
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
                    <span className="font-bold">Fecha de nacimiento: </span>
                    {data.fechaNac}
                  </p>
                  <p>
                    <span className="font-bold">CURP: </span>
                    {data.curp}
                  </p>
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
                    onClick={() => editarConfirmar(onClose)}
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
      <form
        onSubmit={handleEditar}
        className="flex flex-col bg-secciones text-black"
      >
        <div>
          <Label
            htmlFor="nombre"
            label="Nombre"
            error={Boolean(errors.nombre?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="nombre"
            error={errors.nombre}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("nombre", {
              required: {
                value: true,
                message: "El nombre del alumno es requerido.",
              },
              validate: (value) => {
                if (tieneNum(value)) {
                  return "El nombre del alumno no puede contener números.";
                }
              },
              value: toTitleCase(alumno.nombre),
              // El valor que se mandará una vez enviado el formulario
              setValueAs: (value: string) => value.trim().toUpperCase(),
            })}
          />
        </div>

        <div>
          <Label
            htmlFor="aPaterno"
            label="Apellido Paterno"
            error={Boolean(errors.aPaterno?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="aPaterno"
            error={errors.aPaterno}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("aPaterno", {
              required: {
                value: true,
                message: "El apellido paterno es requerido.",
              },
              validate: (value) => {
                if (tieneNum(value)) {
                  return "El nombre del alumno no puede contener números.";
                }
              },
              value: toTitleCase(alumno.aPaterno),
              setValueAs: (value: string) => value.trim().toUpperCase(),
            })}
          />
        </div>

        <div>
          <Label
            htmlFor="aMaterno"
            label="Apellido Materno"
            error={Boolean(errors.aMaterno?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="aMaterno"
            error={errors.aMaterno}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("aMaterno", {
              required: {
                value: true,
                message: "El apellido materno es requerido.",
              },
              validate: (value) => {
                if (tieneNum(value)) {
                  return "El nombre del alumno no puede contener números.";
                }
              },
              value: toTitleCase(alumno.aMaterno),
              setValueAs: (value: string) => value.trim().toUpperCase(),
            })}
          />
        </div>

        <div>
          <Label
            htmlFor="tutor"
            label="Tutor"
            error={Boolean(errors.tutor?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="tutor"
            error={errors.tutor}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("tutor", {
              required: {
                value: true,
                message: "El nombre del tutor es requerido.",
              },
              validate: (value) => {
                if (tieneNum(value)) {
                  return "El nombre del tutor no puede contener números.";
                }
              },
              value: toTitleCase(alumno.tutor),
              setValueAs: (value: string) => value.trim().toUpperCase(),
            })}
          />
        </div>

        <div>
          <Label
            htmlFor="contacto"
            label="Contacto"
            error={Boolean(errors.contacto?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="contacto"
            onlyNumeric
            error={errors.contacto}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("contacto", {
              required: {
                value: true,
                message: "El dato de contacto es requerido.",
              },
              value: alumno.contacto,
              setValueAs: (value: string) => value.trim(),
            })}
          />
        </div>

        {/* Hace que el DatePicker cambie a español */}
        <div>
          <Label
            htmlFor="fechaNac"
            label="Fecha de Nacimiento"
            error={Boolean(errors.fechaNac?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="date"
            id="fechaNac"
            error={errors.fechaNac}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("fechaNac", {
              required: {
                value: true,
                message: "La fecha es requerida.",
              },
              validate: {
                invalidDate: (value) => {
                  const fehcaIngresada = new Date(
                    formatearFechaParaForm(value, meses)
                  );

                  if (fehcaIngresada > fechaActual) {
                    return "La fecha de nacimiento no puede ser mayor a la fecha actual";
                  }

                  return true;
                },
              },
              value: formatearFechaParaForm(alumno.fechaNac, meses),
              setValueAs: (value: string) => formatearFechaParaBD(value, meses),
            })}
          />
        </div>

        <div>
          <Label
            htmlFor="curp"
            label="CURP"
            error={Boolean(errors.curp?.type === "required")}
            className="block text-white text-lg font-normal"
          />
          <Input
            type="text"
            id="curp"
            error={errors.curp}
            className="w-full border border-gray-300 font-bold px-2"
            register={register("curp", {
              required: {
                value: true,
                message: "La CURP es requerida.",
              },
              validate: {
                length: (value) => {
                  if (value.length !== 18) {
                    return "La CURP debe tener 18 caracteres.";
                  }
                },
              },
              onChange: (e) => {
                e.target.value = e.target.value.toUpperCase();
              },
              value: alumno.curp,
              setValueAs: (value: string) => value.trim(),
            })}
          />
        </div>
        <button
          className={cn(
            "bg-disabled text-white rounded px-3 py-2 mt-3 justify-self-end self-center",
            {
              "bg-pink-500 hover:bg-pink-600": isModified,
            }
          )}
          disabled={!isModified}
        >
          Guardar cambios
        </button>
      </form>
    </>
  );
}

export default EditarInformacion;

//Función para formatear la fecha
const formatearFechaParaBD = (fecha: string, meses: Array<string>) => {
  const temp = fecha.split("-");
  const ano = Number(temp[0]) || 1;
  const mes = Number(temp[1]) || 1;
  const dia = Number(temp[2]) || 1;
  const nombreMes = meses[mes - 1].toUpperCase();
  const fds = dia + "/" + nombreMes + "/" + ano;
  return fds;
};

const formatearFechaParaForm = (fecha: string, meses: Array<string>) => {
  const temp = fecha.split("/");
  const dia = temp[0];
  const mes = temp[1];
  const ano = temp[2];
  const numMes = String(meses.indexOf(toTitleCase(mes)) + 1);
  const fds = ano + "-" + numMes.padStart(2, "0") + "-" + dia.padStart(2, "0");

  return fds;
};
