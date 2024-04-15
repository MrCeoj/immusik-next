import { Clase, Docente } from "@prisma/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toTitleCase } from "@/lib/utils";
import { toast } from "react-toastify";
import Label from "../form/Label";
import Input from "../form/Input";
import Modal from "react-modal";
import TablaClases from "@/components/docente/TablaClases";
import SelectorEstado from "@/components/docente/SelectorEstado";
import "react-toastify/dist/ReactToastify.css";

export default function ModalDocente({
  docenteArgs,
  actualizarDocente,
}: {
  docenteArgs: Docente;
  actualizarDocente: any;
}) {
  // useState para guardar la visibilidad del modal
  const [modalOpen, setModalOpen] = useState(false);

  // useState para guardar si el formulario ha sido modificado
  const [isModified, setIsModified] = useState(false);

  // useState para guardar las propiedades del docente para manipular componentes
  const [docente, setDocente] = useState<Docente>(docenteArgs);
  const [clases, setClases] = useState<Clase[] | null>(null);
  const [estado, setEstado] = useState("");

  // useState para guardar el estado de carga de las clases
  const [isLoading, setIsLoading] = useState(false);

  // useState para guardar el mensaje de error de las clases
  const [errorClases, setErrorClases] = useState(null);



  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // Cargar las clases del docente cuando el componente se monta
  useEffect(() => {
    loadClases();
    estadoLogica(docente.estado, clases);
  }, [docente.id]);


  // Actualizar el estado del docente dependiendo de las clases que imparte
  useEffect(() => {
    estadoLogica(docente.estado, clases);
  }, [clases]);


  // Verificar si el formulario ha sido modificado
  useEffect(() => {
    const initialFormState = {
      nombre: toTitleCase(docente.nombre),
      aPaterno: toTitleCase(docente.aPaterno),
      aMaterno: toTitleCase(docente.aMaterno),
      telefono: toTitleCase(docente.telefono),
      curp: toTitleCase(docente.curp).toUpperCase(),
    };
    watch((value) => {
      setIsModified(JSON.stringify(value) !== JSON.stringify(initialFormState));
    });
  }, [watch]);


  // Mensaje que se muestra en la tabla de clases
  const mensajeClase = () => {
    if (errorClases) {
      return errorClases;
    }

    if (isLoading) {
      return "Cargando...";
    } else if (clases === null || clases.length === 0) {
      return "No imparte ninguna clase";
    }
    return null;
  };


  // Función para abrir el modal y cargar la información del docente
  const handleVerDetalles = async () => {
    // Se resetea el formulario
    reset({
      nombre: toTitleCase(docente.nombre),
      aPaterno: toTitleCase(docente.aPaterno),
      aMaterno: toTitleCase(docente.aMaterno),
      telefono: toTitleCase(docente.telefono),
      curp: toTitleCase(docente.curp).toUpperCase(),
    });
    // se abre el modal primero para dar una experiencia más fluida
    setModalOpen(true);
    setDocente(docenteArgs);
  };

  // Función para cargar las clases del docente
  const loadClases = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/docente/${docente.id}/clasesDocente`);
    const data = await res.json();
    data.error ? setErrorClases(data.error) : setClases(data);
    setIsLoading(false);
  };

  // Función para actualizar el estado del docente dependiendo del estado anterior y las clases que imparte
  const estadoLogica = (estado: string, clases: Clase[] | null) => {
    if(estado === "VETADO") {
      setEstado("VETADO");
      return;
    }
    if (estado === "ACTIVO" && clases && clases.length > 0) {
      setEstado("ACTIVO");
    }
    if (!clases || clases.length === 0) {
      setEstado("INACTIVO");
    }
  };

  // Función para cambiar el estado del docente
  const handleEstadoChange = (newEstado: string) => {
    setEstado(newEstado);
    estadoLogica(newEstado, clases);
  }

  // Función para enviar la información del formulario
  const onSubmit = handleSubmit(async (data) => {
    // Se verifica que la información haya sido modificada
    if (
      docente.nombre === data.nombre.toUpperCase() &&
      docente.aPaterno === data.nombre.toUpperCase() &&
      docente.aMaterno === data.nombre.toUpperCase() &&
      docente.telefono === data.telefono.toUpperCase() &&
      docente.curp === data.curp.toUpperCase()
    ) {
      return;
    }

    // Se envía la información del formulario
    const res = await fetch("/api/docente/modificar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: docente.id,
        ...data,
      }),
    });

    const dataRes = await res.json();

    // Si hay un error, se muestra un toast con el mensaje de error
    if (dataRes?.error) {
      toast.error(dataRes.error);
    }
    // Si la clase se modificó correctamente, se muestra un toast con un mensaje de éxito
    else {
      // Actualiza la información de la clase
      actualizarDocente();
      setIsModified(false);
      toast.success("Docente actualizado correctamente");
    }
  });

  return (
    <>
      <button onClick={handleVerDetalles} className="col-span-1 underline">
        Ver detalles
      </button>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
        className="relative bg-customGray p-6 w-full max-w-5xl min-h-min rounded"
      >
        <h1 className="font-bold text-4xl mb-3 text-center text-white">
          Detalles de la clase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-1 bg-secciones"
          >
            <div>
              <Label
                htmlFor="nombre"
                label="Nombre"
                error={Boolean(errors.nombre?.type === "required")}
                className="block text-white text-lg"
              />
              <Input
                type="text"
                id="nombre"
                error={errors.nombre}
                className="w-full border border-gray-300 font-bold px-2"
                register={register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre de clase es requerida.",
                  },
                  value: toTitleCase(docente.nombre),
                })}
              />
            </div>

            <div>
              <Label
                htmlFor="aPaterno"
                label="Apellido Paterno"
                error={Boolean(errors.aPaterno?.type === "required")}
                className="block text-white text-lg"
              />
              <Input
                type="text"
                id="aPaterno"
                error={errors.aPaterno}
                className="w-full border border-gray-300 font-bold px-2"
                register={register("aPaterno", {
                  required: {
                    value: true,
                    message: "El apellido es requerido.",
                  },
                  value: toTitleCase(docente.aPaterno),
                })}
              />
            </div>

            <div>
              <Label
                htmlFor="aMaterno"
                label="Apellido Materno"
                error={Boolean(errors.aMaterno?.type === "required")}
                className="block text-white text-lg"
              />
              <Input
                type="text"
                id="aMaterno"
                error={errors.aMaterno}
                className="w-full border border-gray-300 font-bold px-2"
                register={register("aMaterno", {
                  required: {
                    value: true,
                    message: "El apellido es requerido.",
                  },
                  value: toTitleCase(docente.aMaterno),
                })}
              />
            </div>

            <div>
              <Label
                htmlFor="telefono"
                label="Contacto"
                error={Boolean(errors.telefono?.type === "required")}
                className="block text-white text-lg"
              />
              <Input
                type="text"
                id="telefono"
                error={errors.telefono}
                className="w-full border border-gray-300 font-bold px-2"
                register={register("telefono", {
                  required: {
                    value: true,
                    message: "El Contacto es requerido.",
                  },
                  value: toTitleCase(docente.telefono),
                })}
              />
            </div>

            <div>
              <Label
                htmlFor="curp"
                label="CURP"
                error={Boolean(errors.curp?.type === "required")}
                className="block text-white text-lg"
              />
              <Input
                type="text"
                id="curp"
                error={errors.curp}
                className="w-full border border-gray-300 font-bold px-2"
                register={register("curp", {
                  required: {
                    value: true,
                    message: "El CURP es requerido.",
                  },
                  value: toTitleCase(docente.curp).toUpperCase(),
                })}
              />
            </div>

            <button
              className={
                isModified
                  ? "bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center"
                  : "bg-disabled text-white rounded px-3 py-2 mt-3 justify-self-end self-center"
              }
              disabled={!isModified}
            >
              Guardar cambios
            </button>
          </form>
          <div className="flex flex-col justify-between h-full w-full items-center">
            <TablaClases
              mensajeClase={mensajeClase}
              clases={clases}
              setClases={setClases}
              docente={docente}
              actualizarDocente={actualizarDocente}
            />
            <SelectorEstado
              estado={estado}
              id={docente.id}
              actualizarDocente={actualizarDocente}
              setClases={setClases}
              handleEstadoChange={handleEstadoChange}
            />
          </div>
        </div>
        <button
          onClick={() => setModalOpen(false)}
          className="absolute text-white top-4 right-4 font-bold rounded hover:bg-black/10 w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
      </Modal>
    </>
  );
}
