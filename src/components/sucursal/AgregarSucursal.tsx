import React, { useState } from "react";
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

  /*cuando se envíe el formulario se haran validaciones para que no haya 
  campos vacíos*/
  const handleSubmit = () => {
    if (nombre === "" || direccion === "") {
      toast.error("No deje espacios en blanco.");
      return; //Se corta el flujo
    }

    /*Si no hay errores se sigue con el flujo haciendo petición fecth POST
    para crear una nueva sucursal, enviando nombre y dirección*/
    fetch("api/Sucursal", {
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre, //Se envían como cuerpo el nombre y dirección de la nueva sucursal
        direccion,
        contrasena,
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
      <div className="absolute w-screen h-screen z-20 top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-10 flex flex-col rounded-lg shadow-lg items-center justify-center">
          <h1 className="font-bold text-3xl mb-3">Agregar</h1>
          <form>
            <div className="text-lg">
              <label className="py-1">Nombre</label>
              <input
                className="mb-3 bg-gray-100 p-2 ml-2 rounded-md"
                placeholder="Nombre de la sucursal"
                value={nombre}
                onChange={(e) => setNombre(e.target.value.toUpperCase())}
              />
            </div>
            <div className="text-lg">
              <label className="py-1">Direccion</label>
              <input
                className="mb-3 bg-gray-100 p-2 ml-2 rounded-md"
                placeholder="Dirección de la sucursal"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value.toUpperCase())}
              />
            </div>
            <div className="text-lg">
              <label className="py-1">Contraseña Maestra</label>
              <input
                type="password"
                className="mb-3 bg-gray-100 p-2 ml-2 rounded-md"
                placeholder="Contraseña Maestra"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
          </form>
          <div>
            <button
              className="bg-gray-500 mr-1 py-1 px-5 text-lg text-slate-50 rounded-md hover:bg-gray-700"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button
              className="bg-pink-500 ml-1 py-1 px-5 text-lg text-slate-50 rounded-md hover:bg-pink-700"
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
