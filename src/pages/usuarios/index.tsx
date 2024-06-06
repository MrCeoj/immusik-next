import React, { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "@/components/Navbar";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function Usuarios() {
  const router = useRouter();

  const [validado, setValidado] = useState(false);
  const [contrasena, setContrasena] = useState("");
  const [cargando, setCargando] = useState(true);
  const [usuarios, setUsuarios] = useState([]);

  const handleCancelar = () => {
    router.push("/inicio");
  };

  const fetchUsuarios = () => {
    fetch("/api/usuario/obtener").then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          setUsuarios(data);
          setCargando(false);
        });
      } else {
        toast.error("Error al obtener los usuarios.");
      }
    });
  };

  const handleAceptar = () => {
    if (contrasena === "") {
      toast.error("Ingrese la contraseña maestra");
      return;
    }

    fetch("/api/masterKey/route").then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          const masterKey = data;
          if (contrasena === masterKey.value) {
            fetchUsuarios();
            setValidado(true);
          } else {
            toast.error("Contraseña maestra incorrecta.");
          }
        });
      } else {
        toast.error("Error al validar la contraseña maestra.");
      }
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        {validado ? (
          <>
            <div className="flex w-full items-end mb-1">
              <h1 className="text-5xl font-semibold mr-20">Usuarios</h1>

              <div className="flex h-3/4 items-center">
                <form className="h-full relative flex items-center mr-5">
                  <input
                    className="h-4/5 bg-disabled bg-opacity-50 rounded-sm shadow-md pl-10 text-md text-white"
                    placeholder=""
                  ></input>
                  <MagnifyingGlassIcon
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                    width={20}
                    height={20}
                  />
                </form>
              </div>
            </div>
            <div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-5 mt-3 gap-5 px-5">
              <div className="text-2xl font-bold col-span-2 text-left ">
                Nombre de usuario
              </div>
              <div className="text-2xl font-bold col-span-2 text-left">
                Correo
              </div>
              <div className="text-2xl font-bold col-span-1 text-left ">
                Opciones
              </div>
            </div>
            {cargando ? (
              <div className="overflow-y-auto w-full h-[55%] flex items-center justify-center text-lg">
                Cargando...
              </div>
            ) : (
              <div className="overflow-y-auto w-full h-[55%]">
                {usuarios.map((us: any) => (
                  <div>
                    {us.nombre} {us.correo}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-xl p-5 text-black flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold">
              Para gestionar los usuarios ingrese la contraseña maestra:
            </h1>
            <Input
              size="lg"
              className="w-[70%]"
              placeholder="Contraseña Maestra"
              isRequired
              type="password"
              value={contrasena}
              onValueChange={setContrasena}
            />
            <div className="flex flex-row gap-2">
              {" "}
              <button
                onClick={handleAceptar}
                className="rounded-md bg-primary px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-pink-700"
              >
                Aceptar
              </button>
              <button
                onClick={handleCancelar}
                className="rounded-md bg-zinc-400 px-4 py-2 mt-4 font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-zinc-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Usuarios;
