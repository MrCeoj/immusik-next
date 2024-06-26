"use client";

import { useForm } from "react-hook-form";
import Label from "./form/Label";
import Input from "./form/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

// Componente que contiene el formulario de registro
export default function FormRegistroUsuario() {
  // useForm para manejar los inputs del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/usuario/registrar", {
      method: "POST",
      body: JSON.stringify({
        usuario: {
          nombre: data.nombre,
          correo: data.correo,
          contrasena: data.contrasena,
        },
        contrasenaMaestra: data.contrasenaMaestra,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJSON = await res.json();

    if (res.status === 500) {
      toast.error(resJSON.error, { toastId: resJSON.error });
    } else {
      toast.success(resJSON.message, { 
        toastId: resJSON.message,
        onClose: () => router.push("/login") 
      });
    }
  });

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 bg-secciones p-8 rounded-md text-white"
      >
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="nombre"
            label="Nombre de usuario"
            error={Boolean(errors.nombre?.type === "required")}
          />
          <Input
            className="border-none bg-zinc-100 font-normal"
            type="text"
            id="nombre"
            placeholder="Nombre de usuario"
            error={errors.nombre}
            register={register("nombre", {
              required: {
                value: true,
                message: "El nombre de usuario es requerido.",
              },
              minLength: {
                value: 6,
                message: "Nombre de usuario debe tener mínimo 6 caracteres.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="correo"
            label="Correo Electrónico"
            error={Boolean(errors.correo?.type === "required")}
          />
          <Input
            type="email"
            id="correo"
            className="border-none bg-zinc-100 font-normal"
            placeholder="Correo electrónico"
            error={errors.correo}
            register={register("correo", {
              required: {
                value: true,
                message: "El correo electrónico es requerido.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "El correo electrónico no es válido.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="contrasena"
            label="Contraseña"
            error={Boolean(errors.contrasena?.type === "required")}
          />
          <Input
            className="border-none bg-zinc-100 font-normal"
            type="password"
            id="contrasena"
            placeholder="Contraseña"
            error={errors.contrasena}
            register={register("contrasena", {
              required: {
                value: true,
                message: "La contraseña es requerida.",
              },
              minLength: {
                value: 8,
                message: "Contraseña debe tener mínimo 8 caracteres.",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message:
                  "La contraseña debe tener al menos una mayúscula, una minúscula y un número.",
              },
            })}
          />
        </div>
        <div className="flex flex-col max-w-82 min-w-72 relative">
          <Label
            htmlFor="contrasenaMaestra"
            label="Contraseña maestra"
            error={Boolean(errors.contrasenaMaestra?.type === "required")}
          />
          <Input
            className="border-none bg-zinc-100 font-normal"
            type="password"
            id="contrasenaMaestra"
            placeholder="Contraseña maestra"
            error={errors.contrasenaMaestra}
            register={register("contrasenaMaestra", {
              required: {
                value: true,
                message: "La contraseña maestra es requerida.",
              },
            })}
          />
        </div>
        <div className="flex justify-center">
          <button className="ml-1 text-lg bg-pink-600 py-1 px-5 rounded-md text-white hover:bg-pink-700 active:bg-pink-800">
            Aceptar
          </button>
        </div>
      </form>
    </>
  );
}
