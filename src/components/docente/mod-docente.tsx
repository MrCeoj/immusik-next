import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Docente } from "@/entities/index";

type FormModProps = {
  docente: Docente;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
};

const FormMod = ({ docente, onError, onSuccess }: FormModProps) => {
  const [telefono, setTelefono] = useState(docente.telefono);
  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (docente) {
      setValue("nombre", docente.nombre || "");
      setValue("aPaterno", docente.aPaterno || "");
      setValue("aMaterno", docente.aMaterno || "");
      setValue("curp", docente.curp || "");
      setTelefono(docente.telefono || "");
    }
  }, [docente, setValue]);

  // Función que se ejecuta al enviar el formulario, consume la api para modificar un docente
  const onSubmit = handleSubmit(async (data) => {
    //Como el formulario no contiene id y es necesario para la modificación, se lo asignamos desde props
    data.id = docente.id;
    // Consumir la api para modificar un docente
    const response = await fetch("/api/docente/mod", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Manejo de errores
    const resJSON = await response.json();
    if (response.status === 500) {
      onError(resJSON.error);
    } else {
      onSuccess("Docente modificado");
    }
  });

  return (
    <>
      <div className="relative m-5 p-5 rounded-md bg-gray-300 w-1/2">
        <form onSubmit={onSubmit} className="">
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col">
              <label className="font-bold">Nombre </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre del docente"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre del docente es requerido.",
                  },
                })}
                className="rounded-md p-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold">Apellido Paterno</label>
              <input
                type="text"
                id="aPaterno"
                placeholder="Apellido Paterno"
                {...register("aPaterno", {
                  required: {
                    value: true,
                    message: "El apellido paterno es requerido.",
                  },
                })}
                className="rounded-md p-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold">Apellido Materno</label>
              <input
                type="text"
                id="aMaterno"
                placeholder="Apellido Materno"
                {...register("aMaterno", {
                  required: {
                    value: true,
                    message: "El apellido materno es requerido.",
                  },
                })}
                className="rounded-md p-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold">CURP</label>
              <input
                type="text"
                id="curp"
                placeholder="CURP"
                maxLength={18}
                {...register("curp", {
                  required: {
                    value: true,
                    message: "El CURP es requerido.",
                  },
                  maxLength: {
                    value: 18,
                    message: "El CURP debe tener exactamente 18 caracteres.",
                  },
                  minLength: {
                    value: 18,
                    message: "El CURP debe tener exactamente 18 caracteres.",
                  },
                })}
                className="rounded-md p-1"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-bold">Teléfono</label>
              <input
                type="number"
                id="telefono"
                placeholder="Telefono"
                value={telefono}
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "El teléfono es requerido.",
                  },
                  minLength: {
                    value: 10,
                    message: "El teléfono debe tener 10 dígitos.",
                  },
                })}
                onKeyDown={(e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight" &&
                    e.key !== "Tab"
                  ) {
                    e.preventDefault();
                  }
                }}
                maxLength={10}
                onChange={(e) => {
                  if (e.target.value.length <= 10) {
                    setTelefono(e.target.value);
                  }
                }}
                className="rounded-md p-1"
              />
            </div>
          </div>

          {errors.nombre?.message
            ? (onError(String(errors.nombre.message)), null)
            : null}

          {errors.aPaterno?.message
            ? (onError(String(errors.aPaterno.message)), null)
            : null}
          {errors.aMaterno?.message
            ? (onError(String(errors.aMaterno.message)), null)
            : null}
          {errors.curp?.message
            ? (onError(String(errors.curp.message)), null)
            : null}
          {errors.telefono?.message
            ? (onError(String(errors.telefono.message)), null)
            : null}

          <div className="flex justify-center">
            <button
              className="rounded-md bg-primary px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-300"
              type="submit"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormMod;
