"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

// Componente que contiene el formulario de registro
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
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
      setServerError(resJSON.error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col max-w-72">
        <input
          type="text"
          id="nombre"
          placeholder="Nombre de usuario"
          className="text-gray-800 px-2 py-1 rounded-md"
          {...register("nombre", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido.",
            },
            minLength: {
              value: 6,
              message: "Mínimo 6 caracteres.",
            },
          })}
        />
        {errors.nombre && <Error error={errors?.nombre.message?.toString()} />}
      </div>
      <div className="flex flex-col max-w-72">
        <input
          type="email"
          id="correo"
          placeholder="Correo electrónico"
          className="text-gray-800 px-2 py-1 rounded-md"
          {...register("correo", {
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
        {errors.correo && <Error error={errors?.correo.message?.toString()} />}
      </div>
      <div className="flex flex-col max-w-72">
        <input
          type="password"
          id="contrasena"
          placeholder="Contraseña"
          className="text-gray-800 px-2 py-1 rounded-md"
          {...register("contrasena", {
            required: {
              value: true,
              message: "La contraseña es requerida.",
            },
            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres.",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message:
                "La contraseña debe tener al menos una mayúscula, una minúscula y un número.",
            },
          })}
        />
        {errors.contrasena && (
          <Error error={errors?.contrasena.message?.toString()} />
        )}
      </div>
      <div className="flex flex-col max-w-72">
        <input
          type="password"
          id="contrasenaMaestra"
          placeholder="Contraseña maestra"
          className="text-gray-800 px-2 py-1 rounded-md"
          {...register("contrasenaMaestra", {
            required: {
              value: true,
              message: "La contraseña maestra es requerida.",
            },
          })}
        />
        {errors.contrasenaMaestra && (
          <Error error={errors?.contrasenaMaestra.message?.toString()} />
        )}
      </div>
      {serverError && <Error error={serverError} />}
      <button className="rounded-md bg-primary px-4 py-2 font-bold">
        Aceptar
      </button>
    </form>
  );
}

// Componente que muestra un mensaje de error
function Error(props: { error?: string }) {
  return <p className="text-red-600 text-sm">{props.error}</p>;
}
