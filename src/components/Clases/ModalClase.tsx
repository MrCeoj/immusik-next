import { useSucursal } from "@/hooks/sucursal";
import { toArrayDiasClase, toStringDiasClase, toTitleCase } from "@/lib/utils";
import { Alumno, Clase, Docente } from "@prisma/client";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { diasHabiles, horasHabiles } from "../../lib/horario";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Label from "../form/Label";
import "react-toastify/dist/ReactToastify.css";
import Input from "../form/Input";
import ConfirmacionEliminarClase from "./ConfirmacionEliminarClase";

export default function ModalClase({
  claseArgs,
  actualizarClases,
  docentes,
}: {
  claseArgs: Clase;
  actualizarClases: any;
  docentes: Docente[] | null;
}) {
  const [clase, setClase] = useState<Clase>(claseArgs);
  // useState para guardar la visibilidad del modal
  const [modalOpen, setModalOpen] = useState(false);
  // useState para guardar los alumnos inscritos a la clase
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  // useState para guardar un mensaje de error ocurrido durante la obtención de los alumnos
  const [errorAlumnos, setErrorAlumnos] = useState(null);
  // se obtiene la sucursal de la clase
  const [sucursal] = useSucursal(clase.idSucursal.toString());
  const [diasClase, setDiasClase] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // se obtienen los días de clase en un array
    setDiasClase(toArrayDiasClase(clase.dias));
  }, [clase.dias]);

  // se obtiene el mensaje en el caso de que no haya docentes disponibles
  // o si no se han cargado los docentes
  const mensajeDocentes = () => {
    if (docentes === null) {
      return "Cargando...";
    } else if (docentes.length === 0) {
      return "No hay docentes disponibles";
    }
    return null;
  };

  const handleMensajeDeEliminacion = () => {
    toast.success("Clase eliminada exitosamente.", { autoClose: 5000 });
  };

  // se obtiene el mensaje en el caso de que no haya alumnos inscritos
  // o si no se han cargado los alumnos
  const mensajeAlumnos = () => {
    if (errorAlumnos) {
      return errorAlumnos;
    }

    if (alumnos.length === 0) {
      return "No hay alumnos inscritos";
    } else {
      return "Cargando...";
    }

    return null;
  };

  // Función que se ejecuta al hacer click en el botón "Ver más"
  // Muestra un modal con la información de la clase y los alumnos inscritos
  const handleVerDetalles = async () => {
    /**
     * Se resetean los valores del formulario para evitar que
     * se guarden los valores de la clase anterior
     */
    reset();
    setClase(claseArgs);
    // se abre el modal primero para dar una experiencia más fluida
    setModalOpen(true);

    // Si no se han obtenido los alumnos se hace una petición a la API para obtenerlos
    if (alumnos.length === 0) {
      const res = await fetch(`/api/clase/${clase.id}/obtenerAlumnos`);
      const data = await res.json();

      data.error ? setErrorAlumnos(data.error) : setAlumnos(data);
    }
  };

  const handleEliminarAlumno = async (idAlumno: number) => {
    const res = await fetch("/api/clase/eliminarAlumno", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idClase: clase.id,
        idAlumno,
      }),
    });

    const data = await res.json();

    if (data?.error) {
      toast.error(data.error);
    } else {
      // Se actualiza la lista de alumnos
      alumnos && setAlumnos(alumnos.filter((alumno) => alumno.id !== idAlumno));
      // Se actualiza la información de la clase
      actualizarClases();
      toast.success("Alumno eliminado correctamente", {
        autoClose: 2000,
      });
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    // Se verifica que la información haya sido modificada
    if (data.idDocente === "") {
      toast.error("Por favor asigna un docente a la clase");
      return;
    }
    if (
      clase.nombre === data.nombre.toUpperCase() &&
      clase.dias === toStringDiasClase(data.dias) &&
      clase.hora === data.hora + ":00" &&
      clase.cupoMax === data.cupoMax &&
      clase.idDocente === data.idDocente
    ) {
      toast.info("No se ha modificado la información de la clase");
      return;
    }

    // Se hace una petición a la API para modificar la clase
    const res = await fetch("/api/clase/modificar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: clase.id,
        idSucursal: clase.idSucursal,
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
      actualizarClases();
      toast.success("Clase modificada correctamente");
    }
  });

  return (
    <>
      <button
        onClick={handleVerDetalles}
        className="col-span-1 underline hover:text-slate-900"
      >
        Ver detalles
      </button>
      <Modal
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        overlayClassName="fixed inset-0 px-3 grid place-items-center bg-black/50 backdrop-blur-sm"
        className="relative bg-secciones bg-opacity-95 p-6 w-full max-w-5xl min-h-min rounded-md text-white"
      >
        <h1 className="font-bold text-4xl mb-3 text-center">
          Detalles de la clase - {toTitleCase(clase.nombre)}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="flex flex-col gap-1">
            <p>
              Sucursal:{" "}
              <span className="font-bold">
                {sucursal && toTitleCase(sucursal.nombre.toString())}
              </span>
            </p>
            <div>
              <Label
                htmlFor="nombre"
                label="Nombre"
                error={Boolean(errors.nombre?.type === "required")}
                className="block"
              />
              <Input
                type="text"
                id="nombre"
                error={errors.nombre}
                className="w-full border text-black border-gray-300 font-bold px-2"
                register={register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre de clase es requerida.",
                  },
                  value: toTitleCase(clase.nombre),
                })}
              />
            </div>
            <div>
              <Label
                label="Días impartidos"
                htmlFor="dias"
                error={Boolean(errors.dias?.type === "required")}
                className="block"
              />
              <div className="grid grid-cols-3">
                {diasHabiles.map((dia) => (
                  <div key={dia}>
                    <Input
                      type="checkbox"
                      id={dia}
                      error={errors.dias}
                      className="mr-1 cursor-pointer "
                      defaultValue={dia}
                      defaultChecked={diasClase.includes(dia)}
                      register={register("dias", {
                        required: {
                          value: true,
                          message: "Debes seleccionar al menos un día de clase",
                        },
                      })}
                    />
                    <Label
                      label={toTitleCase(dia)}
                      className="cursor-pointer"
                      htmlFor={dia}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label
                label="Horario de clase"
                htmlFor="hora"
                error={Boolean(errors.hora?.type === "required")}
                className="block"
              />
              <Input
                type="number"
                id="hora"
                error={errors.hora}
                className="w-full text-black border-gray-300 font-bold px-2 py-1"
                register={register("hora", {
                  required: {
                    value: true,
                    message: "La hora es requerida",
                  },
                  validate: (hora) => {
                    if (hora === horasHabiles.cierre) {
                      return `Tome en cuenta que la clase dura una hora y la sucursal cierra a las ${horasHabiles.cierre}:00 horas`;
                    }
                  },
                  // Se obtiene el horario mínimo y máximo de la sucursal
                  min: {
                    value: horasHabiles.apertura,
                    message: `La hora debe estar dentro del horario de la sucursal (${horasHabiles.apertura}:00 - ${horasHabiles.cierre}:00 horas)`,
                  },
                  max: {
                    value: horasHabiles.cierre - 1,
                    message: `La hora debe estar dentro del horario de la sucursal (${horasHabiles.apertura}:00 - ${horasHabiles.cierre}:00 horas)`,
                  },
                  value: Number(clase.hora.split(":")[0]),
                })}
              />
            </div>
            <div>
              <Label
                label="Cupo máximo"
                htmlFor="cupoMax"
                error={Boolean(errors.cupoMax?.type === "required")}
                className="block"
              />
              <Input
                type="number"
                id="cupoMax"
                error={errors.cupoMax}
                className="w-full border text-black border-gray-300 font-bold rounded px-2 py-1"
                register={register("cupoMax", {
                  required: {
                    value: true,
                    message: "El cupo máximo es requerido",
                  },
                  min: {
                    value: alumnos?.length ?? 0,
                    message:
                      "El cupo máximo debe ser mayor o igual al número de alumnos inscritos",
                  },
                  value: clase.cupoMax,
                })}
              />
            </div>
            <div>
              {mensajeDocentes() ?? (
                <>
                  <label htmlFor="docente" className="block">
                    Docente
                  </label>
                  <select
                    id="docente"
                    className="w-full border text-black border-gray-300 font-bold rounded px-2 py-1"
                    {...register("idDocente", {
                      required: {
                        value: true,
                        message: "El docente de la clase es requerido.",
                      },
                      valueAsNumber: true,
                      value: clase.idDocente ?? "",
                    })}
                  >
                    {clase.idDocente ?? (
                      <option value="">Por favor asigna un docente</option>
                    )}
                    {docentes?.map((docente) => (
                      <option key={docente.id} value={docente.id}>
                        {toTitleCase(
                          docente.nombre +
                            " " +
                            docente.aPaterno +
                            " " +
                            docente.aMaterno
                        )}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center disabled:bg-disabled transition-all duration-75">
              Guardar cambios
            </button>
          </form>
          <div className="flex flex-col justify-between">
            {mensajeAlumnos() ? (
              <p className="flex-grow grid place-items-center">
                {mensajeAlumnos()}
              </p>
            ) : (
              <table className="w-full text-center overflow-hidden">
                <caption className="font-bold text-xl mb-3">
                  Alumnos inscritos
                </caption>
                <thead>
                  <tr className="bg-gray-contrast rounded-lg font-normal">
                    <th className="py-1">Nombre</th>
                    <th className="py-1">Ap. Paterno</th>
                    <th className="py-1">Ap. Materno</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {alumnos?.map((alumno, index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-2">{toTitleCase(alumno.nombre)}</td>
                      <td className="py-2">{toTitleCase(alumno.aPaterno)}</td>
                      <td className="py-2">{toTitleCase(alumno.aMaterno)}</td>
                      <td className="py-2">
                        <button
                          onClick={() => handleEliminarAlumno(alumno.id)}
                          className="bg-rose-600 text-white font-bold w-6 h-6 rounded"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <ConfirmacionEliminarClase
              clase={clase}
              actualizarClases={actualizarClases}
              setModalOpen={setModalOpen}
              handleMensajeDeEliminacion={handleMensajeDeEliminacion}
            />
          </div>
        </div>
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
