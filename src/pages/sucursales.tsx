import Link from "next/link";
import { useEffect, useState } from "react";
import Sucursal from "@/components/Sucursales/Sucursal";
import BarraNavegacion from "@/components/barraNavegacion";
import { ToastContainer, toast } from "react-toastify";
import AgregarSucursal from "@/components/sucursal/AgregarSucursal";
// import MasterKeyVerificacion from "./components/MasterKeyVerificacion";

// Componente de React básico que compone  y muestra la lista de sucursales
export default function Sucursales() {
  //Variables reactivas que contienen el arreglo de sucursales, algun error que se produzca y detectan
  // cambios en las sucursales.
  const [sucursals, setSucursals] = useState([]);
  const [error, setError] = useState(null);
  const [cambio, setCambio] = useState(false);
  const [agregar, setAgregar] = useState(false);

  /*SE EJECUTA CADA QUE CARGA ESTA PÁGINA
  UseEffect ejecuta su contenido cada que cargue la página, hace fetch a /api/sucursal con método de GET
  para obtener todas las sucursales y almacenarlas en sucursals*/
  useEffect(() => {
    fetch("/api/Sucursal")
      .then((response) => {
        if (!response.ok) {
          //No hay sucursales
          toast.error("Error al conseguir las sucursales.");
        } else {
          //Si hay sucursales
          return response.json();
        }
      })
      .then((data) => setSucursals(data))
      .catch((error) => setError(error.message));
  }, [cambio]);

  const handleAgregar = () => {
    setAgregar(true);
  };

  const handleCambio = () => {
    if (cambio) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  };

  /*CUERPO DE LA PAGINA
  se muestra el titulo y un componente Sucursal por cada sucursal que exista, finalmente botón de agregar
  que redirije a agregarSucursal.tsx*/
  return (
    <>
      <ToastContainer />
      {agregar && (
        <AgregarSucursal setAgregar={setAgregar} handleCambio={handleCambio} />
      )}
      <BarraNavegacion titulo="Editar sucursales" />
      <div className="bg-[url('../img/fondo.svg')] bg-cover h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="p-10 bg-zinc-800 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-5 text-white">Sucursales</h1>
          {sucursals?.length > 0 && ( //Si no existen sucursales no se muestra este div
            <div>
              {/*DIV DE CABECERA DONDE SE MUESTRAN LOS TITULOS DE LA INFORMACIÓN*/}
              <div className="grid grid-cols-3 bg-zinc-600 text-white font-bold py-2 rounded-md shadow-sm mb-3 text-lg">
                <div className="flex justify-center items-center mx-3 text-2xl font-bold">
                  NOMBRE
                </div>
                <div className="flex justify-center items-center mx-3 text-2xl font-bold">
                  DIRECCIÓN
                </div>
                <div className="flex justify-center items-center mx-3 text-2xl font-bold">
                  GESTIONAR
                </div>
              </div>
              <div className="overflow-y-auto max-h-5/6">
                {sucursals.map((sucursal, i) => (
                  //Por cada sucursal se envía la key, la sucursal, y cambio, este para detectar un cambio desde el componente.
                  <Sucursal
                    key={i}
                    sucursal={sucursal}
                    cambio={cambio}
                    setCambio={setCambio}
                  />
                ))}
              </div>
            </div>
          )}
          <button
            onClick={handleAgregar}
            className="bg-pink-focus text-lg text-white py-1 px-5 rounded-md shadow-md hover:shadow-pink-accent font-bold mt-3 hover:-translate-y-1 transition-all duration-25 ease-out"
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}
