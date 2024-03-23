import React from "react";

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
