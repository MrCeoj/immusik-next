import React from "react";

function HistoricoDePagos({ pago }: { pago: any }) {
  return (
    <div className="bg-white py-2 px-4 rounded-lg flex flex-col shadow-md">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-xl font-bold">{pago.monto}</p>
        <p className="text-sm font-bold">{pago.fecha}</p>
      </div>
      <p className="mt-2 mb-1 font-bold">{pago.metodo}</p>
      <p>{pago.concepto}</p>
    </div>
  );
}

export default HistoricoDePagos;
