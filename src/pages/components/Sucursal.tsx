import React from "react";

/*@Param: sucursal, el objeto tipo sucursal que llega desde sucursales.tsx
este objeto contiene la información de la sucursal (nombre y dirección)

este componente solo muestra la información de la sucursal y sus opciones de borrar y editar.*/
const Sucursal = ({ sucursal }) => {
  return (
    <>
      <div className="grid grid-cols-3 bg-blue-100 py-2 rounded-md shadow-sm mb-3">
        <div className="flex justify-center items-center">
          {sucursal.nombre}
        </div>
        <div className="flex justify-center items-center">
          {sucursal.direccion}
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-1">borrar</div>
          <div className="mx-1">editar</div>
        </div>
      </div>
    </>
  );
};

export default Sucursal;
