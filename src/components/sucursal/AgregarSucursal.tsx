import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgregarSucursal = ({
  setAgregar,
  handleCambio,
}: {
  setAgregar: any;
  handleCambio: any;
}) => {
  //useStates que manejan los datos de la sucursal
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleCancelar = () => {
    setAgregar(false);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCancelar();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  /*cuando se envíe el formulario se haran validaciones para que no haya 
  campos vacíos*/
  const handleSubmit = () => {
    let nombreFor = nombre.trim().toUpperCase();
    let direccionFor = direccion.trim().toUpperCase();

    if (nombreFor === "" || direccionFor === "" || contrasena === "") {
      toast.error("No deje espacios en blanco.");
      return; //Se corta el flujo
    }

    let data = {
      nombre: nombreFor,
      direccion: direccionFor,
      contrasena: contrasena,
    };

    /*Si no hay errores se sigue con el flujo haciendo petición fecth POST
    para crear una nueva sucursal, enviando nombre y dirección*/
    fetch("api/Sucursal", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    }).then((response) => {
      //Se obtiene la respuesta
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se registró la sucursal exitosamente.") {
            handleCambio();
            toast.success("Se registró la sucursal exitosamente.");
            setAgregar(false);
          } else {
            toast.error(data.message);
          }
        });
      } else {
        toast.error("Hubo un problema al agregar la sucursal.");
      }
    });
  };

  /*Cuerpo de la página, un form donde se ingresan los datos, al presionar
  el botón de agregar se manda llamar la función handleSubmit en este mismo
  archivo.*/
  return (
    <>
      <div className="absolute backdrop-blur-md w-screen h-screen z-20 top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-secciones bg-opacity-95 p-10 flex flex-col rounded-lg shadow-lg items-center justify-center w-[1000px] h-[450px]">
          <button
            onClick={handleCancelar}
            className="absolute text-white font-bold top-6 right-8"
          >
            X
          </button>
          <h1 className="font-bold text-3xl mb-3 text-white">Agregar</h1>
          <form>
            <div className="mt-2 flex flex-col w-[800px] relative">
              <label className="text-2xl mr-7 text-white">Nombre</label>
              <input
                className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                placeholder="Nombre de la sucursal"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mt-2 flex flex-col w-[800px] relative">
              <label className="text-2xl mr-7 text-white">Direccion</label>
              <input
                className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                placeholder="Dirección de la sucursal"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="mt-2 flex flex-col w-[800px] relative">
              <label className="text-2xl mr-7 text-white">
                Contraseña Maestra
              </label>
              <input
                type="password"
                className="text-2xl bg-gray-100 py-1 px-2 rounded-lg font-medium"
                placeholder="Contraseña Maestra"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
          </form>
          <div className="flex w-full mt-12 justify-between pl-16 pr-12">
            <button
              className="bg-gray-500 text-white py-1 px-10 rounded-lg text-lg shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(107,_114,_128,_0.25)]"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button
              className="bg-pink-focus text-white py-1 px-10 rounded-lg text-lg mr-4 shadow-md transition-all duration-300 hover:shadow-[0px_0px_20px_10px_rgba(251,_3,_143,_0.25)]"
              onClick={handleSubmit}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarSucursal;
