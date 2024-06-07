import React, { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "@/components/Navbar";
import { Input, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import editIcon from "@/img/settingIcon.png";
import deleteIcon from "@/img/deleteIcon.png";
import EliminarModal from "@/components/Usuario/eliminarModal";
import EditarModal from "@/components/Usuario/editarModal";
import { signIn, useSession } from "next-auth/react";

function Usuarios() {
  //Router para redirigir
  const router = useRouter();

  //Validado verifica que la contraseña maestra sea correcta, esto para mostrarle la informacion al user.
  const [validado, setValidado] = useState(false);

  //Aqui se guarda la contraseña maestra
  const [contrasena, setContrasena] = useState("");

  //Estado de cargando mientras se obtienen los usuarios
  const [cargando, setCargando] = useState(true);

  //Usuarios
  const [usuarios, setUsuarios] = useState([]);

  //Usuario especifico del que se va a consultar, eliminar o editar
  const [usuario, setUsuario] = useState();

  //Session y status para manejar y saber si hay un usuario con sesion activa y válida
  const { data: session, status } = useSession();

  //Cargando si todavía no se valida si hay un usuario
  const [cargandoLogin, setCargandoLogin] = useState(true);
  let usuarioLoggeado: any; //usuario que haya hecho login
  const [idLoggeada, setIdLoggeada] = useState(-1); //id del usuario loggeado

  //Estados para modal de eliminación
  const {
    isOpen: isEliminarOpen,
    onOpen: onEliminarOpen,
    onOpenChange: onEliminarOpenChange,
  } = useDisclosure();

  //Estados para modal de edición
  const {
    isOpen: isEditarOpen,
    onOpen: onEditarOpen,
    onOpenChange: onEditarOpenChange,
  } = useDisclosure();

  //Regresa a inicio
  const handleCancelar = () => {
    router.push("/inicio");
  };

  useEffect(() => {
    if (status === "loading") {
      setCargando(true);
      return;
    }

    if (!session) {
      signIn();
    } else {
      setIdLoggeada(session?.user?.id);
      setCargando(false);
    }
  }, [status, session]);

  //Función que consigue todos los usuarios de la base de datos
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

  //manda a la pagina de registro para registrar un nuevo usuario
  const handleRegistrar = () => {
    router.push("/registro");
  };

  //Al presionar aceptar se verifica la contraseña maestra
  const handleAceptar = () => {
    if (contrasena === "") {
      //Se indica error si no hay contraseña maestra
      toast.error("Ingrese la contraseña maestra");
      return;
    }

    //Se consigue la contraseña maestra
    fetch("/api/masterKey/route").then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          const masterKey = data;
          //Si la contraseña maestra es correcta se consiguen los usuarios y se cambia el estado de validado a true
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

  //Eliminar toma el usuario seleccionado y activa el modal de eliminar
  const handleEliminar = (us: any) => {
    setUsuario(us);
    onEliminarOpen();
  };

  //Editar toma el usuario seleccionado y activa el modal de editar
  const handleEditar = (us: any) => {
    setUsuario(us);
    onEditarOpen();
  };

  const comparar = (id: any) => {
    const idLoggeadaNumber: number = parseInt(idLoggeada);
    if (id === idLoggeadaNumber) return true;
    return false;
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      {usuario && (
        <EliminarModal
          isOpen={isEliminarOpen}
          onOpenChange={onEliminarOpenChange}
          usuario={usuario}
          fetchUsuarios={fetchUsuarios}
        />
      )}
      {usuario && (
        <EditarModal
          isOpen={isEditarOpen}
          onOpenChange={onEditarOpenChange}
          usuario={usuario}
          fetchUsuarios={fetchUsuarios}
        />
      )}
      <div className="h-screen bg-fondo w-screen flex justify-center items-center flex-col px-20 pt-10 text-white">
        {cargando ? (
          <div>Cargando...</div>
        ) : (
          <>
            {session ? (
              <>
                {validado ? (
                  <>
                    <div className="flex w-full items-end mb-1">
                      <h1 className="text-5xl font-semibold mr-20">Usuarios</h1>

                      <div className="flex h-3/4 items-center">
                        <button
                          className="bg-pink-focus px-4 h-full text-md rounded-md font-semibold hover:shadow-md hover:shadow-pink-accent hover:-translate-y-1 transition-all duration-25 ease-out"
                          onClick={handleRegistrar}
                        >
                          <span>Registrar Usuario</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-neutral-400 py-2 rounded-lg bg-opacity-40 grid grid-cols-5 mt-3 gap-5 pl-4">
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
                      <div className="overflow-y-auto w-full h-[55%] flex flex-col">
                        {usuarios.map((us: any) => (
                          <div className="grid grid-cols-5 mt-4 text-lg bg-gray-100 bg-opacity-50 py-2 rounded-lg font-bold pl-4 gap-5 items-center">
                            <div className="text-xl font-bold col-span-2 text-left ">
                              {us.nombre}
                            </div>
                            <div className="text-xl font-bold col-span-2 text-left">
                              {us.correo}
                            </div>
                            <div className="text-xl font-bold col-span-1 text-left flex flex-row gap-3">
                              <button
                                onClick={() => handleEditar(us)}
                                className="bg-zinc-500 p-1 rounded-md flex items-center justify-center hover:bg-zinc-600"
                              >
                                <Image
                                  className="w-8"
                                  src={editIcon}
                                  alt="Gestionar"
                                  title="Gestionar"
                                />
                              </button>
                              {comparar(us.id) ? (
                                <button
                                  onClick={() => handleEliminar(us)}
                                  className="bg-gray-300 p-1 rounded-md flex items-center justify-center"
                                  disabled
                                >
                                  <Image
                                    className="w-8"
                                    src={deleteIcon}
                                    alt="No puede eliminar a su propio usuario."
                                    title="No puede eliminar a su propio usuario."
                                  />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEliminar(us)}
                                  className="bg-red-500 p-1 rounded-md flex items-center justify-center hover:bg-red-600"
                                >
                                  <Image
                                    className="w-8"
                                    src={deleteIcon}
                                    alt="Eliminar"
                                    title="Eliminar"
                                  />
                                </button>
                              )}
                            </div>
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
              </>
            ) : (
              <div>Cargando...</div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Usuarios;
