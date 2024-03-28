import { useForm } from "react-hook-form";
import { useState } from "react";

// Formulario para registrar un docente
const FormDocente = () => {
  // useState para manejar errores
  const [serverError, setServerError] = useState<string | null>(null);
  const [telefono, setTelefono] = useState("");

  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función que se ejecuta al enviar el formulario, consume la api para registrar un docente
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const response = await fetch("/api/docente/registerDocente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docente: {
          nombre: data.nombre,
          aPaterno: data.aPaterno,
          aMaterno: data.aMaterno,
          curp: data.curp,
          telefono: data.telefono,
          estado: "INACTIVO",
        },
      }),
    });
    const resJSON = await response.json();
    if (response.status === 500) setServerError(resJSON.error);
  });

  return (
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
        {errors.nombre && <Error error={errors?.nombre.message?.toString()} />}
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

export default FormDocente;
