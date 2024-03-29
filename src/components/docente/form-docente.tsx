import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Label from "../form/Label";
import Input from "../form/Input";

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
          telefono: data.telefono,
          estado: "INACTIVO",
        },
      }),
    });
    const resJSON = await response.json();
    if (response.status === 500) setServerError(resJSON.error);
  });

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 bg-gray-300 p-8 rounded-md"
      >
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="nombre"
            label="Nombre del docente"
            error={Boolean(errors.nombre?.type === "required")}
          />
          <Input
            type="text"
            id="nombre"
            placeholder="Nombre del docente"
            error={errors.nombre}
            register={register("nombre", {
              required: {
                value: true,
                message: "El nombre del docente es requerido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="aPaterno"
            label="Apellido Paterno"
            error={Boolean(errors.aPaterno?.type === "required")}
          />
          <Input
            type="text"
            id="aPaterno"
            placeholder="Apellido Paterno"
            error={errors.aPaterno}
            register={register("aPaterno", {
              required: {
                value: true,
                message: "El apellido paterno es requerido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="aMaterno"
            label="Apellido Materno"
            error={Boolean(errors.aMaterno?.type === "required")}
          />
          <Input
            type="text"
            id="aMaterno"
            placeholder="Apellido Materno"
            error={errors.aMaterno}
            register={register("aMaterno", {
              required: {
                value: true,
                message: "El apellido materno es requerido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="telefono"
            label="Teléfono"
            error={Boolean(errors.telefono?.type === "required")}
          />
          <input
            className="text-gray-800 px-2 py-1 pr-6 rounded-md border-2"
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
        </div>

        {/* Cuidado con este componente, cuando las validaciones de aqui por 
            x motivo no funcionan este muestra las validaciones del servidor 
            La idea es cambiar este componente por otro como un popup
            NO USAR el mismo componente que está hasta abajo, es solo un ejemplo
        */}

        {serverError && <Error error={serverError} />}

        <button
          className="rounded-md bg-primary px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-300"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </>
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
