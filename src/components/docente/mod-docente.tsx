import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Docente } from "@/entities/index";

const FormMod = (docente: Docente) => {
  // useState para manejar errores
  const [serverError, setServerError] = useState<string | null>(null);
  const [telefono, setTelefono] = useState(docente.telefono); 
  const [success, setSuccess] = useState(false);  // useState para mostrar mensaje de éxito

  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(docente)
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
      setServerError(resJSON.error);
    } else {
      setSuccess(true); 
    }
  });

  return (
    <div className="relative">
      {/*
       * Este div es para mostrar un mensaje de éxito al editar un docente
       * Se muestra cuando success es true, igual, hay que cambiarlo
       */}
      {success && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded shadow">
            <p>Editado exitosamente</p>
          </div>
        </div>
      )}
      <form onSubmit={onSubmit} className="">
        <div className="flex flex-col gap-8">
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
          />
          {errors.nombre && (
            <Error error={errors?.nombre.message?.toString()} />
          )}
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
          />
          {errors.aPaterno && (
            <Error error={errors?.aPaterno.message?.toString()} />
          )}
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
          />
          {errors.aMaterno && (
            <Error error={errors?.aMaterno.message?.toString()} />
          )}
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
          />
          {errors.CURP && <Error error={errors?.CURP.message?.toString()} />}
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
          />
          {errors.telefono && (
            <Error error={errors?.telefono.message?.toString()} />
          )}
        </div>

        {/* Cuidado con este componente, cuando las validaciones de aqui por 
          x motivo no funcionan este muestra las validaciones del servidor 
          La idea es cambiar este componente por otro como un popup
          NO USAR el mismo componente que está hasta abajo, es solo un ejemplo
      */}

        {serverError && <Error error={serverError} />}

        <button className="bg-pink-400" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

/*
 * Componente para mostrar errores en el formulario.
 * Favor de modificarlo porque solo es un text
 * De preferencia muevanlo a la carpeta de components y quitenlo de aqui
 */
const Error = (props: { error?: string }) => {
  return <p className="text-red-500 text-sm z-50">{props.error}</p>;
};

export default FormMod;
