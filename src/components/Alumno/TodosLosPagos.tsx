import React from "react";
import HistoricoDePagos from "./HistoricoDePagos";
import { toTitleCase } from "@/lib/utils";

function TodosLosPagos({
  pagos,
  setVerTodos,
  alumno
}: {
  pagos: any;
  setVerTodos: any;
  alumno: any;
}) {
  const handleSalir = () => {
    setVerTodos(false);
  };

  return (
    <div className="bg-black bg-opacity-50 top-0 left-0 absolute z-50 h-full w-full flex items-center justify-center">
      <div className="relative bg-secciones opacity-100 rounded-lg shadow-lg p-5 text-black w-10/12 overflow-y-auto max-h-[550px]">
        <h1 className="text-center font-bold text-white text-3xl">Todos los pagos de {toTitleCase(alumno.nombre)}{" "}
            {toTitleCase(alumno.aPaterno)}
        </h1>
        <div className="grid grid-cols-5 gap-3 mt-4">
          {pagos.map((pago: any) => (
              <HistoricoDePagos pago={pago}/>
          ))}
          </div>
          <div className="flex justify-end">
            <button onClick={handleSalir} className="bg-pink-500 right-4 top-2 absolute hover:bg-pink-600 text-white rounded px-3 py-2 mt-3 justify-self-end self-center disabled:bg-disabled transition-all duration-75">
              Salir
            </button>
          </div>
      </div>
    </div>
  );
}

export default TodosLosPagos;
