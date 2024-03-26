import Link from "next/link";
import { useEffect, useState } from "react";
import Sucursal from "../components/Sucursal";
// import MasterKeyVerificacion from "./components/MasterKeyVerificacion";

// Componente de React básico que compone  y muestra la lista de sucursales
export default function Sucursales() {
  //Variables reactivas que contienen el arreglo de sucursales, algun error que se produzca y detectan
  // cambios en las sucursales.
  const [sucursals, setSucursals] = useState([]);
  const [error, setError] = useState(null);
  const [cambio, setCambio] = useState(false);

  /*SE EJECUTA CADA QUE CARGA ESTA PÁGINA
  UseEffect ejecuta su contenido cada que cargue la página, hace fetch a /api/sucursal con método de GET
  para obtener todas las sucursales y almacenarlas en sucursals*/
  useEffect(() => {
    fetch("/api/Sucursal")
      .then((response) => {
        if (!response.ok) {
          //No hay sucursales
        } else {
          //Si hay sucursales
          return response.json();
        }
      })
      .then((data) => setSucursals(data))
      .catch((error) => setError(error.message));
  }, [cambio]);

  /*CUERPO DE LA PAGINA
  se muestra el titulo y un componente Sucursal por cada sucursal que exista, finalmente botón de agregar
  que redirije a agregarSucursal.tsx*/
  return (
    <>
      <div className="flex p-4 flex-col items-center justify-center">
        <h1>Sucursales</h1>
        {sucursals?.length > 0 && ( //Si no existen sucursales no se muestra este div
          <div>
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
        )}
        <div>
          <Link
            href="/agregarSucursal"
            className="bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-700"
          >
            Agregar
          </Link>
        </div>
      </div>
    </>
  );
}
