import { redirect } from "next/navigation";
import router from "next/router";
import React, { useState } from "react";

const AgregarSucursal = () => {
  //useStates que manejan si hay errores y un mensaje de error cambiante
  const [error, setError] = useState(false);
  const [mensajeDeError, setMensajeDeError] = useState("");

  //useStates que manejan los datos de la sucursal
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleCancelar = () => {
    router.push("/sucursales");
  };

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
      method: "POST", //Metodo: POST porque vamos a hacer un nuevo registro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre, //Se envían como cuerpo el nombre y dirección de la nueva sucursal
        direccion,
      }),
    }).then((response) => {
      //Se obtiene la respuesta
      if (response.ok) {
        return response.json().then((data) => {
          //Si la respuesta es exitosa se convierte en json y se regresa
          alert(data.message);
        });
      } else {
        alert("Hubo un problema al registrar la sucursal.");
      }
    });
    router.push("/sucursales"); //Se regresa a sucursales.
  };

  /*Cuerpo de la página, un form donde se ingresan los datos, al presionar
  el botón de agregar se manda llamar la función handleSubmit en este mismo
  archivo.*/
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-10 flex flex-col rounded-lg shadow-lg items-center justify-center">
          {error && (
            <div
              className=" bg-red-800 text-white text-center p-3 uppercase font-bold
                rounded-md"
            >
              <p>{mensajeDeError}</p>
            </div>
          )}
          <h1 className="font-bold text-3xl mb-3">Agregar sucursal</h1>
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
          </form>
          <div>
            <button
              type="submit"
              className="bg-gray-500 mr-1 py-1 px-5 text-lg text-slate-50 rounded-md hover:bg-gray-700"
              onClick={handleCancelar}
            >
              Cancelar
            </button>
            <button
              type="submit"
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
