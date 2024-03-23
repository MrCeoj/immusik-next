import { redirect } from "next/navigation";
import router from "next/router";
import React, { useState } from "react";

const agregarSucursal = () => {
  //useStates que manejan si hay errores y un mensaje de error cambiante
  const [error, setError] = useState(false);
  const [mensajeDeError, setMensajeDeError] = useState("");

  //useStates que manejan los datos de la sucursal
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  /*cuando se envíe el formulario se haran validaciones para que no haya 
  campos vacíos*/
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (nombre === "" || direccion === "") {
      setMensajeDeError("No deje espacios en blanco");
      setError(true);
      return; //Se corta el flujo
    }
    setError(false);

    /*Si no hay errores se sigue con el flujo haciendo petición fecth POST
    para crear una nueva sucursal, enviando nombre y dirección*/
    fetch("api/Sucursal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        direccion,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          alert(data.message);
        });
      } else {
        alert("Hubo un problema al registrar la sucursal.");
      }
    });
    router.push("/sucursales");
  };

  /*Cuerpo de la página, un form donde se ingresan los datos, al presionar
  el botón de agregar se manda llamar la función handleSubmit en este mismo
  archivo.*/
  return (
    <>
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <form className="bg-white p-4 flex flex-col rounded-md shadow-md">
          {error && (
            <div
              className=" bg-red-800 text-white text-center p-3 uppercase font-bold
                rounded-md"
            >
              <p>{mensajeDeError}</p>
            </div>
          )}
          <h1 className="font-bold text-lg text-blue-900 mb-3">
            Agregar sucursal
          </h1>
          <label className="py-1">Nombre</label>
          <input
            className="mb-3 bg-gray-100 p-2 shadow-md rounded-md"
            placeholder="Nombre de la sucursal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value.toUpperCase())}
          />
          <label className="py-1">Direccion</label>
          <input
            className="mb-3 bg-gray-100 p-2 shadow-md rounded-md"
            placeholder="Dirección de la sucursal"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value.toUpperCase())}
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 p-2 text-slate-50 rounded-md hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default agregarSucursal;
