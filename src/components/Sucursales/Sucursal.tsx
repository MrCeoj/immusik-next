import { Sucursal } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EditarSucursal from "./EditarSucursal";

/**
 * @param: sucursal, el objeto tipo sucursal que llega desde sucursales.tsx
 * este objeto contiene la información de la sucursal (nombre y dirección)
 * este componente solo muestra la información de la sucursal y sus opciones de borrar y editar.
 * @param cambio estado (verdadero o falso) se utiliza cuando se edita la información de una sucursal, para que el useEffect
 * en sucursales.tsx se actualice.
 * @param setCambio cambia la variable cambio de true a false y viceversa.
 *
 * */

const SucursalInfo = ({
  sucursal,
  cambio,
  setCambio,
}: {
  sucursal: any;
  cambio: any;
  setCambio: any;
}) => {
  const router = useRouter();
  //Editar se usa para mostrar o no la pantalla donde se registran los cambios de la sucursal a editar.
  const [editar, setEditar] = useState(false);

  //Cambia el valor de editar a true, mostrando el componente EditarSucursal.
  const handleEditar = () => {
    setEditar(true);
  };

  //CONTENIDO: Se muestra un renglón con el nombre, dirección y un botón para gestionar.
  return (
    //Si editar es True, este muestra un componente de EditarSucursal
    <>
      {editar && (
        <EditarSucursal
          //Se envia la sucursal, la variable editar y su set al igual que cambio.
          sucursal={sucursal}
          setEditar={setEditar}
          cambio={cambio}
          setCambio={setCambio}
        />
      )}
      <div className="grid grid-cols-3 bg-neutral-400 py-2 rounded-md shadow-sm mb-3 text-lg">
        <div className="flex justify-center items-center mx-3 text-white font-bold">
          {sucursal.nombre}
        </div>
        <div className="flex justify-center items-center mx-3 text-white font-bold">
          {sucursal.direccion}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="mx-1 bg-pink-focus text-white py-1 px-2 rounded-md hover:shadow-pink-accent font-bold transition-all duration-25 ease-out font-bold"
            onClick={handleEditar} //Si se presiona el botón se ejecuta la función handleEditar
          >
            Gestionar
          </button>
        </div>
      </div>
    </>
  );
};

export default SucursalInfo;
