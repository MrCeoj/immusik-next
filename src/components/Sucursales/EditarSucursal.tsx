import React, { useState } from "react";
import ConfirmacionEliminar from "./ConfirmacionEliminar";
/*
 * @param sucursal: la sucursal que se va a editar
 * @param setEditar: cambia el valor de Editar, esto para desaparecer este mismo componente
 * @param cambio: si su valor cambia, el useEffect en sucursales.tsx se actualiza y muestra
 * los cambios que se hicieron
 * @param setCambio: cambia el valor de cambio.
 *  */
const EditarSucursal = ({ sucursal, setEditar, cambio, setCambio }) => {
  //useStates que cambian el valor de los campos que se registran por parte del usuario
  const [nombre, setNombre] = useState(sucursal.nombre);
  const [direccion, setDireccion] = useState(sucursal.direccion);
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

    //Validación de no dejar espacios en blanco
    if (nombre === "" || direccion === "" || contrasena === "") {
      alert("No deje espacios en blanco!");
      return; //Se corta el flujo
    }

    //Continua el flujo
    //Petición fetch tipo PATCH para actualizar datos.
    fetch("api/Sucursal/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //Se mandan id, nombre y dirección.
        id,
        nombre,
        direccion,
        contrasena,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          if (data.message === "Se ha modificado la sucursal correctamente.") {
            setEditar(false);
            alert(data.message);
            toggleCambio();
          } else {
            alert(data.message);
          }
        }); //Si hay una respuesta valida se regresa en formato json.
      } else {
        alert("Hubo un problema al modificar la sucursal.");
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
      <div className="h-screen w-screen bg-gray-100 absolute top-0 left-0 flex justify-center items-center z-100">
        <div className="bg-white p-7 pt-10 flex flex-col items-center w-1/2 h-1/2 justify-center rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-7">
            SUCURSAL {sucursal.nombre}
          </h1>
          <div>
            <form>
              <div className="mt-2">
                <label className="text-2xl mr-7">Nombre</label>
                <input
                  placeholder="Nombre"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value.toUpperCase())}
                ></input>
              </div>
              <div className="mt-5">
                <label className="text-2xl mr-7">Dirección</label>
                <input
                  placeholder="Dirección"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value.toUpperCase())}
                />
              </div>
              <div className="mt-5">
                <label className="text-2xl mr-7">Contraseña Maestra</label>
                <input
                  type="password"
                  placeholder="Contraseña Maestra"
                  className="text-2xl bg-gray-100 py-1 px-2 rounded-lg"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex w-full mt-7 justify-between px-10 mb-5">
            <button
              onClick={handleCancelar}
              className="bg-gray-500 text-white py-1 px-10 rounded-lg text-lg hover:bg-gray-700"
            >
              Cancelar
            </button>
            <div>
              <button
                onClick={handleEditar}
                className="bg-pink-500 text-white py-1 px-10 rounded-lg text-lg mr-4 hover:bg-pink-700"
              >
                Editar
              </button>
              <button
                onClick={handleEliminar}
                className="bg-red-500 text-white py-1 px-10 rounded-lg text-lg hover:bg-red-700"
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
