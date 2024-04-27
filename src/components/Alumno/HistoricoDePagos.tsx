import React from "react";
import { Pagos } from "@/entities/edge";

function HistoricoDePagos({ pago }: { pago: Pagos }) {
  return (
    <div className="bg-white py-2 px-4 rounded-lg flex flex-col shadow-md">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-xl font-bold">${pago.monto}</p>
        <p className="text-sm font-bold">{pago.fecha}</p>
      </div>
      <p className="mt-2 mb-1 font-bold text-sm">{pago.metodo.charAt(0).toUpperCase() + pago.metodo.slice(1).toLowerCase()}</p>
      <p className="text-lg">{pago.concepto.charAt(0).toUpperCase() + pago.concepto.slice(1).toLowerCase()}</p>
    </div>
  );
}

export default HistoricoDePagos;
