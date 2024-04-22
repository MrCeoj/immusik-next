import React, { useState } from "react";
import ConfirmacionEliminar from "./ConfirmacionEliminar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toTitleCase } from "@/lib/utils";
/*
 * @param sucursal: la sucursal que se va a editar
 * @param setEditar: cambia el valor de Editar, esto para desaparecer este mismo componente
 * @param cambio: si su valor cambia, el useEffect en sucursales.tsx se actualiza y muestra
 * los cambios que se hicieron
 * @param setCambio: cambia el valor de cambio.
 *  */
const EditarSucursal = ({
  sucursal,
  setEditar,
  cambio,
  setCambio,
}: {
  sucursal: any;
  setEditar: any;
  cambio: any;
  setCambio: any;
}) => {
  //useStates que cambian el valor de los campos que se registran por parte del usuario

  let nombreFor = toTitleCase(sucursal.nombre);
  let direccionFor = toTitleCase(sucursal.direccion);

  const [nombre, setNombre] = useState(nombreFor);
  const [direccion, setDireccion] = useState(direccionFor);
  const [contrasena, setContrasena] = useState("");

  //useState para mostrar o no la pantalla de error
  const [eliminar, setEliminar] = useState(false);

  //Cambia el valor de editar a false, ocultando este componente.
  const handleCancelar = () => {
    setEditar(false);
  };

  //Si hay un cambio en una sucursal se ejecuta esto, para cambiar el valor de cambio, para
  //que se actualice sucursales.tsx
  const toggleCambio = () => {
    if (cambio) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  };

  const handleEliminar = () => {
    setEliminar(true);
  };

  //Al presionar editar se ejecuta la función
  const handleEditar = () => {
    let id = sucursal.id; //Obtención de id

    nombreFor = nombre.trim().toUpperCase();
    direccionFor = direccion.trim().toUpperCase();

    //Validación de no dejar espacios en blanco
    if (nombreFor === "" || direccionFor === "" || contrasena === "") {
      toast.error("No deje espacios en blanco.");
      return; //Se corta el flujo
    }

    let data = {
      id: id,
      nombre: nombreFor,
      direccion: direccionFor,
      contrasena: contrasena,
    };

    //Continua el flujo
    //Petición fetch tipo PATCH para actualizar datos.
    fetch("api/Sucursal/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //Se mandan id, nombre y dirección.
        data,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se ha modificado la sucursal correctamente.") {
            toast.success(data.message);
            setEditar(false);
            toggleCambio();
          } else {
            toast.error(data.message);
          }
        }); //Si hay una respuesta valida se regresa en formato json.
      } else {
        toast.error("Hubo un problema al modificar la sucursal.");
      }
    });
  };

  /*CONTENIDO: Form donde se tiene como placeholder la información actual de la sucursal, donde se le
  pide al usuario ingresar la información nueva.*/
  return (
    <>
      {eliminar && (
        <ConfirmacionEliminar
          sucursal={sucursal}
          setEliminar={setEliminar}
          cambio={cambio}
          setCambio={setCambio}
          setEditar={setEditar}
        />
      )}
      <div className="h-screen w-screen absolute backdrop-blur-md top-0 left-0 flex justify-center items-center z-100">
        <div className="bg-secciones bg-opacity-95 p-7 pt-10 flex flex-col items-center w-[1000px] h-300 justify-center rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-7 text-white mx-64">
            SUCURSAL {sucursal.nombre}
          </h1>
          <div>
            <form>
              <div className="mt-2 flex flex-col w-[800px] relative">
                <label className="text-2xl mr-7 text-white">Nombre</label>
                <input
                  placeholder="Nombre"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                ></input>
              </div>
              <div className="mt-5 flex flex-col w-[800px] relative">
                <label className="text-2xl mr-7 text-white">Dirección</label>
                <input
                  placeholder="Dirección"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </div>
              <div className="mt-5 flex flex-col w-[800px] relative">
                <label className="text-2xl mr-7 text-white">
                  Contraseña Maestra
                </label>
                <input
                  type="password"
                  placeholder="Contraseña Maestra"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex w-full mt-12 justify-between px-10 mb-5">
            <button
              onClick={handleCancelar}
              className="bg-gray-500 text-white py-1 px-10 rounded-lg text-lg shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(107,_114,_128,_0.25)]"
            >
              Cancelar
            </button>
            <div>
              <button
                onClick={handleEditar}
                className="bg-pink-focus text-white py-1 px-10 rounded-lg text-lg mr-4 shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)]"
              >
                Editar
              </button>
              <button
                onClick={handleEliminar}
                className="bg-red-600 text-white py-1 px-10 rounded-lg text-lg shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(220,_38,_38,_0.25)]"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarSucursal;
