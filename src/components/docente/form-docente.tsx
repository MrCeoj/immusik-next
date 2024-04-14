import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import router from "next/router";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import "react-toastify/dist/ReactToastify.css";

// Formulario para registrar un docente
function FormDocente({ 
  setCambio, 
  cambio,
  setModalOpen, 
  }: {
    setCambio: React.Dispatch<React.SetStateAction<boolean>>, 
    cambio: boolean,
    setModalOpen : any,
}) {
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
          curp: data.curp,
          estado: "INACTIVO",
        },
      }),
    });
    const resJSON = await response.json();
    if (response.status === 500) {
      setServerError(resJSON.error);
    } else {
      if (cambio) {
          setCambio(false);
        } else {
          setCambio(true);
        }

        toast.success("Docente registrado", {
          className: "text-white px-6 py-4 border-0 rounded-md bg-green-500",
          bodyClassName: "font-semibold text-sm text-green-500",
          autoClose: 2000,
          draggable: false,
          onClose: () => setModalOpen(false),
        });
    }
  });

  return (
    <>
      <ToastContainer/>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 bg-transparent p-8 rounded-md"
      >
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="nombre"
            label="Nombre del docente"
            error={Boolean(errors.nombre?.type === "required")}
            className="text-lg "
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
            className="text-lg "
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
            className="text-lg "
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
            htmlFor="curp"
            label="CURP"
            error={Boolean(errors.curp?.type === "required")}
            className="text-lg"
          />
          <Input
            type="text"
            id="curp"
            placeholder="CURP"
            error={errors.curp}
            register={register("curp", {
              required: {
                value: true,
                message: "La CURP es requerida.",
              },
              minLength: {
                value: 18,
                message: "La CURP debe tener 18 caracteres.",
              },
              maxLength: {
                value: 18,
                message: "La CURP debe tener 18 caracteres.",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Formato de CURP no válido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="telefono"
            label="Teléfono"
            error={Boolean(errors.telefono?.type === "required")}
            className="text-lg font-normal"
          />
          <input
            className="text-black px-2 py-1 pr-6 rounded-md border-2 font-bold"
            type="text"
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

        <div className="flex justify-center">
          <button
            className="rounded-md bg-primary w-2/5 px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)]"
            type="submit"
          >
            Dar de alta
          </button>
        </div>
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
